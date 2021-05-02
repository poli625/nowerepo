import { Component, OnInit } from '@angular/core';
import { create, all } from 'mathjs'
import Swal from 'sweetalert2'


const config = { }
const math = create(all, config)

@Component({
  selector: 'app-matrix-calc',
  templateUrl: './matrix-calc.component.html',
  styleUrls: ['./matrix-calc.component.css']
})
export class MatrixCalcComponent implements OnInit {

  bracketos_unos_right: string = "[";
  bracketos_unos_left: string = "]";

  TwoDi:boolean=true;
  ThreeDi:boolean=false;

  a_1_1: number;
  a_1_2: number;
  a_2_1: number;
  a_2_2: number;

  b_1_1: number;
  b_1_2: number;
  b_2_1: number;
  b_2_2: number;


  aa_1_1: number;
  aa_1_2: number;
  aa_1_3: number;

  aa_2_1: number;
  aa_2_2: number;
  aa_2_3: number;

  aa_3_1: number;
  aa_3_2: number;
  aa_3_3: number;



  bb_1_1: number;
  bb_1_2: number;
  bb_1_3: number;

  bb_2_1: number;
  bb_2_2: number;
  bb_2_3: number;

  bb_3_1: number;
  bb_3_2: number;
  bb_3_3: number;
  


  c1_out: number;
  c2_out: number;
  c3_out: number;
  c4_out: number;



  c11_out: number;
  c22_out: number;
  c33_out: number;
  c44_out: number;
  c55_out: number;
  c66_out: number;
  c77_out: number;
  c88_out: number;
  c99_out: number;

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
        var c1 = (this.a_1_1 * this.b_1_1) + (this.a_1_2 * this.b_2_1);
        var c2 = (this.a_1_1 * this.b_1_2) + (this.a_1_2 * this.b_2_2);
        var c3 = (this.a_2_1 * this.b_1_1) + (this.a_2_2 * this.b_2_1);
        var c4 = (this.a_2_1 * this.b_1_2) + (this.a_2_2 * this.b_2_2);
        console.log(c1);
        console.log(c2);
        console.log(c3);
        console.log(c4);
        this.c1_out = c1;
        this.c2_out = c2;
        this.c3_out = c3;
        this.c4_out = c4;
      }
    }
    if(this.a_2_1 == null || this.a_2_2 == null || this.b_2_1 == null || this.b_2_2 == null){
      if(this.TwoDi == true && this.ThreeDi == false){
      this.allercik();
      }
    }

    if(this.aa_1_1 != null && this.aa_1_1 != null && this.aa_1_1 != null && this.aa_1_1 != null && this.aa_1_1 != null && this.aa_1_1 != null){
      if(this.ThreeDi == true){
        var cc1 = (this.aa_1_1 * this.bb_1_1) + (this.aa_1_2 * this.bb_2_1) + (this.aa_1_3 * this.bb_3_1);
        var cc2 = (this.aa_1_1 * this.bb_1_2) + (this.aa_1_2 * this.bb_2_2) + (this.aa_1_3 * this.bb_3_2);
        var cc3 = (this.aa_1_1 * this.bb_1_3) + (this.aa_1_2 * this.bb_2_3) + (this.aa_1_3 * this.bb_3_3);
        var cc4 = (this.aa_2_1 * this.bb_1_1) + (this.aa_2_2 * this.bb_2_1) + (this.aa_2_3 * this.bb_3_1);
        var cc5 = (this.aa_2_1 * this.bb_1_2) + (this.aa_2_2 * this.bb_2_2) + (this.aa_2_3 * this.bb_3_2);
        var cc6 = (this.aa_2_1 * this.bb_1_3) + (this.aa_2_2 * this.bb_2_3) + (this.aa_2_3 * this.bb_3_3);
        var cc7 = (this.aa_3_1 * this.bb_1_1) + (this.aa_3_2 * this.bb_2_1) + (this.aa_3_3 * this.bb_3_1);
        var cc8 = (this.aa_3_1 * this.bb_1_2) + (this.aa_3_2 * this.bb_2_2) + (this.aa_3_3 * this.bb_3_2);
        var cc9 = (this.aa_3_1 * this.bb_1_3) + (this.aa_3_2 * this.bb_2_3) + (this.aa_3_3 * this.bb_3_3);

        console.log(cc1);
        console.log(cc2);
        console.log(cc3);
        console.log(cc4);
        console.log(cc5);
        console.log(cc6);
        console.log(cc7);
        console.log(cc8);
        console.log(cc9);

        this.c11_out = cc1;
        this.c22_out = cc2;
        this.c33_out = cc3;
        this.c44_out = cc4;
        this.c55_out = cc5;
        this.c66_out = cc6;
        this.c77_out = cc7;
        this.c88_out = cc8;
        this.c99_out = cc9;
      }
    }
    if(this.aa_1_1 == null || this.aa_1_1 == null || this.aa_1_1 == null || this.aa_1_1 == null || this.aa_1_1 == null || this.aa_1_1 == null && this.ThreeDi == true){
      if(this.TwoDi == false && this.ThreeDi == true){
        this.allercik();
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
