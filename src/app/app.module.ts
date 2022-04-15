import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';



import { LoginComponent } from './components/pages/auth/login/login.component';
 

import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserComponent } from './components/admin/user/user.component';
import { AdduserComponent } from './components/admin/user-add/adduser.component';
import { UserhomeComponent } from './components/admin/userhome/userhome.component';
import { BranchhomeComponent } from './components/admin/branchhome/branchhome.component';
import { AddbranchComponent } from './components/admin/branch-add/addbranch.component';
import { BranchComponent } from './components/admin/branch/branch.component';
import { CarService } from './carservice';
import { ProductComponent } from './components/admin/product/product.component';
import { ProductaddComponent } from './components/admin/productadd/productadd.component';
import { ProducthomeComponent } from './components/admin/producthome/producthome.component';
import { PartyComponent } from './components/admin/party/party.component';
import { PartyformComponent } from './components/admin/partyform/partyform.component';
import { PartyhomeComponent } from './components/admin/partyhome/partyhome.component';
import { PaymentComponent } from './components/admin/payment/payment.component';
import { PaymentformComponent } from './components/admin/paymentform/paymentform.component';
import { PaymenthomeComponent } from './components/admin/paymenthome/paymenthome.component';
import { BillComponent } from './components/admin/bill/bill.component';
import { BillformComponent } from './components/admin/billform/billform.component';
import { BillhomeComponent } from './components/admin/billhome/billhome.component';
import { StockComponent } from './components/admin/stock/stock.component';
import { DsheetComponent } from './components/admin/dsheet/dsheet.component';
import { WstatementComponent } from './components/admin/wstatement/wstatement.component';
import { PstatementComponent } from './components/admin/pstatement/pstatement.component';
import { PsheetComponent } from './components/admin/psheet/psheet.component';
import { SellerComponent } from './components/admin/seller/seller.component';
import { SellerformComponent } from './components/admin/sellerform/sellerform.component';
import { SellerhomeComponent } from './components/admin/sellerhome/sellerhome.component';
import { BillconfirmComponent } from './components/admin/billconfirm/billconfirm.component';
import { OfficerdashboardComponent } from './components/admin/officerdashboard/officerdashboard.component';
import { BillofficerhomeComponent } from './components/admin/billofficerhome/billofficerhome.component';
import { BillofficerconfirmComponent } from './components/admin/billofficerconfirm/billofficerconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    AdduserComponent,
    UserhomeComponent,
    BranchhomeComponent,
    AddbranchComponent,
    BranchComponent,
    ProductComponent,
    ProductaddComponent,
    ProducthomeComponent,
    PartyComponent,
    PartyformComponent,
    PartyhomeComponent,
    PaymentComponent,
    PaymentformComponent,
    PaymenthomeComponent,
    BillComponent,
    BillformComponent,
    BillhomeComponent,
    StockComponent,
    DsheetComponent,
    WstatementComponent,
    PstatementComponent,
    PsheetComponent,
    SellerComponent,
    SellerformComponent,
    SellerhomeComponent,
    BillconfirmComponent,
    OfficerdashboardComponent,
    BillofficerhomeComponent,
    BillofficerconfirmComponent

  ],
  imports: [
    AppRoutingModule,
    AccordionModule,
    TableModule,ToastModule,CalendarModule, SliderModule,MultiSelectModule,ContextMenuModule,
    DialogModule,ButtonModule,DropdownModule,ProgressBarModule,InputTextModule,

    BrowserModule,
    
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    
    MatFormFieldModule
  ],
  providers: [authInterceptorProviders,DatePipe,CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
