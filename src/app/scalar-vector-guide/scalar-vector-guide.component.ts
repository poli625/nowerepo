import { Component, OnInit } from '@angular/core';
import 'mathjs';

@Component({
  selector: 'app-scalar-vector-guide',
  templateUrl: './scalar-vector-guide.component.html',
  styleUrls: ['./scalar-vector-guide.component.css']
})
export class ScalarVectorGuideComponent implements OnInit {


  equation: string = 'k \\cdotp \\vec{a}=\\{k\\cdotp a_x; k\\cdotp a_y; k\\cdotp a_z\\}';
  

  constructor() { }

  ngOnInit(): void {
  }

}
