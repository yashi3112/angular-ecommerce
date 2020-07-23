import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dbKey: string = "Users";
  constructor() { }

  addUser(user) {
    const users = this.getUser();
    user.id = Date.now();
    users.push(user);
    localStorage.setItem(this.dbKey, JSON.stringify(users));

  }
  getUser(): any[] {
    return JSON.parse(localStorage.getItem(this.dbKey)) || [];
  }
  deleteUser(id) {
    const users = this.getUser();
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    localStorage.setItem(this.dbKey, JSON.stringify(users));

  }
  updateUserbyId(id, user) {
    const users = this.getUser();
    const index = users.findIndex(user => user.id === id);
    users[index] = user;
    localStorage.setItem(this.dbKey, JSON.stringify(users));
  }
  getUserById(id) {
    const users = this.getUser();
    return users.find(user => user.id === id);
  }
}
