import { Component, OnInit,} from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  produtos: Produto[] = [];
  produtosAll: Produto[] = [];

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit(): void {

    this.mostrarProdutos();

     document.addEventListener('click', (e:any) => {

      let umEstaAberto = document.querySelectorAll('.show')
      let list = document.querySelector('.list') as HTMLElement;



      if(!e.target.classList.contains('btn')){
      if (!e.target.classList.contains('dropdown-line')){
      if(umEstaAberto != null){
      umEstaAberto.forEach(dropdown =>{
      dropdown.classList.remove('show')
      });
    }
   }
   }
   });
  }

  mostraMenu(){
   let list = document.querySelector('.list') as HTMLElement;
   list.classList.toggle('active');
  }

  mostrarDropdown(className: any){
    let lista = document.querySelector(className) as HTMLUListElement;
    let UmEstaAberto = document.querySelector('.show') as HTMLStyleElement;
    let mostrar = 'show'

    if (!UmEstaAberto) {
       lista.classList.toggle(mostrar)
    } if (UmEstaAberto){
      UmEstaAberto.classList.remove(mostrar)
      lista.classList.toggle(mostrar)
    } if (UmEstaAberto && lista.classList == UmEstaAberto.classList){
      lista.classList.toggle(mostrar)
    }

   }

   mostrarProdutos(){
    this.produtosService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
    })
   }

   pesquisarHeader(e: any): void{
    const target = e.target as HTMLInputElement;
    const value = target.value;

    if(value == ''){
      location.reload();
    }

      this.produtos = this.produtos.filter((produto) =>{
      return produto.nome.toLowerCase().includes(value);

    });console.log(this.produtos)
    }

}









