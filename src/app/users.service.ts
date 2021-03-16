import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersData } from './mockusers';
import { User } from './User';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private route: ActivatedRoute) { }

  getUsers(): User[] {
    var usrs = new UsersData();
    return usrs.getUsers();//API call
  }

  getUsersObservable(): Observable<User[]> {
    var usrs = new UsersData();
    return of(usrs.getUsers());//API Call which returns Observable information
  }
}
