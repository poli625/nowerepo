import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-check-yourself',
  templateUrl: './check-yourself.component.html',
  styleUrls: ['./check-yourself.component.css']
})
export class CheckYourselfComponent implements OnInit {


  angle_vector_task_display = true;
  angle_vector_task_press() {
    this.angle_vector_task_display = !this.angle_vector_task_display;
    this.scalar_vector_task_display = false;
    this.matrix_multiply_task_display = false;
    this.add_sub_vectors_task_display = false;
    this.orthogonal_vectors_task_display = false;
    this.dot_product_task_display = false;
  }

  scalar_vector_task_display = false;
  scalar_vector_task_press() {
    this.scalar_vector_task_display = !this.scalar_vector_task_display;
    this.angle_vector_task_display = false;
    this.matrix_multiply_task_display = false;
    this.add_sub_vectors_task_display = false;
    this.orthogonal_vectors_task_display = false;
    this.dot_product_task_display = false;
  }

  matrix_multiply_task_display = false;
  matrix_multiply_task_press() {
    this.matrix_multiply_task_display = !this.matrix_multiply_task_display;
    this.angle_vector_task_display = false;
    this.scalar_vector_task_display = false;
    this.add_sub_vectors_task_display = false;
    this.orthogonal_vectors_task_display = false;
    this.dot_product_task_display = false;
  }

  add_sub_vectors_task_display = false;
  add_sub_vectors_task_press() {
    this.add_sub_vectors_task_display = !this.add_sub_vectors_task_display;
    this.angle_vector_task_display = false;
    this.scalar_vector_task_display = false;
    this.matrix_multiply_task_display = false;
    this.orthogonal_vectors_task_display = false;
    this.dot_product_task_display = false;
  }

  orthogonal_vectors_task_display = false;
  orthogonal_vectors_task_press() {
    this.orthogonal_vectors_task_display = !this.orthogonal_vectors_task_display;
    this.angle_vector_task_display = false;
    this.scalar_vector_task_display = false;
    this.matrix_multiply_task_display = false;
    this.add_sub_vectors_task_display = false;
    this.dot_product_task_display = false;
  }

  dot_product_task_display = false;
  dot_product_task_press() {
    this.dot_product_task_display = !this.dot_product_task_display;
    this.angle_vector_task_display = false;
    this.scalar_vector_task_display = false;
    this.matrix_multiply_task_display = false;
    this.add_sub_vectors_task_display = false;
    this.orthogonal_vectors_task_display = false;
  }

  tasks_from_angle_between_vectors = ["angle_1.pdf", "angle_2.pdf"];
  random_tasks_from_angle_between_vectors = Math.floor(Math.random() * this.tasks_from_angle_between_vectors.length);
  angle_to_download: string = this.tasks_from_angle_between_vectors[this.random_tasks_from_angle_between_vectors];

  tasks_scalar_vector = ["scalar_vector_1.pdf", "scalar_vector_2.pdf"];
  random_tasks_scalar_vector = Math.floor(Math.random() * this.tasks_scalar_vector.length);
  scalar_to_download: string = this.tasks_scalar_vector[this.random_tasks_scalar_vector];

  tasks_matrix_multiply = ["matrix_1.pdf", "matrix_2.pdf"];
  random_tasks_matrix_multiply = Math.floor(Math.random() * this.tasks_matrix_multiply.length);
  matrix_to_download: string = this.tasks_matrix_multiply[this.random_tasks_matrix_multiply];
  
  tasks_add_sub_vectors = ["add_sub_vectors_1.pdf", "add_sub_vectors_2.pdf"];
  random_tasks_add_sub_vectors = Math.floor(Math.random() * this.tasks_add_sub_vectors.length);
  add_sub_to_download: string = this.tasks_add_sub_vectors[this.random_tasks_add_sub_vectors];

  tasks_orthogonal_vectors = ["orto_vect_1.pdf", "orto_vect_2.pdf"];
  random_tasks_orthogonal_vectors = Math.floor(Math.random() * this.tasks_orthogonal_vectors.length);
  ortho_to_download: string = this.tasks_orthogonal_vectors[this.random_tasks_orthogonal_vectors];

  tasks_dot_product = ["dot_prod_1.pdf", "dot_prod_2.pdf"];
  random_tasks_dot_product = Math.floor(Math.random() * this.tasks_dot_product.length);
  dot_prod_to_download: string = this.tasks_dot_product[this.random_tasks_dot_product];

  constructor() { }

  ngOnInit(): void {
  }

}
