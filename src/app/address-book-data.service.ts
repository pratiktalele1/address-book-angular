import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressBookDTO } from './address-book-dto';

@Injectable({
  providedIn: 'root'
})
export class AddressBookDataService {

  /**
   * url to intrect with backend
   */
  private url:string='http://localhost:8080/address';

  /**
   * 
   * @param _http to call http methods from backend
   */
  constructor(private _http:HttpClient) { }

  /**
   * getting data using get http method
   * @returns get response 
   */
  getAllAddressBookDetails():Observable<AddressBookDTO[]>{
    return this._http.get<AddressBookDTO[]>(this.url);
  }

  /**
   * saving data to database using post http method 
   * @param obj to store data in databse
   * @returns post response 
   */
  enrollDetails(obj:any):Observable<AddressBookDTO[]>{
    return this._http.post<AddressBookDTO[]>(this.url,obj);
  }

  /**
   * deleting data from database using delete http method
   * @param getId to remove data
   * @returns delete response
   */
  delete(getId:number):Observable<AddressBookDTO[]>{
    return this._http.delete<AddressBookDTO[]>(`${this.url}/${getId}`)
  }

  /**
   * updaing existing data with getId using put http method
   * @param getId to update existing data
   * @param obj to update data 
   * @returns put response
   */
  update(getId:any,obj:any):Observable<AddressBookDTO[]>{
    return this._http.put<AddressBookDTO[]>(`${this.url}/${getId}`,obj)
  }

  /**
   * getting single data with id using get http method
   * @param id to get single data using id
   * @returns get response
   */
  getDataById(id: any):Observable<AddressBookDTO[]> {
    return this._http.get<AddressBookDTO[]>(`${this.url}/${id}`);
 
   }
}
