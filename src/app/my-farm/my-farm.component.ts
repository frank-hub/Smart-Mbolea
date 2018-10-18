import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-farm',
  templateUrl: './my-farm.component.html',
  styleUrls: ['./my-farm.component.scss']
})
export class MyFarmComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
