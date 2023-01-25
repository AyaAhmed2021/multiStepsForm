import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css'],
})
export class AddOnsComponent {
  route = '/summary';
  routeBack = '/plan';
  isclicked1 = false;
  isclicked2 = false;
  isclicked3 = false;
  plan = localStorage.getItem('plan');

  @ViewChild('online') online: ElementRef<HTMLInputElement>;
  @ViewChild('onlinePrice') onlinePrice: ElementRef<HTMLInputElement>;
  @ViewChild('large') large: ElementRef<HTMLInputElement>;
  @ViewChild(' largePrice') largePrice: ElementRef<HTMLInputElement>;
  @ViewChild('custom') custom: ElementRef<HTMLInputElement>;
  @ViewChild('customPrice') customPrice: ElementRef<HTMLInputElement>;

  ngOnInit() {
    console.log(this.plan);
    sessionStorage.clear();
  }

  select(e) {
    // console.log(e)
    if (e == 'one') {
      this.isclicked1 = !this.isclicked1;
      if (sessionStorage.getItem('plst2_1')) {
        sessionStorage.removeItem('plst2_1');
        sessionStorage.removeItem('plst2Pr_1');
      } else {
      sessionStorage.setItem('plst2_1', this.online.nativeElement.textContent);
      sessionStorage.setItem(
        'plst2Pr_1',
        this.onlinePrice.nativeElement.textContent
      );
      }
    } else if (e == 'two') {
      this.isclicked2 = !this.isclicked2;
      if (sessionStorage.getItem('plst2_2')) {
        sessionStorage.removeItem('plst2_2');
        sessionStorage.removeItem('plst2Pr_2');
      } else {
      sessionStorage.setItem('plst2_2', this.large.nativeElement.textContent);
      sessionStorage.setItem(
        'plst2Pr_2',
        this.largePrice.nativeElement.textContent
      );
      }
    } else {
      this.isclicked3 = !this.isclicked3;
      if (sessionStorage.getItem('plst2_3')) {
        sessionStorage.removeItem('plst2_3');
        sessionStorage.removeItem('plst2Pr_3');
      } else {
        sessionStorage.setItem('plst2_3', this.custom.nativeElement.textContent);
        sessionStorage.setItem(
          'plst2Pr_3',
          this.customPrice.nativeElement.textContent
        );
      }
    }
  }
}
