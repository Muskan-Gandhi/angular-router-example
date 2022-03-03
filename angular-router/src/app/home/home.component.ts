import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient, public pds: ProductDetailsService) { }

  
  product:any;
  id="";
  name="";
  
  getdata(){
    const url="http://localhost:3000/posts"
    this.http.get(url).subscribe(res =>this.showdata(res));
  }
  showdata(data:any){
    this.product= data;
    console.log(this.product);
  }
  ngOnInit(): void {
    this.getdata()
  }

  counter() {
    this.pds.counter++;
  }
  
}
