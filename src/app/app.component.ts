import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './acesso/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private authService: AuthService,
    private router: Router) {

  }

  exibindoNavbar() {
    return this.router.url !== '/acesso' && this.authService.isTokenValido();
  }

}
