import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeemployeeComponent } from './welcomeemployee/welcomeemployee.component';
import { WelcomemanagerComponent } from './welcomemanager/welcomemanager.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'addemployee', component: EmployeeRegisterComponent},
  { path: 'addcustomer', component: CustomerRegisterComponent},
  { path: 'welcome/:userID', component: WelcomeComponent},
  { path: 'welcomeemployee/:userID', component: WelcomeemployeeComponent},
  { path: 'welcomemanager/:userID', component: WelcomemanagerComponent},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'AlphaBank', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'viewfeedback', component: ViewfeedbackComponent },
  { path: 'loanrequest', component: LoanrequestComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
