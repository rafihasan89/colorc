import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { BranchService } from 'src/app/services/branch.service';
import { PartyService } from 'src/app/services/party.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { isTemplateSpan } from 'typescript';
import { DatePipe } from '@angular/common';
import { SellerService } from 'src/app/services/seller.service';



@Component({
  selector: 'app-billform',
  templateUrl: './billform.component.html',
  styleUrls: ['./billform.component.css']
})
export class BillformComponent implements OnInit {
  partys = [];
  sellers = [];
  branchs = [];
  frombranchs = [];
  tobranchs = [];
  products = [];


  data = {
    "methodv": "1",
    "buy": true,
    "sell": false,
    "transfer": false,
    "billNo": "",
    "billDate": "",

    "party": {
      "id": "0",
    },
    "seller": {
      "id": "0",
    },
    "branch": {
      "id": "0",
    },
    "transferfrom": {
      "id": "0",
    },
    "transferto": {
      "id": "0",
    },

    "itemList": [],
    "total": 0

  };
  id = 0;
  isEdit = false;

  myDate = new Date();
  constructor(
    private billService: BillService,
    private partyService: PartyService,
    private sellerService: SellerService,
    private branchService: BranchService,
    private productService: ProductService,
    private paymentService: PaymentService,
    private snack: MatSnackBar,
    private datePipe: DatePipe,
    private _router: Router,
    private _route: ActivatedRoute) {

  }



