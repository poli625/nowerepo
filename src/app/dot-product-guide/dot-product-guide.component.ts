import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-product-guide',
  templateUrl: './dot-product-guide.component.html',
  styleUrls: ['./dot-product-guide.component.css']
})
export class DotProductGuideComponent implements OnInit {

  equation: string = '\\bar{a}\\cdotp\\bar{b} = a_x \\cdotp b_x + a_y \\cdotp b_y + a_z \\cdotp b_z';

  a_vec: string = '\\vec{a}';
  b_vec: string = '\\vec{b}';

  constructor() { }

  ngOnInit(): void {
  }

}
