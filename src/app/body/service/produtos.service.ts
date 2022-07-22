import { Injectable } from '@angular/core';
import { Produto } from '../produto';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

getProdutos(): Observable<any>{
    let produtos = [{
    nome: 'Balança Digital',
    imagem: 'produto-balanca.png',
    preco: 30.00,
    exPreco: 45.00,
    id: 1,
   },
    {
    nome: 'Whey',
    imagem: 'whey.png',
    preco: 190.90,
    exPreco: 200.00,
    id: 2,
   },
   {
    nome: 'Creatina',
    imagem: 'creatina.png',
    preco: 50.00,
    exPreco: 60.00,
    id: 3,
 },
 {
    nome: 'Diabo verde',
    imagem: 'diabo-verde.png',
    preco: 79.00,
    exPreco: 99.90,
    id: 4,
},
{
    nome: 'profit',
    imagem: 'profit.png',
    preco: 169.90,
    exPreco: 200.00,
    id: 5,
},
{
  nome: 'Mochila Growth',
  imagem: 'b_mochila.png',
  preco: 160.00,
  exPreco: 210.00,
  id: 6,
},
{
  nome: 'Squeeze Growth',
  imagem: 'b_squeeze.png',
  preco: 89.90,
  exPreco: 105.00,
  id: 7,
},
{
  nome: 'Coqueteira Growth',
  imagem: 'coqueteleira.png',
  preco: 75.00,
  exPreco: 90.00,
  id: 8,
},
{
  nome: 'Super Whey',
  imagem: 'super-whey.png',
  preco: 189.90,
  exPreco: 200.00,
  id: 9,
},
  ]

  return of(produtos)
}



  constructor() { }


}