  ngOnInit(): void {

    this.data.billDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.partyService.partys().subscribe((data: any) => {
      this.partys = data.content;
    })
    this.sellerService.sellers().subscribe((data: any) => {
      this.sellers = data.content;
    })
    this.branchService.branchs().subscribe((data: any) => {
      this.branchs = data.content;
    })
    this.branchService.branchs().subscribe((data: any) => {
      this.frombranchs = data.content;
    })
    this.branchService.branchs().subscribe((data: any) => {
      this.tobranchs = data.content;
    })


    this.productService.products().subscribe((data: any) => {
      this.products = data.content;
      this.products.forEach(item => {

        this.data.itemList.push({
          "product": {
            "id": item.id,
            "shortName": item.shortName
          },
          "quantity": "",
          "sellPrice": "",
          "itemTotal": ""

        });

      });

    })

    this._route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 

    });

    if (this.id >= 1) {
      this.billService.getBill(this.id).subscribe(
        (data: any) => {
          console.log(data);
          if (data.content.buy) {
            this.data.methodv = "1";
          } else if (data.content.sell) {
            this.data.methodv = "2";
          } else if (data.content.transfer) {
            this.data.methodv = "3";
          }
          this.method(this.data.methodv);

          this.data.billNo = data.content.billNo;
          this.data.billDate = data.content.billDate;
          this.data.party.id = data.content.partyid;
          this.data.seller.id = data.content.sellerid;
          this.data.branch.id = data.content.branchid;

          this.data.transferfrom.id = data.content.transferfromid;
          this.data.transferto.id = data.content.transfertoid;


          console.log("Sunam1");
          this.productService.products().subscribe(
            (pdata: any) => {
              this.products = pdata.content;
              this.data.itemList = [];
              this.products.forEach(item => {

                this.data.itemList.push({
                  "product": {
                    "id": item.id,
                    "shortName": item.shortName
                  },
                  "quantity": "",
                  "sellPrice": "",
                  "itemTotal": ""

                });

              });

            }, () => { },
            () => {
              console.log("Sunam2");
              this.data.itemList.forEach(e1 => {

                data.content.itemList.forEach(e2 => {
                  if (e1.product.id == e2.productid) {
                    e1.quantity = e2.quantity;
                    e1.sellPrice = e2.sellPrice;
                    this.itemTotal(e1);
                    console.log("Sunam");

                  }
                });


              });

            }

          );



          this.isEdit = true;

        },
        (error) => {
          console.log(error);
        }
      );
    }


  }


  onSubmit() {


    let mData = {
      "buy": false,
      "sell": false,
      "transfer": false,
      "billNo": "",
      "billDate": "",
      "party": {
        "id": "",
      },
      "seller": {
        "id": "",
      },
      "branch": {
        "id": "",
      },
      "transferto": {
        "id": "",
      },
      "transferfrom": {
        "id": "",
      },
      "itemList": [],
    }


    mData.billNo = this.data.billNo;
    mData.billDate = this.data.billDate;

    if (this.data.buy || this.data.sell) {
      if (this.data.buy) {
        mData.buy = true;
        mData.seller.id = this.data.seller.id;
      } else if (this.data.sell) {
        mData.sell = true;
        mData.party.id = this.data.party.id;
      }

      mData.branch.id = this.data.branch.id;
    } else if (this.data.transfer) {
      mData.transfer = true;
      mData.transferfrom.id = this.data.transferfrom.id;
      mData.transferto.id = this.data.transferto.id;
    }


    mData.itemList = this.billItem(this.data.itemList, mData.itemList);

    if (this.validation(mData)) {

      if (!this.isEdit) {
        this.billService.addBill(mData).subscribe(
          (data) => {
            this.snack.open('Bill Is Added Successfully!! ', 'Close', {
              duration: 5000,
              horizontalPosition: "center",
              verticalPosition: "top",
            });
            Swal.fire('Success', 'Bill Is Added Successfully', 'success');

          },

          (error) => {
            Swal.fire('Error !! ', 'Error while adding Bill', 'error');
            console.log(error);
          },
          () => {
            this.productService.products().subscribe((data: any) => {

              this.products = data.content;

            })
            this.data.billNo = " ";
            this.data.party.id = "0";

            this.data.itemList.forEach(e => {
              e.quantity = ""
              e.sellPrice = "";
              e.itemTotal = "";
            });
            this.data.total = 0;
          }
        );

      }

      else if (this.isEdit) {

        this.billService.updateBill(this.id, mData).subscribe(
          (data) => {
            this.snack.open('Bill Is Update Successfully!! ', 'Close', {
              duration: 5000,
              horizontalPosition: "center",
              verticalPosition: "top",
            });
            Swal.fire('Success', 'Bill Is Update Successfully', 'success');
          },

          (error) => {
            Swal.fire('Error!! ', 'Error while update Bill', 'error');
            console.log(error);
          },
          () => {
            this.productService.products().subscribe((data: any) => {
              this.products = data.content;
            })
            this.data.billNo = " ";
            this.data.party.id = "0";

            this.data.itemList.forEach(e => {
              e.quantity = ""
              e.sellPrice = "";
              e.itemTotal = "";
            });
            this.data.total = 0;
          }
        );
      }

    }

  }

  validation(mData) {
    if (mData.billNo == "" || mData.billNo <= 0) {
      Swal.fire('Error !! ', 'Give Bill No', 'error');
      return false;
    }
    if (mData.billDate == "") {
      Swal.fire('Error !! ', 'Give Bill Date', 'error');
      return false;
    }
    if (this.data.buy == true || this.data.sell == true) {

      if (this.data.buy == true) {
        if (mData.seller.id == "" || mData.seller.id <= 0) {
          Swal.fire('Error !! ', 'Choose Seller Name', 'error');
          return false;
        }

      } else if (this.data.sell == true) {
        if (mData.party.id == "" || mData.party.id <= 0) {
          Swal.fire('Error !! ', 'Choose Party Name', 'error');
          return false;
        }
      }

      if (mData.branch.id == "" || mData.branch.id <= 0) {
        Swal.fire('Error !! ', 'Choose Branch Name', 'error');
        return false;
      }
    }

    if (this.data.transfer == true) {
      if (mData.transferfrom.id == "" || mData.transferfrom.id <= 0) {
        Swal.fire('Error !! ', 'Choose From Branch Name', 'error');
        return false;
      }
      if (mData.transferto.id == "" || mData.transferto.id <= 0) {
        Swal.fire('Error !! ', 'Choose To Branch Name', 'error');
        return false;
      }

      if (mData.transferfrom.id == mData.transferto.id) {
        Swal.fire('Error !! ', 'Transfer Branchs Should Not Same', 'error');
        return false;
      }

    }
    if (mData.itemList.length <= 0) {
      Swal.fire('Error !! ', 'Items Should Not Empty', 'error');
      return false;
    }
    return true;
  }

  billItem(data: any, fData: any) {
    data.forEach(e => {
      if (e.quantity > 0 && e.sellPrice > 0) {
        fData.push({
          "product": {
            "id": e.product.id,
          },
          "quantity": e.quantity,
          "sellPrice": e.sellPrice,
        });
      }
    });

    return fData;
  }

  getProducts() {
    this.productService.products().subscribe((data: any) => {

      this.products = data.content;

    })
  }

  resetData() {
    this.data.billNo = " ";
    this.data.party.id = "";
    this.data.itemList.forEach(e => {
      e.quantity = ""
      e.sellPrice = "";
      e.itemTotal = "";
    });
    this.data.total = 0;


  }


  removeEmptyItems() {

  }

  getItemPrice(data: any) {
    if(this.data.party.id > "0"){
      this.billService.getPartyItemPrice(this.data.party.id, data.product.id).subscribe((itemPrice: any) => {
        if(itemPrice.content > 0){
          data.sellPrice = itemPrice.content;
          this.itemTotal(data);
        }
      }
      
      )
    }
    else{
      this.products.forEach(element => {
        if (data.product.id == element.id) {
          data.sellPrice = element.currentPrice;
        }
      });
    }
    
   

  }

  itemTotal(data: any) {
    data.itemTotal = data.quantity * data.sellPrice;
    this.totalPrice();
  }

  totalPrice() {
    let total = 0;
    this.data.itemList.forEach(e => {
      if (parseInt(e.itemTotal) > 0) {
        total += parseInt(e.itemTotal);
      }
    });
    this.data.total = total;

  }

  method(id: any) {
    console.log(id);
    if (id == 1) {
      this.data.buy = true;
      this.data.sell = false;
      this.data.transfer = false;

    } else if (id == 2) {
      this.data.buy = false;
      this.data.sell = true;
      this.data.transfer = false;

    } else if (id == 3) {
      this.data.buy = false;
      this.data.sell = false;
      this.data.transfer = true;

    }
  }




  trackByIndex(index: number, obj: any): any {
    return index;
  }

}

