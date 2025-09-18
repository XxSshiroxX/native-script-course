import { ActionReducerMap } from '@ngrx/store';
import { leidosReducer, LeidosState } from './leidos.reducer';

export interface AppState {
  leidos: LeidosState;
}

export const reducers: ActionReducerMap<AppState> = {
  leidos: leidosReducer,
};
