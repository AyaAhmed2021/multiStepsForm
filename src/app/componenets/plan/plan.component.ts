import { Component, ElementRef, ViewChild } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent {
  fagamepad = faGamepad;
  route = '/addOns';
  routeBack = '/';
  isclicked1 = false;
  isclicked2 = false;
  isclicked3 = false;
  month = true;
  year = false;
 icons = document.getElementsByClassName('icon');
  purches: any;

  @ViewChild('arcade') arcade: ElementRef<HTMLInputElement>;
  @ViewChild('arcadePrice') arcadePrice: ElementRef<HTMLInputElement>;
  @ViewChild('advanced') advanced: ElementRef<HTMLInputElement>;
  @ViewChild(' advancedPrice')  advancedPrice: ElementRef<HTMLInputElement>;
  @ViewChild('pro') pro: ElementRef<HTMLInputElement>;
  @ViewChild('proPrice') proPrice: ElementRef<HTMLInputElement>;



  ngOnInit() {
    localStorage.setItem('plan', 'Monthly');
  }

  clickOne() {
    // console.log("click")
    this.month = true;
    this.year = false;
    localStorage.setItem('plan', 'Monthly');
    document.getElementById('m').classList.add('active');
    document.getElementById('y').classList.remove('active');
    document.getElementById('month').classList.remove('periodNotActive');
    document.getElementById('month').classList.add('periodActive');
    document.getElementById('year').classList.remove('periodActive');
    document.getElementById('year').classList.add('periodNotActive');
  }

  clickTwo() {
    // console.log("click2")
    this.month = false;
    this.year = true;
    localStorage.setItem('plan', 'Yearly');
    document.getElementById('y').classList.add('active');
    document.getElementById('m').classList.remove('active');
    document.getElementById('year').classList.remove('periodNotActive');
    document.getElementById('year').classList.add('periodActive');
    document.getElementById('month').classList.remove('periodActive');
    document.getElementById('month').classList.add('periodNotActive');
  }

  select(e) {
    // console.log(e)
    if (e == 'one') {
      this.isclicked1 = true;
      this.isclicked2 = false;
      this.isclicked3 = false;
     localStorage.setItem("plSt1",this.arcade.nativeElement.textContent)
     localStorage.setItem("plSt1Pr",this.arcadePrice.nativeElement.textContent)
    } else if (e == 'two') {
      this.isclicked1 = false;
      this.isclicked2 = true;
      this.isclicked3 = false;
      localStorage.setItem("plSt1",this.advanced.nativeElement.textContent)
     localStorage.setItem("plSt1Pr",this.advancedPrice.nativeElement.textContent)
    } else {
      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = true;
      localStorage.setItem("plSt1",this.pro.nativeElement.textContent)
     localStorage.setItem("plSt1Pr",this.proPrice.nativeElement.textContent)
    }
  }
}
