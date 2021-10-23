import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookDataService } from '../address-book-data.service';

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
  constructor(private _data:AddressBookDataService, private _navigate:Router) { }

  ngOnInit(): void {
    
  }

  /**
    lodaing data to check for valid user depending on userName and password
   */
  onLoginSubmit(name:any,pass:any){
    this._data.getLogins()
    .subscribe((getData:any)=>{
      if(getData.data.userName==name&& getData.data.password==pass){
        this._navigate.navigate["home"];
      }else{
        alert("Invalid username or password");
      }
    });
  }

}
