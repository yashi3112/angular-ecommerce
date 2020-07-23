import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }
  addUserForm: FormGroup;
  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  addUserDetails() {

    console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value);
    this.router.navigate(['../'], { relativeTo: this.route });

  }


}
