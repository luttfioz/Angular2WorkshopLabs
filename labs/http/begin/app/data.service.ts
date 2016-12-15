import { Injectable } from '@angular/core';

//*** TODO: Import the Http and Response objects from the @angular/http module


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { Sorter } from './sorter';

@Injectable()
export class DataService {
  
  url: string = 'http://swapi.co/api/';
  
  //*** TODO: Inject the Http and Sorter services into the constructor 
  //***       (name the parameters "http" and "sorter" and make them private)
  constructor() { }
  
  getFilms() {
    //*** TODO: Use the Http get() function to retrieve films 
    //***       (see the README for the code to use here)



  }
  
  private handleError(error: any) {
      console.error('server error:', error); 
      if (error instanceof Response) {
        let errMessage = '';
        try {
          errMessage = error.json().error;
        } catch(err) {
          errMessage = error.statusText;
        }
        return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Server Error!!');
  }
  
}