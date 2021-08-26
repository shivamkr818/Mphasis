import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeemployeeComponent } from './welcomeemployee/welcomeemployee.component';
import { WelcomemanagerComponent } from './welcomemanager/welcomemanager.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeheaderComponent } from './welcomeheader/welcomeheader.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    EmployeeRegisterComponent,
    LoginComponent,
    HeaderComponent,
    WelcomeComponent,
    WelcomeemployeeComponent,
    WelcomemanagerComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    WelcomeheaderComponent,
    FeedbackComponent,
    ContactUsComponent,
    ViewfeedbackComponent,
    LoanrequestComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }