import { ActionReducer, createAction } from "@ngrx/store";

export const loggingMetaReducer = (
    reducer : ActionReducer<any> 
): ActionReducer<any> =>{
    return (state, action)=>{
        console.log("current state ", state);
        console.log("action:", action);
        //execute the actual reducer

        try {
            const nextState = reducer(state, action);
            console.log("next state", nextState);
            return nextState
        } catch (error) {
            return state  
        }
    }
}

export const reset = createAction("Reset");

export const resettingMetaReducer = (
    reducer: ActionReducer<any>
): ActionReducer<any>=>{
    return (state,action)=>{
        if(action.type===reset.type){
            return reducer(undefined, action)
        }
        return reducer(state, action)
    }
}