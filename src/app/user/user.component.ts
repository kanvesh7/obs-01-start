import { User } from "./../User";
import { UsersService } from "./../users.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: number;
  user: User = new User();
  users: User[] = [];
  constructor(
    private route: ActivatedRoute,
    private userservice: UsersService
  ) {}

  ngOnInit() {
    //Make another DB call.
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  getUsersInfo() {
    this.userservice.getUsersObservable().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
