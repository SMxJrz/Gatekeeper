import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EC2_SERVICE_ROOT} from '../../../config/gatekeeper.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  searchForUsers(searchStr: string): Observable<IUser[]> {
    const params: string = new URLSearchParams({searchStr: searchStr}).toString();
    return this._http.get<IUser[]>(`${EC2_SERVICE_ROOT}/searchAD?${params}`);
  }
}

export interface IUser {
  userId: string;
  email: string;
  name: string;
}
