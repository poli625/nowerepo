import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearnComponent } from './learn/learn.component';
import { VectorsAngleComponent } from './vectors-angle/vectors-angle.component';
import { ScalarVectorGuideComponent } from './scalar-vector-guide/scalar-vector-guide.component';
import { KatexModule } from 'ng-katex';
import { MatrixMultiplyGuideComponent } from './matrix-multiply-guide/matrix-multiply-guide.component';
import { AddSubVectorsGuideComponent } from './add-sub-vectors-guide/add-sub-vectors-guide.component';
import { OrthogonalVectorsGuideComponent } from './orthogonal-vectors-guide/orthogonal-vectors-guide.component';
import 'mathjs';
import { DotProductGuideComponent } from './dot-product-guide/dot-product-guide.component';
import { CheckYourselfComponent } from './check-yourself/check-yourself.component';
import { CalculateComponent } from './calculate/calculate.component';
import { AngleVectorsCalcComponent } from './angle-vectors-calc/angle-vectors-calc.component'
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from "@ngrx/effects";
import { DotProdCalcComponent } from './dot-prod-calc/dot-prod-calc.component';
import { ScalarVectorCalcComponent } from './scalar-vector-calc/scalar-vector-calc.component';
import { OrthoVectorCalcComponent } from './ortho-vector-calc/ortho-vector-calc.component';
import { MatrixCalcComponent } from './matrix-calc/matrix-calc.component';
import { SumSubVectorsCalcComponent } from './sum-sub-vectors-calc/sum-sub-vectors-calc.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LearnComponent,
    VectorsAngleComponent,
    ScalarVectorGuideComponent,
    MatrixMultiplyGuideComponent,
    AddSubVectorsGuideComponent,
    OrthogonalVectorsGuideComponent,
    DotProductGuideComponent,
    CheckYourselfComponent,
    CalculateComponent,
    AngleVectorsCalcComponent,
    DotProdCalcComponent,
    ScalarVectorCalcComponent,
    OrthoVectorCalcComponent,
    MatrixCalcComponent,
    SumSubVectorsCalcComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    KatexModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-full-width",
    }),
    RouterModule.forRoot([
      {path: "learn", component:LearnComponent, data: { state: 'learn' }},
      {path: "vector-angle", component:VectorsAngleComponent, data: { state: 'vector-angle' }},
      {path: "check-yourself", component: CheckYourselfComponent, data: { state: 'check-yourself' }},
      {path: "calculate", component: CalculateComponent, data: { state: 'calculate' }},
      {path: "home", component: HomeComponent, data: { state: 'home' }},
    ]),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
