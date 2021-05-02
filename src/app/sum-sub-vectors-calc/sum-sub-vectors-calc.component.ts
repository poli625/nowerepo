import { Component, OnInit } from '@angular/core';
import { create, all } from 'mathjs'
import Swal from 'sweetalert2'


const config = { }
const math = create(all, config)

@Component({
  selector: 'app-sum-sub-vectors-calc',
  templateUrl: './sum-sub-vectors-calc.component.html',
  styleUrls: ['./sum-sub-vectors-calc.component.css']
})
export class SumSubVectorsCalcComponent implements OnInit {

  equation_a: string = '\\vec{a}';
  equation_b: string = '\\vec{b}';


  bracketos_unos_right: string = "{";
  bracketos_unos_left: string = "}";

  TwoDi:boolean=true;
  ThreeDi:boolean=false;
  TwoDiMinus:boolean=false;
  ThreeDiMinus:boolean=false;

  a_2_1: number;
  a_2_2: number;

  b_2_1: number;
  b_2_2: number;


  a_3_1: number;
  a_3_2: number;
  a_3_3: number;

  b_3_1: number;
  b_3_2: number;
  b_3_3: number;

  multiply_number_a: number;
  multiply_number_b: number;

  scalar_vector_result_one: number;
  scalar_vector_result_two: number;
  scalar_vector_result_three: number;

  dimensional_2(){
    this.TwoDi=true;
    this.ThreeDi=false;
    this.ThreeDiMinus=false;
    this.TwoDiMinus=false;
  }

  dimensional_3(){
    this.ThreeDi=true;
    this.TwoDi=false;
    this.ThreeDiMinus=false;
    this.TwoDiMinus=false;
  }

  dimensional_2Minus(){
    this.TwoDiMinus=true;
    this.ThreeDiMinus=false;
    this.ThreeDi=false;
    this.TwoDi=false;
  }

  dimensional_3Minus(){
    this.ThreeDiMinus=true;
    this.TwoDiMinus=false;
    this.ThreeDi=false;
    this.TwoDi=false;
  }

  allercik(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    });
  }


  scalar_vector_solve(){
    if(this.a_2_1 != null && this.a_2_2 != null && this.multiply_number_a != null){
      if(this.TwoDi == true){

        var ax = this.a_2_1;
        var ay = this.a_2_2;
        var bx = this.b_2_1;
        var by = this.b_2_2;

        var equation_vector_up = ((this.multiply_number_a*ax)+(this.multiply_number_b*bx));
        var equation_vector_down = ((this.multiply_number_a*ay)+(this.multiply_number_b*by));

        this.scalar_vector_result_one = equation_vector_up;
        this.scalar_vector_result_two = equation_vector_down;

      }

      if(this.TwoDiMinus == true){

        var ax = this.a_2_1;
        var ay = this.a_2_2;
        var bx = this.b_2_1;
        var by = this.b_2_2;

        var equation_vector_up = ((this.multiply_number_a*ax)-(this.multiply_number_b*bx));
        var equation_vector_down = ((this.multiply_number_a*ay)-(this.multiply_number_b*by));

        this.scalar_vector_result_one = equation_vector_up;
        this.scalar_vector_result_two = equation_vector_down;

      }


    }
    if(this.a_2_1 == null || this.a_2_2 == null || this.multiply_number_a == null){
      if(this.TwoDi == true && this.ThreeDi == false){
      this.allercik();
      }
    }

    if(this.a_3_1 != null && this.a_3_2 != null && this.a_3_3 != null && this.multiply_number_a != null){
      if(this.ThreeDi == true){

        var ax = this.a_3_1;
        var ay = this.a_3_2;
        var az = this.a_3_3;
        var bx = this.b_3_1;
        var by = this.b_3_2;
        var bz = this.b_3_3;

        var equation_vector_up = ((this.multiply_number_a*ax)+(this.multiply_number_b*bx));
        var equation_vector_center = ((this.multiply_number_a*ay)+(this.multiply_number_b*by));
        var equation_vector_down = ((this.multiply_number_a*az)+(this.multiply_number_b*bz));

        this.scalar_vector_result_one = equation_vector_up;
        this.scalar_vector_result_two = equation_vector_center;
        this.scalar_vector_result_three = equation_vector_down;

      }
      if(this.ThreeDiMinus == true){

        var ax = this.a_3_1;
        var ay = this.a_3_2;
        var az = this.a_3_3;
        var bx = this.b_3_1;
        var by = this.b_3_2;
        var bz = this.b_3_3;

        var equation_vector_up = ((this.multiply_number_a*ax)-(this.multiply_number_b*bx));
        var equation_vector_center = ((this.multiply_number_a*ay)-(this.multiply_number_b*by));
        var equation_vector_down = ((this.multiply_number_a*az)-(this.multiply_number_b*bz));

        this.scalar_vector_result_one = equation_vector_up;
        this.scalar_vector_result_two = equation_vector_center;
        this.scalar_vector_result_three = equation_vector_down;

      }

    }
    if(this.a_3_1 == null || this.a_3_2 == null || this.a_3_3 == null || this.multiply_number_a == null){
      if(this.TwoDi == false && this.ThreeDi == true){
        this.allercik();
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
