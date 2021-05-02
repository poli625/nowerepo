import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  angle_vector_display_calc = true;
  angle_vector_calc_press() {
    this.angle_vector_display_calc = !this.angle_vector_display_calc;
    this.scalar_vector_calc_display = false;
    this.dot_product_calc_display = false;
    this.orthogonal_vectors_calc_display = false;
    this.matrix_multiply_calc_display = false;
    this.add_sub_vectors_calc_display = false;
  }

  scalar_vector_calc_display = false;
  scalar_vector_calc_press() {
    this.scalar_vector_calc_display = !this.scalar_vector_calc_display;
    this.angle_vector_display_calc = false;
    this.dot_product_calc_display = false;
    this.orthogonal_vectors_calc_display = false;
    this.matrix_multiply_calc_display = false;
    this.add_sub_vectors_calc_display = false;
  }

  dot_product_calc_display = false;
  dot_product_calc_press() {
    this.dot_product_calc_display = !this.dot_product_calc_display;
    this.angle_vector_display_calc = false;
    this.scalar_vector_calc_display = false;
    this.orthogonal_vectors_calc_display = false;
    this.matrix_multiply_calc_display = false;
    this.add_sub_vectors_calc_display = false;
  }

  orthogonal_vectors_calc_display = false;
  orthogonal_vectors_calc_press() {
    this.orthogonal_vectors_calc_display = !this.orthogonal_vectors_calc_display;
    this.angle_vector_display_calc = false;
    this.scalar_vector_calc_display = false;
    this.dot_product_calc_display = false;
    this.matrix_multiply_calc_display = false;
    this.add_sub_vectors_calc_display = false;
  }

  matrix_multiply_calc_display = false;
  matrix_multiply_calc_press() {
    this.matrix_multiply_calc_display = !this.matrix_multiply_calc_display;
    this.angle_vector_display_calc = false;
    this.scalar_vector_calc_display = false;
    this.dot_product_calc_display = false;
    this.orthogonal_vectors_calc_display = false;
    this.add_sub_vectors_calc_display = false;
  }

  add_sub_vectors_calc_display = false;
  add_sub_vectors_calc_press() {
    this.add_sub_vectors_calc_display = !this.add_sub_vectors_calc_display;
    this.angle_vector_display_calc = false;
    this.scalar_vector_calc_display = false;
    this.dot_product_calc_display = false;
    this.orthogonal_vectors_calc_display = false;
    this.matrix_multiply_calc_display = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
