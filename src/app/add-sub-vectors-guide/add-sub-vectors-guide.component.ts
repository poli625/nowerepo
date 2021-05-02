import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sub-vectors-guide',
  templateUrl: './add-sub-vectors-guide.component.html',
  styleUrls: ['./add-sub-vectors-guide.component.css']
})
export class AddSubVectorsGuideComponent implements OnInit {

  equation_plus: string = 'c_i = a_i + b_i';
  equation_minus: string = 'c_i = a_i - b_i';

  a_vec: string = '\\vec{a}';
  b_vec: string = '\\vec{b}';
  c_vec: string = '\\vec{c}';

  constructor() { }

  ngOnInit(): void {
  }

}
