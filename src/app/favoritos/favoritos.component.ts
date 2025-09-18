import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../services/items.service';
import { Store } from '@ngrx/store';
import { leerAhora } from '../store/leidos.actions';

@Component({
  selector: 'ns-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: Item[] = [];

  constructor(private itemsService: ItemsService, private store: Store) {}

  ngOnInit() {
    this.itemsService.getItems('', true).subscribe(items => {
      this.favoritos = items;
    });
  }

  leerAhora(item: Item) {
    this.store.dispatch(leerAhora({ item }));
  }
}
