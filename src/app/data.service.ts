import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public URL = 'https://gateway.marvel.com:443/';

  public publicKey = '3098e996e853abd6382fd5b79bf1ea2a';
  public privateKey = 'f89ce7640981357d159af9b52d2adeb88c859b26';
  public timestamp = new Date().getTime();
  public stringToHash = this.timestamp + this.privateKey + this.publicKey;
  public  hash = Md5.hashStr(this.stringToHash);
  constructor(private httpClient: HttpClient,private spinnerService: Ng4LoadingSpinnerService) {}

  getCharactersData() {
    return this.httpClient
      .get<any>(
        this.URL +
          'v1/public/characters?ts=' +
          this.timestamp +
          '&apikey=' +
          this.publicKey +
          '&hash=' +
          this.hash +
          '',
        { params: new HttpParams({}), observe: 'response' }
      )
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => {})
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknow error!;';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error :${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage :${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
