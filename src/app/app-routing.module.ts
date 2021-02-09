import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionadminComponent } from './discussionadmin/discussionadmin.component';
import { DiscussionadminchatComponent } from './discussionadminchat/discussionadminchat.component';
import { HomeComponent } from './home/home.component';
import { NewbookingComponent } from './newbooking/newbooking.component';
import { RegisterComponent } from './register/register.component';
import { ServicehistoryComponent } from './servicehistory/servicehistory.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { WorkstatusComponent } from './workstatus/workstatus.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent,
  children:[
    {path:'newbook',component:NewbookingComponent},
    {path:'workstatus',component:WorkstatusComponent},
    {path:'discussion',component:DiscussionComponent},
    {path:'servicehistory',component:ServicehistoryComponent},
    {path:'dashhome',component:DashhomeComponent},
    {path:'viewdetails',component:ViewdetailsComponent},
    {path:'updatedetails',component:UpdatebookingComponent},
    {path:'admindisco',component:DiscussionadminComponent},
    {path:'adminchat',component:DiscussionadminchatComponent},
    {path:'billing',component:BillingComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
