import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

interface ExampleTab{
  label?:string;
  content?:any;
}

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;
  constructor(private router:Router) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Comics', content: this.router.navigate(['/comic'])},
          {label: 'Events', content: this.router.navigate(['/event'])},
          {label: 'Series', content: this.router.navigate(['/series'])},
          {label: 'Stories', content: this.router.navigate(['/story'])},
        ]);
      }, 1000);
    });
   }

  ngOnInit() {
  }

}
