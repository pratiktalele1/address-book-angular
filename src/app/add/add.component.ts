import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookDataService } from '../address-book-data.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public value;
  public getId;
  constructor(private _data:AddressBookDataService, private _router:ActivatedRoute, private _nevigate:Router, private fb:FormBuilder) { }

  /**
   * binding data to form for edit purpose using getDataById function
   */
  ngOnInit(): void {
    this.getId=this._router.snapshot.paramMap.get('id');

    this._data.getDataById(this._router.snapshot.paramMap.get('id'))
    .subscribe(
      (getData:any) => 
      {
        this.registrationForm=this.fb.group({
          name:[getData.data.name],
          address: [getData.data.address],
          pin:[getData.data.pin],
          cityName:[getData.data.cityName],
          stateName:[getData.data.stateName],
          phoneNumber:[getData.data.phoneNumber]   
        });

      }
    );
  }

  /**
   * assigning data to form and form data to variable for reactive form
   */
  registrationForm=this.fb.group({
    name:[''],
    address: [''],
    pin:[''],
    cityName:[''],
    stateName:[''],
    phoneNumber:['']
  });

  /**
   *  saving data to address book using enrollDetails function
   */
  submitData(){
    console.log(this.registrationForm.value);
    this._data.enrollDetails(this.registrationForm.value).subscribe(data=>console.log("data inserted successfully"));
    this._nevigate.navigate(["home"]);
  }

  /**
   * updating data using existing id
   */
  update(){
    this._data.update(this._router.snapshot.paramMap.get('id'),this.registrationForm.value).subscribe(data=>console.log("data updated successfully"));
    this._nevigate.navigate(["home"]);
  }
}
