import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-multiply-guide',
  templateUrl: './matrix-multiply-guide.component.html',
  styleUrls: ['./matrix-multiply-guide.component.css']
})
export class MatrixMultiplyGuideComponent implements OnInit {

  equation: string = '\\begin{bmatrix}a&b&c\\\\d&e&f\\end{bmatrix}\\begin{bmatrix}u&v\\\\w&x\\\\y&z\\end{bmatrix}=\\begin{bmatrix}{au+bw+cy} & {av+bx+cz} \\\\ {du+ew+fy} & {dv+ex+fz}\\end{bmatrix}';

  constructor() { }

  ngOnInit(): void {
  }

}
