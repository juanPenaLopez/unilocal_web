import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-responder-comentario',
  templateUrl: './responder-comentario.component.html',
  styleUrls: ['./responder-comentario.component.css']
})
export class ResponderComentarioComponent {
  comentarioForm: FormGroup; 

  constructor(private fb: FormBuilder) { 
    this.initForm(); 
  }

  initForm() {
    this.comentarioForm = this.fb.group({
      mensajeRespuesta: ['', Validators.required], 
    });
  }

  
  enviarRespuesta() {
    if (this.comentarioForm.valid) { 
      const respuesta: string = this.comentarioForm.value.mensajeRespuesta; 
      // Aquí implementar la lógica que falta para enviar la respuesta del comentario
    }
  }
}