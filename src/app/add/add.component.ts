import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookDataService } from '../address-book-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public value;
  public getId;
  constructor(private _data:AddressBookDataService, private _router:ActivatedRoute, private _nevigate:Router) { }

  /**
   * binding data to form for edit purpose using getDataById function
   */
  ngOnInit(): void {
    this.getId=this._router.snapshot.paramMap.get('id');

    this._data.getDataById(this._router.snapshot.paramMap.get('id'))
    .subscribe(
      (getData:any) => 
      {
        this.registrationForm=new FormGroup({
          name:new FormControl(getData.data.name),
          address: new FormControl(getData.data.address),
          pin:new FormControl(getData.data.pin),
          cityName:new FormControl(getData.data.cityName),
          stateName:new FormControl(getData.data.stateName),
          phoneNumber:new FormControl(getData.data.phoneNumber)   
        });

      }
    );
  }

  /**
   * assigning data to form and form data to variable for reactive form
   */
  registrationForm=new FormGroup({
    name:new FormControl(''),
    address: new FormControl(''),
    pin:new FormControl(''),
    cityName:new FormControl(''),
    stateName:new FormControl(''),
    phoneNumber:new FormControl('')
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
