import { Component, OnInit } from '@angular/core';
import katex from 'katex';


@Component({
  selector: 'app-vectors-angle',
  templateUrl: './vectors-angle.component.html',
  styleUrls: ['./vectors-angle.component.css']
})
export class VectorsAngleComponent implements OnInit {

  equation: string = '\\cos{a}=\\frac{\\bar{a}\\cdotp\\bar{b}}{|a||b|}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
