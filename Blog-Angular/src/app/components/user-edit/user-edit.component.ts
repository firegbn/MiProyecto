import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { UserService } from '../../services/user.service';
import {global} from '../../services/global'


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public page_title: string;
  public user: User;
  public identity;
  public token;
  public status;
  public froala_options: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'user/upload',
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
     "Authorization" : this._userService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu Avatar...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
     }
     };

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

  ngOnInit(): void {
  }

  onSubmit(form){
    this._userService.update(this.token, this.user).subscribe(
      response => {
        if(response) {
          console.log(response);
          this.status = 'success';

          // Actualizar usuario en sesion

          
         
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

  AvatarUpload(datos){
    let data = JSON.parse(datos.response);
    this.user.image = data.image;
  }

}
