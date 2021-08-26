import { Component, OnInit } from '@angular/core';
import { HttpclientService, Customer } from '../httpclient.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

customer: Customer = new Customer('', '', '', '', '', '', '');
  constructor(    private httpClientService: HttpclientService
    ) { }

    public showCapsWarning = false;

  ngOnInit(): void {
    this. customer = new Customer('', '', '', '', '', '', '');

  }


  createCustomer(): void {
    this.customer.customerid = 'HDFC' + this.customer.phone;
    alert(this.customer.customerid + 'This is your ID ....please remember this');
    this.httpClientService.createCustomer(this.customer)
        .subscribe( data => {
          alert( data.name + ' your account created successfully.');
          this. customer = new Customer('', '', '', '', '', '', '');

          console.log('employee' + data);
        });

  }

        public VerifyPassword(e: { keyCode: number; }){
          if(e.keyCode>=65 && e.keyCode<=90) 
      {
              this.showCapsWarning = true;
          } else {
            this.showCapsWarning = false;
          }
      }
      public regExp1=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
      public userName: any;
      public msg: any;
      public warn: any;
      public pwd: any ;
      public regExp = /(?=.*[A-Z])\w{4,15}/;
      public pwdStrength='';
      public emailstatus='';
      public min: any;
      public max: any;
      public low: any;
      public high: any;
      public val: any;
      public email: any;
      
      public strengthMeter(min: number,max: number,val: number,low: number,high: number){
        this.min=min;
        this.max=max;
        this.low=low;
        this.high=high;
        this.val=val;
      }
      
      
       VerifyPassword1(){
        if (this.customer.password.match(this.regExp)){
        this.pwdStrength='Strong Password';
        this.strengthMeter(1,100,100,0,0);
        }
        else{
        if(this.customer.password.length<4) {
        this.pwdStrength='poor passsword';
        this.strengthMeter(1,100,100,60,80);
        }
        else{
        this.pwdStrength='weak password';
        this.strengthMeter(1,200,200,40,80);
        }
        }



  }

}
