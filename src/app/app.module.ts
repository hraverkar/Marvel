import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, DescriptionComponent, NotFoundComponent, ComicsComponent, EventsComponent, SeriesComponent, StoriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSnackBarModule,
    RouterModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {},
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
