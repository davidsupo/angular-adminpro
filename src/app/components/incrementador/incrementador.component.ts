import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progreso = 50;
  @Input() btnClass = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number): void{
    if ( this.progreso >= 100 && valor >= 0){
      this.progreso = 100;
    }else if ( this.progreso <= 0 && valor < 0){
      this.progreso = 0;
    }else{
      this.progreso = this.progreso + valor;
    }
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number): void{
    if (valor >= 100){
      this.progreso = 100;
    }else if (valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.valorSalida.emit(valor);
  }

}
