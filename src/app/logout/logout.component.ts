import {Component, Input} from '@angular/core';
import {AuthService} from '../../service/auth.service'

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html',
    providers: [AuthService],
    styles: []
  }
)
export class LogoutComponent {

  //Injectalva van
  authService:AuthService = null;
  //Szulo komponjenstol jon
  @Input() user:Object={}

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  requestLogout(){
    this.authService.requestLogout(this.user, "/api/logout").subscribe(this.logoutHandler);
  }

  logoutHandler(){
    console.log('Logout ok!');
  }

}
