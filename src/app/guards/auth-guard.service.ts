import { UserService } from 'src/app/services/user/user.service';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private userService: UserService, private router: Router) {}

  //método que pode retornar um Obervable
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.userService.isLoggedIn()) {

      //chamamos o router e navegamos ele para tela de login se não estiver logado:
      this.router.navigate(['/home']);
      return false; //retorna para o guarda de rotas
    }

    //passou da validacao:
    this.userService.isLoggedIn();
    return true;
  }
}
