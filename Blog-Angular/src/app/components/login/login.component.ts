import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;

  constructor(
    private _userService: UserService
  ) {


    this.page_title = 'Identificate';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._userService.singup(this.user).subscribe(
      response => {
        console.log(response);

      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );

  }

}
