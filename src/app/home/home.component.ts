import { Component, OnInit, Inject } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public character: any;
  public results: any;

  constructor(private dataService: DataService, private router:Router,
    private _snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public dataSnackBar: any) {}

  ngOnInit() {
    this.dataService.getCharactersData().subscribe((res) => {
      this.character = res.body;
      this.results = this.character.data.results;
    });
  }

  otherInfo(event: any) {
    console.log(event);
    this._snackBar.open(event.target.alt+" character selected !!", "Marvel", this.dataSnackBar.duration);
    this.router.navigate(['/description']);
  }
}
