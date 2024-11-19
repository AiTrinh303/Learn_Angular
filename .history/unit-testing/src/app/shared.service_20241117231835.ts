import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console
   }
  mySharedFunction(){
    console.log("My shared function was called");
  }
}
