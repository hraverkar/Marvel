import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() eventsData: any;
  name:any;
  displayedColumns:string[] = ['resourceURI', 'name'];
  constructor() {
  }
  ngOnInit() {
    this.name = this.eventsData;
  }

}
