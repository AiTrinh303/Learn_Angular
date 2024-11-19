import { Injectable } from '@angular/core';
import 

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService: SharedService) { }

  multiply(a: number, b: number): number {
    return a * b;
  }
}