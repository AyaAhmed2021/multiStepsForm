import { PersonalInfoComponent } from './componenets/personal-info/personal-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './componenets/plan/plan.component';
import { AddOnsComponent } from './componenets/add-ons/add-ons.component';
import { SummaryComponent } from './componenets/summary/summary.component';
import { FinishComponent } from './componenets/common/finish/finish.component';

const routes: Routes = [
  {path: '', component: PersonalInfoComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'addOns', component: AddOnsComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'thanks', component: FinishComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
