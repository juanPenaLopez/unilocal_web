import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private imgURL = "https://unilocal-oyt6.onrender.com/api/imagenes";

  constructor(private http: HttpClient) { }

  public subir(imagen: FormData): Observable<any> {
    return this.http.post<any>(`${this.imgURL}/subir`, imagen);
  }
  
  public eliminar(imagenDTO: any): Observable<any> {
    return this.http.request<any>('delete', `${this.imgURL}/eliminar`, {
      body: imagenDTO
    });
  }
}
