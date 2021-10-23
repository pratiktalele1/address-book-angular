import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookDataService } from '../address-book-data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * array to store data
   */
  public datas=[]
  
  /**
   * service and router injected
   */
  constructor(private _data:AddressBookDataService, private _navigate:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  login=this.fb.group({
    userName:[''],
    password:['']
  });

  /**
    lodaing data to check for valid user depending on userName and password
   */
  onLoginSubmit(){
      this._data.getLogins(this.login.value)
      .subscribe((data:any)=>{
        if(data==200){
            this._navigate.navigate(["home"]);
        }else{
            alert("username or password is invalid");
        }
      })
  }

}
