import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  /** Subject para las inscripciones de los modales */
  private modal = new Subject<any>();


  /** Subject para las inscripciones de los componentes invocadores */
  private invocador = new Subject<any>();

  /**
   * Método que permite notificar al los modales inscrito
   * @param any, Valor que se la pasa al modal
   */
  public openModal(object: any): Observable<any> {
    this.invocador = new Subject<any>();
    this.modal.next(object);
    return this.invocador.asObservable();
  }

  /**
   * Método que permite retornar el resultado de mostrar el modal.
   * @param any, Valor que se la pasa al invocador. 
   * El modal.component retorna true si se presiono 
   * aceptar y false si se presiono cancelar
   */
  public notificarInvocador(object: any) {
    this.invocador.next(object);
  }

  /**
   * Método que permite dar la inscripcion para los modales
   * Observable<any>, observable con la inscripcion
   */
  public getSubcripcionModal(): Observable<any> {
    return this.modal.asObservable();
  }

}
