import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MapboxViewApi, MapboxMarker } from '@nativescript-community/ui-mapbox';

@Component({
  selector: 'ns-mapa',
  templateUrl: './mapa.component.html',
})
export class MapaComponent implements AfterViewInit {
  @ViewChild('mapa', { static: false }) mapaRef!: ElementRef<MapboxViewApi>;

  ngAfterViewInit() {
    setTimeout(() => {
      const map = this.mapaRef?.nativeElement;
      if (map) {
        map.addMarkers([
          {
            id: 1,
            lat: -34.6037,
            lng: -58.3816,
            title: 'Buenos Aires',
            subtitle: 'Marker de ejemplo',
          } as MapboxMarker,
        ]);
      }
    }, 1000);
  }
}
