import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {IMenuGroup} from '../interfaces/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuManagerService {

  constructor(private http: HttpClient) { 

  }

  public fetchMenu(): Observable<IMenuGroup[]> {
    return this.http.get('./assets/json/MenuItems.json')
    .pipe(map((response: any) => <IMenuGroup[]>response));
  }
}
