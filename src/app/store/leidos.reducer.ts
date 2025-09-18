import { createReducer, on } from '@ngrx/store';
import { leerAhora } from './leidos.actions';
import { Item } from '../services/items.service';

export interface LeidosState {
  leidos: Item[];
}

export const initialState: LeidosState = {
  leidos: [],
};

export const leidosReducer = createReducer(
  initialState,
  on(leerAhora, (state, { item }) => ({
    leidos: state.leidos.some(i => i.id === item.id) ? state.leidos : [...state.leidos, item],
  }))
);
