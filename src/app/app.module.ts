import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewbookingComponent } from './newbooking/newbooking.component';
import { WorkstatusComponent } from './workstatus/workstatus.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ServicehistoryComponent } from './servicehistory/servicehistory.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { DiscussionadminComponent } from './discussionadmin/discussionadmin.component';
import { DiscussionadminchatComponent } from './discussionadminchat/discussionadminchat.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent,
    NewbookingComponent,
    WorkstatusComponent,
    DiscussionComponent,
    ServicehistoryComponent,
    DashhomeComponent,
    ViewdetailsComponent,
    UpdatebookingComponent,
    DiscussionadminComponent,
    DiscussionadminchatComponent,
    BillingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
