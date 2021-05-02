import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orthogonal-vectors-guide',
  templateUrl: './orthogonal-vectors-guide.component.html',
  styleUrls: ['./orthogonal-vectors-guide.component.css']
})
export class OrthogonalVectorsGuideComponent implements OnInit {

  equation: string = '\\bar{a}\\cdotp\\bar{b} = 0';

  vec_a: string = '\\vec{a}';
  vec_b: string = '\\vec{b}';

  constructor() { }

  ngOnInit(): void {
  }

}
