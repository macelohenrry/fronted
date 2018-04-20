import { Component, OnInit } from '@angular/core';
import { AuthService } from './../acesso/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {

  }

  sair() {
    this.authService.limparAccessToken();
    this.authService.sair()
      .subscribe(res => res);
    this.router.navigate(['/acesso']);
  }
}
