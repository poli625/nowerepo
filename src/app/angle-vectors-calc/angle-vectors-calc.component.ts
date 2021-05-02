import { Component, OnInit } from '@angular/core';
import { create, all } from 'mathjs'
import Swal from 'sweetalert2'


const config = { }
const math = create(all, config)

@Component({
  selector: 'app-angle-vectors-calc',
  templateUrl: './angle-vectors-calc.component.html',
  styleUrls: ['./angle-vectors-calc.component.css']
})
export class AngleVectorsCalcComponent implements OnInit {

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

  
  angle_solve_final: string;

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


  solve_angle(){
    if(this.a_2_1 != null && this.a_2_2 != null && this.b_2_1 != null && this.b_2_2 != null){
      if(this.TwoDi == true){
        var dotprod = math.dot([this.a_2_1, this.a_2_2], [this.b_2_1, this.b_2_2]);

        var ax = math.pow(this.a_2_1, 2);
        var ay = math.pow(this.a_2_2, 2);
        var bx = math.pow(this.b_2_1, 2);
        var by = math.pow(this.b_2_2, 2);

        var magnitude_a = math.sqrt(ax+ay);
        var magnitude_b = math.sqrt(bx+by);

        var angle_down = magnitude_a*magnitude_b;
        var angle_1 = dotprod/angle_down;

        console.log(math.round(angle_1));
        this.angle_solve_final = math.round(angle_1);
        
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

        var ax = math.pow(this.a_3_1, 2);
        var ay = math.pow(this.a_3_2, 2);
        var az = math.pow(this.a_3_3, 2);

        var bx = math.pow(this.b_3_1, 2);
        var by = math.pow(this.b_3_2, 2);
        var bz = math.pow(this.b_3_3, 2);

        var magnitude_a = math.sqrt(ax+ay+az);
        var magnitude_b = math.sqrt(bx+by+bz);

        var angle_down = magnitude_a*magnitude_b;
        var angle_1 = dotprod/angle_down;

        console.log(math.round(angle_1));
        this.angle_solve_final = math.round(angle_1);
      }
    }
    if(this.a_3_1 == null || this.a_3_2 == null || this.a_3_3 == null || this.b_3_1 == null || this.b_3_2 == null || this.b_3_3 == null && this.ThreeDi == true){
      if(this.TwoDi == false && this.ThreeDi == true){
        this.allercik();
      }
    }
  }

  ngOnInit(): void {
  }

}
