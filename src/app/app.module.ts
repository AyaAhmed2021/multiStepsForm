import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/common/navbar/navbar.component';
import { PersonalInfoComponent } from './componenets/personal-info/personal-info.component';
import { PlanComponent } from './componenets/plan/plan.component';
import { SummaryComponent } from './componenets/summary/summary.component';
import { AddOnsComponent } from './componenets/add-ons/add-ons.component';
import { FinishComponent } from './componenets/common/finish/finish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PersonalInfoComponent,
        PlanComponent,
        SummaryComponent,
        AddOnsComponent,
        FinishComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        SharedModule,
    ]
})
export class AppModule { }
