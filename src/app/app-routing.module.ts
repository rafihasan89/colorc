import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './components/admin/bill/bill.component';
import { BillformComponent } from './components/admin/billform/billform.component';
import { BillhomeComponent } from './components/admin/billhome/billhome.component';
import { AddbranchComponent } from './components/admin/branch-add/addbranch.component';
import { BranchComponent } from './components/admin/branch/branch.component';
import { BranchhomeComponent } from './components/admin/branchhome/branchhome.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomepageadminComponent } from './components/admin/homepageadmin/homepageadmin.component';
import { PartyComponent } from './components/admin/party/party.component';
import { PartyformComponent } from './components/admin/partyform/partyform.component';
import { PartyhomeComponent } from './components/admin/partyhome/partyhome.component';
import { PaymentComponent } from './components/admin/payment/payment.component';
import { PaymentformComponent } from './components/admin/paymentform/paymentform.component';
import { PaymenthomeComponent } from './components/admin/paymenthome/paymenthome.component';
import { ProductComponent } from './components/admin/product/product.component';
import { ProductaddComponent } from './components/admin/productadd/productadd.component';
import { ProducthomeComponent } from './components/admin/producthome/producthome.component';
import { AdduserComponent } from './components/admin/user-add/adduser.component';
import { UserComponent } from './components/admin/user/user.component';
import { UserhomeComponent } from './components/admin/userhome/userhome.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { DsheetComponent } from './components/admin/dsheet/dsheet.component';
import { PstatementComponent } from './components/admin/pstatement/pstatement.component';
import { AdminGuard } from './services/admin.guard';
import { StockComponent } from './components/admin/stock/stock.component';
import { WstatementComponent } from './components/admin/wstatement/wstatement.component';
import { PsheetComponent } from './components/admin/psheet/psheet.component';
import { SellerhomeComponent } from './components/admin/sellerhome/sellerhome.component';
import { SellerformComponent } from './components/admin/sellerform/sellerform.component';
import { SellerComponent } from './components/admin/seller/seller.component';
import { BillconfirmComponent } from './components/admin/billconfirm/billconfirm.component';
import { OfficerGuard } from './services/officer.guard';
import { OfficerdashboardComponent } from './components/admin/officerdashboard/officerdashboard.component';
import { BillofficerhomeComponent } from './components/admin/billofficerhome/billofficerhome.component';
import { BillofficerconfirmComponent } from './components/admin/billofficerconfirm/billofficerconfirm.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: 'admin', pathMatch: 'full' },


{path: 'officer',
component: OfficerdashboardComponent,
canActivate: [OfficerGuard],

children: [
  { path: '', redirectTo: 'bill', pathMatch: 'full' },
  { path: 'bill', component: BillofficerhomeComponent,
  children: [
    {path: '', component: BillofficerconfirmComponent },
    {path: 'billadd',  component: BillformComponent },
    {path: 'billedit',  component: BillformComponent }
]}
]

},
{
  path: 'admin',
  component: DashboardComponent,
  canActivate: [AdminGuard],
  children: [
    { path: '', redirectTo: 'stock', pathMatch: 'full' },
    { path: 'stock', component: StockComponent },
    { path: 'dsheet', component: DsheetComponent },
    { path: 'psheet', component: PsheetComponent },
    { path: 'wstatement', component: WstatementComponent },
    { path: 'pstatement', component: PstatementComponent },
    {
      path: 'homepage',
      component: HomepageadminComponent
    },

    {
      path: 'user',
      component: UserhomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: UserComponent,
          },
          {
          path: 'useradd',
          component: AdduserComponent,
          },
          {
          path: 'useredit',
          component: AdduserComponent,
          }
    ]
    },
    {
      path: 'branch',
      component: BranchhomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: BranchComponent,
          },
          {
          path: 'branchadd',
          component: AddbranchComponent,
          },
          {
          path: 'branchedit',
          component: AddbranchComponent,
          }
    ]
    },
    {
      path: 'product',
      component: ProducthomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: ProductComponent,
          },
        {
        path: 'productadd',
        component: ProductaddComponent,
        },
        {
          path: 'productedit',
          component: ProductaddComponent,
         }
    ]
    },
    {
      path: 'party',
      component: PartyhomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: PartyComponent,
          },
        {
        path: 'partyadd',
        component: PartyformComponent,
        },
        {
          path: 'partyedit',
          component: PartyformComponent,
         }
    ]
    },
    {
      path: 'seller',
      component: SellerhomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: SellerComponent,
          },
        {
        path: 'selleradd',
        component: SellerformComponent,
        },
        {
          path: 'selleredit',
          component: SellerformComponent,
         }
    ]
    },
    
    {
      path: 'payment',
      component: PaymenthomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: PaymentComponent,
          },
        {
        path: 'paymentadd',
        component: PaymentformComponent,
        },
        {
          path: 'paymentedit',
          component: PaymentformComponent,
         },
    
         
    ]
    },
    {
      path: 'bill',
      component: BillhomeComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: '',
          component: BillComponent,
          },
        {
        path: 'billadd',
        component: BillformComponent,
        },
        {
          path: 'billedit',
          component: BillformComponent,
         },
         {
          path: 'billconfirm',
          component: BillconfirmComponent,
          },
]
}
    

  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
