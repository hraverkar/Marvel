import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'description', component:DescriptionComponent},
  {path:'**', component:NotFoundComponent},
  {path:'comic', component:ComicsComponent},
  {path:'event', component:EventsComponent},
  {path:'series', component:SeriesComponent},
  {path:'story', component:StoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
