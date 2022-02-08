import { createReducer, on, Action } from "@ngrx/store";
import * as actions from "./filtro.actions";

export const initialSate: actions.filtrosValidos = 'todos';

const _filtroReducer = createReducer<actions.filtrosValidos, Action>(initialSate,
    on(actions.setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state: any, action: any) {
    return _filtroReducer(state, action);
}