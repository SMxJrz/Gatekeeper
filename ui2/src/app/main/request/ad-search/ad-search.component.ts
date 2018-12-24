import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '@gk/ad-search/user.service';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'gk-ad-search',
  templateUrl: './ad-search.component.html',
  styleUrls: ['./ad-search.component.scss']
})
export class AdSearchComponent implements OnInit {

  searchText: string;
  userData: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['userId', 'email', 'name'];

  constructor( private _userService: UserService) {
    this.userData = new MatTableDataSource<IUser>([]);
  }

  ngOnInit() {
  }

  searchUsers(searchText: string): void {
    console.info(this._userService);
    this._userService.searchForUsers(searchText).pipe(first()).subscribe((users: IUser[]) => {
      this.userData.data = users;
    });
  }

}
