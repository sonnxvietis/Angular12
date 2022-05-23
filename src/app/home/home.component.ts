import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  traicay = [
    {ten:'buoi', gia:12, dongGia:false},
    {ten:'cam', gia:7, dongGia:true},
    {ten:'quyet', gia:5, dongGia:true},
    {ten:'xoai', gia:6, dongGia:false},
  ]
  public cities = [
    {
      city: 'Ha Noi',
      district : [
        'Hai Ba Trung',
        'Gia Lam',
        'Long Bien'
      ]
    },
    {
      city: 'Bac Ninh',
      district : [
        'Thuan thanh',
        'TU Son',
        'yen phong'
      ]
    },
    {
      city: 'HCM',
      district : [
        'Quan 1',
        'QUan 9',
        'Tan son nhat'
      ]
    }
    
  ]
  public districts:string[] = []
  ngOnInit(): void {
    this.districts = this.cities[0].district
  }
  changeCity(event:any){
    this.districts=(this.cities.filter(city => city.city === event.target.value))[0].district
  }

}
