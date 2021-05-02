import { Component, OnInit } from '@angular/core';
import { create, all } from 'mathjs'
import Swal from 'sweetalert2'


const config = { }
const math = create(all, config)

@Component({
  selector: 'app-dot-prod-calc',
  templateUrl: './dot-prod-calc.component.html',
  styleUrls: ['./dot-prod-calc.component.css']
})
export class DotProdCalcComponent implements OnInit {

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

  
  result_of_dot: string;

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


  solve_dot_prod(){
    if(this.a_2_1 != null && this.a_2_2 != null && this.b_2_1 != null && this.b_2_2 != null){
      if(this.TwoDi == true){
        var dotprod = math.dot([this.a_2_1, this.a_2_2], [this.b_2_1, this.b_2_2]);
        console.log(dotprod);
        this.result_of_dot = dotprod;
      }
    }
    if(this.a_2_1 == null || this.a_2_2 == null || this.b_2_1 == null || this.b_2_2 == null){
      if(this.TwoDi == true && this.ThreeDi == false){
      this.allercik();
      }
    }

    if(this.a_3_1 != null && this.a_3_2 != null && this.a_3_3 != null && this.b_3_1 != null && this.b_3_2 != null && this.b_3_3 != null){
      if(this.ThreeDi == true){
        var dotprod = math.dot([this.a_3_1, this.a_3_2, this.a_3_3], [this.b_3_1, this.b_3_2, this.b_3_3]);
        console.log(dotprod);
        this.result_of_dot = dotprod;
      }
    }
    if(this.a_3_1 == null || this.a_3_2 == null || this.a_3_3 == null || this.b_3_1 == null || this.b_3_2 == null || this.b_3_3 == null && this.ThreeDi == true){
      if(this.TwoDi == false && this.ThreeDi == true){
        this.allercik();
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
