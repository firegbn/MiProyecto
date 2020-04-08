import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {User} from '../../models/user';
import { UserService } from '../../services/user.service';

=======
>>>>>>> 6c52579a82cab712b31115e837a857ba942c4b8e

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
<<<<<<< HEAD
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public page_title: string;
  public user: User;
  public identity;
  public token;
  public status;

  constructor(
    private _userService: UserService
  ) {
    this.page_title = 'Ajustes de usuario';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    // rellenar datos de usuario
    this.user = new User(
              this.identity.id,
              this.identity.name,
              this.identity.surname,
              this.identity.role,
              this.identity.email, '',
              this.identity.description,
              this.identity.image
              );

  }
=======
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor() { }
>>>>>>> 6c52579a82cab712b31115e837a857ba942c4b8e

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(form){
    this._userService.update(this.token, this.user).subscribe(
      response => {
        if(response) {
          console.log(response);
          this.status = 'success';

          // Actualizar usuario en sesion

          if (response.changes.name) {
            this.user.name = response.changes.name;
          }

          if (response.changes.surname) {
            this.user.surname = response.changes.surname;
          }

          if (response.changes.email) {
            this.user.email = response.changes.email;
          }



          this.identity = this.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));

        }else{
          this.status = 'error';

        }

      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    );

  }

=======
>>>>>>> 6c52579a82cab712b31115e837a857ba942c4b8e
}
