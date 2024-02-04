import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPlan } from '../interfaces/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanManagerService {

  constructor(private http: HttpClient) { }

  fetchPlans(): Observable<IPlan[]> {
    return this.http.get('./assets/json/Plans.json')
    .pipe(map((response: any) => <IPlan[]>response))
  }
}
