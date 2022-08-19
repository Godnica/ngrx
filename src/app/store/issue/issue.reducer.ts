import { createReducer, on } from "@ngrx/store";
import { initialState } from "./issue.state";
import * as IssueActions from "./issue.actions";
import { loggingMetaReducer } from "../meta-reducers";

export const reducer = createReducer(
    initialState,
    on(IssueActions.submit, (state, {issue})=>{
        return {
            ...state,
            entities: {
                ...state.entities,
                [issue.id]: {
                    ...issue,
                    resolved: false
                }
            }
        }
    })
)

export const issueReducer = loggingMetaReducer(reducer)