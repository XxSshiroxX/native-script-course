import { Component, OnInit } from '@angular/core';
import { getString, setString, hasKey } from '@nativescript/core/application-settings';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  nombreUsuario = '';
  apiUrl = '';

  ngOnInit() {
    this.nombreUsuario = hasKey('nombreUsuario') ? getString('nombreUsuario') : '';
    this.apiUrl = hasKey('API_URL') ? getString('API_URL') : '';
  }

  guardar() {
    setString('nombreUsuario', this.nombreUsuario);
    setString('API_URL', this.apiUrl);
  }
}
