import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }


  //servico para criar usuario - usa uma interface que criamos SignupUserRequest de entrada
  //usamos outra interface de resposta SignupUserResponse
  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {

    //retorno da Observable(requisicao):
    return this.http.post<SignupUserResponse>(
      //url da api:
      `${this.API_URL}/user`,
      requestDatas //dados de entrada enviado para requisicao
    );
  }

  //autenticar usuarios
  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`,
      requestDatas
    );
  }

}
