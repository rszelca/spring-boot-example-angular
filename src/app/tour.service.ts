import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Tour } from './model';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TourService {

  constructor(private http: HttpClient) { }

private toursUrl = 'api/';
  // TODO   private tourUrl = '/api'; get variable from proxy file

  public getTours (): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl);

  }
}
