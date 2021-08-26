import { Component, OnInit } from '@angular/core';
import { HttpclientService, Employee } from '../httpclient.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  employee: Employee = new Employee('', '', '', '', '', '', '');

  constructor(  private httpClientService: HttpclientService) { }

  ngOnInit(): void {
    this. employee = new Employee('', '', '', '', '', '', '');

  }


  createEmployee(): void {
    this.employee.employeeid = 'HDFC' + this.employee.phone;

    alert(this.employee.employeeid);
    this.httpClientService.createEmployee(this.employee)
        .subscribe( data => {
          this. employee = new Employee('', '', '', '', '', '', '');

          alert('employee Id =' + data.employeeid + ' your account created successfully. remember this employee ID');
          console.log('employee' + data);
        });
      }
        public showCapsWarning = false;

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
        if (this.employee.password.match(this.regExp)){
        this.pwdStrength='Strong Password';
        this.strengthMeter(1,100,100,0,0);
        }
        else{
        if(this.employee.password.length<4) {
        this.pwdStrength='poor passsword';
        this.strengthMeter(1,100,100,60,80);
        }
        else{
        this.pwdStrength='weak password';
        this.strengthMeter(1,200,200,40,80);
        }
        }
  }
  /*
   <select [(ngModel)]="customer.accounttype">
            <option>Savings</option>
            <option>Loan</option>
            <option>Fixed Deposit</option>
          </select>


          createEmployee(): void{
            alert(this.employee.employeename+" has registered for "+this.employee.department+" department")
          }*/
}
