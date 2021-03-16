import { User } from "./User";

export class UsersData {
  public getUsers(): User[] {
    let users: User[] = [];
    let user = new User();
    user.name = 'Suresh';
    user.id = 1;
    users.push(user);
    user.name = 'Naresh';
    user.id = 2;
    users.push(user);
    user.name = 'Pooresh';
    user.id = 3;
    users.push(user);
    return users;
  }
}
