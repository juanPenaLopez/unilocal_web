import { Injectable } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  mapa: any;
  marcadores: any[];

  constructor() {
    this.marcadores = [];
  }

  public crearMapa() {
    this.mapa = new mapboxgl.Map({
      accessToken: '<your access token here>',
      container: 'mapa',
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-75.6258, 4.4053],
      zoom: 9
    });
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
      })
    );
  }

  public agregarMarcador(): Observable<any> {
    const mapaGlobal = this.mapa;
    const marcadores = this.marcadores;
    return new Observable<any>(observer => {
      mapaGlobal.on('click', function (e: any) {
        marcadores.forEach(marcador => marcador.remove());
        const marcador = new mapboxgl.Marker()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(mapaGlobal);
        marcadores.push(marcador);
        observer.next(marcador.getLngLat());
      });
    });
  }

  public pintarMarcadores(negocios: any[]) { //TODO - Cambiar parametro
    negocios.forEach(negocio => {
      new mapboxgl.Marker()
        .setLngLat([negocio.ubicacion.longitud, negocio.ubicacion.latitud])
        .setPopup(new mapboxgl.Popup().setHTML(negocio.nombre))
        .addTo(this.mapa);
    });
  }
}
