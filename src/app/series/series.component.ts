import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  @Input() seriesData: any;
  name:any;
  displayedColumns:string[] = ['resourceURI', 'name'];

  constructor() {
  }
  ngOnInit() {
    this.name = this.seriesData;
    console.table(this.name);
  }
}
