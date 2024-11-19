import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("SharedService was created");
   }
  mySharedFunction(){
    console.log("My shared function was called");
  }
}
