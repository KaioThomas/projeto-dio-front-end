import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './service/produtos.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {
  produtos: Produto[] = [];
  carrinho: Produto[] = [];
  total = 0;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.carrinho;
    this.mostrarProdutos();
    this.total = this.produtos.length
  }

  mostrarProdutos(){
    this.produtosService.getProdutos().subscribe(produtos => {
    this.produtos = produtos;
  })
 }

  limparInput(){
    const input = document.getElementById('pesquisaInput') as HTMLInputElement;
    input.value = '';
    location.reload();
  }

  pesquisar(): void{
  const input = document.getElementById('pesquisaInput') as HTMLInputElement;
  const value = input.value;

  if(value == ''){
    location.reload();
  }
    this.produtos = this.produtos.filter((produto) =>{
    return produto.nome.toLowerCase().includes(value);
  }); this.total = this.produtos.length
  }
}


