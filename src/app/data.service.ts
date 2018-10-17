import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ["Ford","Nissan","Honda"];

  myData(){
    return "This is some data.";
  }
}
