import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { GetAllProductsResponse } from 'src/app/models/interfaces/response/GetAllProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //pega a url do servidor:
  private API_URL = environment.API_URL;

  //token jwt do cookie que desejamos acessar
  private JWT_TOKEN = this.cookie.get('USER_INFO');

  //para fazermos requisições a rotas precisamos estar logados na app
  //[recisamos passar o bearer token no header para autenticar/fazer a requisição:
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  }


  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  //método para fazer requisicao ao back-end e informar os produtos
  getAllProducts(): Observable<Array<GetAllProductsResponse>> {
    return this.http.get<Array<GetAllProductsResponse>>(
      `${this.API_URL}/products`,
      this.httpOptions
    )
    .pipe(
      //map para pegar os produtos com ammount maior que 0
      map((product)=> product.filter((data)=> data?.amount > 0))
    )

  }
}
