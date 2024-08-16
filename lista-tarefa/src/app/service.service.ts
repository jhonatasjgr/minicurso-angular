
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private listaTarefa: any = []
  private id = 0

  getTarefas() {
    return this.listaTarefa.filter((item: any) => item.feita == false)
  }
  getTarefasFeitas() {
    return this.listaTarefa.filter((item: any) => item.feita == true)
  }

  adicionarTarefa(texto: string) {
    this.listaTarefa.push({
      id: this.id,
      texto: texto,
      feita: false
    })
    this.id++
  }
  excluirTarefa(id: number) {
    this.listaTarefa = this.listaTarefa.filter((item: any) => item.id !== id)
  }
  concluirTarefa(id: number) {
    this.listaTarefa.forEach((item: any) => {
      if (item.id === id) {
        item.feita = true
      }
    });
  }

}
