import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookDataService } from '../address-book-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public value;
  public details=[];
  constructor(private _data:AddressBookDataService , private _nevigate:Router ) { }

  /**
   * binding and showing data in table format using ngOnInit function
   */
  ngOnInit(): void {
    this._data.getAllAddressBookDetails()
      .subscribe(
        (getData:any)=>{
          this.details = getData.data;
          this.value = getData.message;
        }
      );
    
  }

  /**
   * sending getId to edit existitng data from database
   * @param getId 
   */
  edit(getId:number){
    this._nevigate.navigate(['add',getId]);
  } 

  /**
   * sending getId to remove data from database
   * @param getId 
   */
  remove(getId:number){
    this._data.delete(getId).subscribe(data=>console.log("delete call success"));
    window.location.reload();
  }
}
