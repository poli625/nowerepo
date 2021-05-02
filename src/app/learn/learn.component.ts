import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  angle_vector_display = true;
  angle_vector_press() {
    this.angle_vector_display = !this.angle_vector_display;
    this.scalar_vector_display = false;
    this.matrix_multiply_display = false;
    this. add_sub_vectors_display = false;
    this.orthogonal_vectors_display = false;
    this.dot_product_display = false;
  }

  scalar_vector_display = false;
  scalar_vector_press() {
    this.scalar_vector_display = !this.scalar_vector_display;
    this.angle_vector_display = false;
    this.matrix_multiply_display = false;
    this. add_sub_vectors_display = false;
    this.orthogonal_vectors_display = false;
    this.dot_product_display = false;
  }

  matrix_multiply_display = false;
  matrix_multiply_press() {
    this.matrix_multiply_display = !this.matrix_multiply_display;
    this.angle_vector_display = false;
    this.scalar_vector_display = false;
    this. add_sub_vectors_display = false;
    this.orthogonal_vectors_display = false;
    this.dot_product_display = false;
  }

  add_sub_vectors_display = false;
  add_sub_vectors_press() {
    this.add_sub_vectors_display = !this.add_sub_vectors_display;
    this.angle_vector_display = false;
    this.scalar_vector_display = false;
    this.matrix_multiply_display = false;
    this.orthogonal_vectors_display = false;
    this.dot_product_display = false;
  }

  orthogonal_vectors_display = false;
  orthogonal_vectors_press() {
    this.orthogonal_vectors_display = !this.orthogonal_vectors_display;
    this.angle_vector_display = false;
    this.scalar_vector_display = false;
    this.matrix_multiply_display = false;
    this.add_sub_vectors_display = false;
    this.dot_product_display = false;
  }

  dot_product_display = false;
  dot_product_press() {
    this.dot_product_display = !this.dot_product_display;
    this.angle_vector_display = false;
    this.scalar_vector_display = false;
    this.matrix_multiply_display = false;
    this.add_sub_vectors_display = false;
    this.orthogonal_vectors_display = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
