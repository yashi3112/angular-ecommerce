import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUser();
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
    this.ngOnInit();
  }
  editUser(id) {
    let user = this.userService.getUserById(id);
    this.userService.updateUserbyId(id, user);
    this.ngOnInit();
  }

}
