import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService: ) { }

  multiply(a: number, b: number): number {
    return a * b;
  }
}