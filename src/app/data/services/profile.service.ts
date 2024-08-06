import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Profile } from './interfaces/profile.interface';
import { Subscribers } from './interfaces/subscribers.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient);
  private baseApiUrl = 'https://icherniakov.ru/yt-course/';
  me!: Profile

  public getTextAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  public getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
    .pipe(
      tap((res: Profile) => this.me = res)
    );
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`)
  }

  public getSubscribersShortList() {
    return this.http.get<Subscribers<Profile>>(`${this.baseApiUrl}account/subscribers`)
    .pipe(
      map((res: Subscribers<Profile>) => res.items.slice(0, 3))
    );
  }
}
