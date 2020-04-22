import { Component, OnInit, Inject } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { MatSnackBar, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import * as _ from "lodash";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public character: any;
  public results: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private _snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public dataSnackBar: any,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}

  ngOnInit() {
    this.spinnerService.show()
    this.dataService.getCharactersData().subscribe((res) => {
      this.character = res.body;
      this.results = this.character.data.results;
      this.spinnerService.hide();
    });
  }

  otherInfo(event: any) {
    let selectedCard = event.target.alt;
    this._snackBar.open(
      selectedCard + " character selected !!",
      "Marvel",
      this.dataSnackBar.duration
    );
    var result = this.results.filter((x) => {
      return x.name === selectedCard;
    });
    this.router.navigate(["/description"], { state: { data: result } });
  }
}
