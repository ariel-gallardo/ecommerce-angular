import { Component, signal, WritableSignal, effect, Inject, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { tileLayer } from 'leaflet';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'coordinate-select',
  standalone: false,
  templateUrl: './coordinate-select.html',
  styleUrl: './coordinate-select.scss',
})
export class CoordinateSelect implements OnDestroy {

  constructor(
    private dialogRef: MatDialogRef<CoordinateSelect>
  ) {
    effect(() => {
      const lat = this.latitude();
      const lng = this.longitude();

      if (!this.map || lat == null || lng == null) return;

      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }

      this.map.setView([lat, lng], this.map.getZoom());
    });
  }
  ngOnDestroy(): void {
    this.dialogRef.close({
      latitude: this.latitude(),
      longitude: this.longitude()
    });
  }

  map!: L.Map;
  private marker?: L.Marker;

  public latitude: WritableSignal<number | null> = signal(null);
  public longitude: WritableSignal<number | null> = signal(null);

  onMapReady(map: L.Map) {
    this.map = map;
    this.map.on("dblclick", (event: L.LeafletMouseEvent) => {
      this.latitude.set(event.latlng.lat);
      this.longitude.set(event.latlng.lng);
    });
    this.center();
  }

  options: L.MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 15,
    minZoom: 15,
    maxZoom: 18
  };

  public center() {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        this.latitude.set(position.coords.latitude);
        this.longitude.set(position.coords.longitude);
      }
    );
  }
}
