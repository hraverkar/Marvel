import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  private videoSearched = new Subject<any>();
  videoSearched$ = this.videoSearched.asObservable();

  getMessage(videos: any) {
    this.videoSearched.next(videos);
  }
}


