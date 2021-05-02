import { Component, OnInit } from '@angular/core';
import { create, all } from 'mathjs'
import Swal from 'sweetalert2'


const config = { }
const math = create(all, config)


@Component({
  selector: 'app-scalar-vector-calc',
  templateUrl: './scalar-vector-calc.component.html',
  styleUrls: ['./scalar-vector-calc.component.css']
})
export class ScalarVectorCalcComponent implements OnInit {

  equation: string = '\\vec{a}';


  bracketos_unos_right: string = "{";
  bracketos_unos_left: string = "}";

  TwoDi:boolean=true;
  ThreeDi:boolean=false;

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

  multiply_number: number;
  
  scalar_vector_result_one: number;
  scalar_vector_result_two: number;
  scalar_vector_result_three: number;

  dimensional_2(){
    this.TwoDi=true;
    this.ThreeDi=false;
  }

  dimensional_3(){
    this.ThreeDi=true;
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
    if(this.a_2_1 != null && this.a_2_2 != null && this.multiply_number != null){
      if(this.TwoDi == true){

        var ax = this.a_2_1;
        var ay = this.a_2_2;

        var multiply_number_number = this.multiply_number;

        var result_one = (multiply_number_number*ax);
        var result_two = (multiply_number_number*ay);

        console.log(math.round(result_one));
        this.scalar_vector_result_one = result_one;
        this.scalar_vector_result_two = result_two; 
      }

    }
    if(this.a_2_1 == null || this.a_2_2 == null || this.multiply_number == null){
      if(this.TwoDi == true && this.ThreeDi == false){
      this.allercik();
      }
    }

    if(this.a_3_1 != null && this.a_3_2 != null && this.a_3_3 != null && this.multiply_number != null){
      if(this.ThreeDi == true){

        var ax = this.a_3_1;
        var ay = this.a_3_2;
        var az = this.a_3_3;

        var multiply_number_number = this.multiply_number;

        var result_one = (multiply_number_number*ax);
        var result_two = (multiply_number_number*ay);
        var result_three = (multiply_number_number*az);

        console.log(math.round(result_one));
        this.scalar_vector_result_one = result_one;
        this.scalar_vector_result_two = result_two; 
        this.scalar_vector_result_three = result_two; 
      }

    }
    if(this.a_3_1 == null || this.a_3_2 == null || this.a_3_3 == null || this.multiply_number == null){
      if(this.TwoDi == false && this.ThreeDi == true){
        this.allercik();
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
