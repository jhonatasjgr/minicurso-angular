import { Component } from '@angular/core';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-corpo-lista',
  templateUrl: './corpo-lista.component.html',
  styleUrl: './corpo-lista.component.css',
})
export class CorpoListaComponent {
  texto!: any
  listaTarefas!: any
  listaTarefasFeitas!: any

  constructor(private service: ServiceService) {
    this.listaTarefas = service.getTarefas()
    this.listaTarefasFeitas = service.getTarefasFeitas()
  }
  excluir(indice: number) {
    this.service.excluirTarefa(indice)
    this.listaTarefas = this.service.getTarefas()
    this.listaTarefasFeitas = this.service.getTarefasFeitas()
  }
  adicionar() {
    this.service.adicionarTarefa(this.texto)
    this.texto = ''
    this.listaTarefas = this.service.getTarefas()
    this.listaTarefasFeitas = this.service.getTarefasFeitas()
  }
  concluir(indice: number) {
    this.service.concluirTarefa(indice)
    this.listaTarefas = this.service.getTarefas()
    this.listaTarefasFeitas = this.service.getTarefasFeitas()
  }

}
