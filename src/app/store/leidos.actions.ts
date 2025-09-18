import { createAction, props } from '@ngrx/store';
import { Item } from '../services/items.service';

export const leerAhora = createAction('[Favoritos] Leer ahora', props<{ item: Item }>());
