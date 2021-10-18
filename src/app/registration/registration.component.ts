import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressBookDataService } from '../address-book-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  /**
   * service and router injected
   * @param _data 
   * @param _navigate 
   */
  constructor(private _data:AddressBookDataService, private _navigate:Router) { }

  public checkPassword:boolean=false;

  /**
   * binding data to form for reactive form
   */
  registration=new FormGroup({
    userName: new FormControl(''),
    email :  new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
  });

  ngOnInit(): void {
  }

  /**
   * sending data for service to store new login data 
   */
  onRegister(){
    if(this.registration.value.password==this.registration.value.confirmPassword){
      this._data.registrationData(this.registration.value).subscribe(data=>console.log("registration data send"));
      this._navigate.navigate(['login']);
    }else{
     this.checkPassword=true;
    }
    
  }
}
