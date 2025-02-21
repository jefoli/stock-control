import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { GetAllProductsResponse } from 'src/app/models/interfaces/response/GetAllProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataTransferService {

  //quando uma propriedade retorna um Observable, inserimos um $ para identificar
  public productsDataEmitter$ = new BehaviorSubject<Array<GetAllProductsResponse> | null>(null);

  //
  public productsDatas: Array<GetAllProductsResponse> = [];

  //metodos - vai setar quais sao os dados que vamos passar paa quem estar escrito no observable que vamos receber
  setProductsDatas(products: Array<GetAllProductsResponse>): void {
    if(products) {

      //next -> passar para quem esta escrito no observable o novo dado
      this.productsDataEmitter$.next(products);
      this.getProductsDatas();
    }
  }

  getProductsDatas() {
    //definir os dados de produtos
    this.productsDataEmitter$
    .pipe(
      //operador take - evitamos memory leak
      take(1),
      map((data) => data?.filter((product) => product.amount > 0))
    )
    .subscribe({
      next: (response) => {
        if(response) {
          this.productsDatas = response;
        }
      }
    });
    return this.productsDatas;
  }
}
