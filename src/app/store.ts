import { createAction, createReducer, on, ActionReducerMap, props } from "@ngrx/store"

export interface State {
    count: number
}

export const increment = createAction("[Counter] Increment");
export const multiply = createAction(
    "[Counter] Multiply",
    props<{ factor: number }>()
);
    

export const contReducer = createReducer(
    0, //initial state
    on(increment, (count)=>{
        return count + 1
    }),
    on(multiply, (count, { factor }) => count * factor)
)

export const reducers: ActionReducerMap<State> = {
    count: contReducer
}