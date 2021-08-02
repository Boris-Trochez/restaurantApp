import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Supplier } from '../interfaces/supplier.interface';


@Injectable({
  providedIn: 'root'
})
export class GetCountryService {

  constructor(
    private http: HttpClient
  ) { }


  /**
   * @author Boris Trochez
   * @param supplierName: This the name of a country
   * @returns: This method returns a model of country
   * @description: This method fetch a request to the public API of RestCountries and returns
   * an array with the data of the country chosen.
   */
  getCountry( supplierName: string ): Observable<any> {
    const countryModel = {
      name: '',
      currency: '',
      flag: ''
    }

    return this.http.get(`https://restcountries.eu/rest/v2/name/${ supplierName }`)
      .pipe(
        map( (res: any) => {
          countryModel.name = res[0].name;
          countryModel.flag = res[0].flag;
          countryModel.currency = res[0].currencies[0].code;
          return countryModel; 
        })
      )
  }

}
