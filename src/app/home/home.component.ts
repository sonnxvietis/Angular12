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
  ngOnInit(): void {

  }

}
