import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private ht:HttpClient) { }
  
  counter = 0;
  
}
