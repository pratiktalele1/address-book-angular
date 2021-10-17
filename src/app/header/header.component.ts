import { Component, OnInit } from '@angular/core';
import { AddressBookDataService } from '../address-book-data.service';
import { AddressBookDTO } from '../address-book-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private _data: AddressBookDataService) { }

  ngOnInit(): void {
          
  }

}
