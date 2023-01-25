import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  route="/thanks"
  routeBack ="/addOns"
  plan = localStorage.getItem("plan")
  planStep1 = localStorage.getItem("plSt1")
  planStep1Price = localStorage.getItem("plSt1Pr")
  planStep2 = sessionStorage.getItem("plst2_1")
  planStep2_1 = sessionStorage.getItem("plst2_2")
  planStep2_2 = sessionStorage.getItem("plst2_3")
  planStep2Price = sessionStorage.getItem("plst2Pr_1")
  planStep2_1Price = sessionStorage.getItem("plst2Pr_2")
  planStep2_2Price = sessionStorage.getItem("plst2Pr_3")
  plan2
  sum
  p1 =  Number(this.planStep1Price.split("/")[0].split("$")[1])
  p2_1
  p2_2
  p3_3

  ngOnInit(){
   this.setPlan();
   this.total();
  }

  setPlan(){
    if(this.plan== 'Monthly'){
      this.plan2='month'
    }
    else {
      this.plan2 ='year'
    }
  }

  total(){
    if(this.planStep2Price == null){
      this.p2_1 = 0
      this.p2_2 = Number(this.planStep2_1Price.split("/")[0].split("$")[1])
      this.p3_3 = Number(this.planStep2_2Price.split("/")[0].split("$")[1])

    }
    else if (this.planStep2_1Price== null){
      this.p2_2 = 0
      this.p2_1 =  Number(this.planStep2Price.split("/")[0].split("$")[1])
      this.p3_3 = Number(this.planStep2_2Price.split("/")[0].split("$")[1])
    }
    else {
      this.p3_3 = 0
      this.p2_1 =  Number(this.planStep2Price.split("/")[0].split("$")[1])
      this.p2_2 = Number(this.planStep2_1Price.split("/")[0].split("$")[1])
    }

    this.sum = this.p1 + this.p2_2 + this.p2_1 + this.p3_3
  }

}
