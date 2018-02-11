import * as AuthActions from './auth.actions';

export interface State {
    token: string,
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.SIGN_IN:
        case AuthActions.SIGN_UP:
            return {
                ...state, // distribute all old state using spread operator 
                authenticated: true
            }                  
        case AuthActions.LOG_OUT:
            return {
                ...state,
                token: null,
                authenticated: false
            }
        case AuthActions.SET_TOKEN:
            return {
                ...state,
                authenticated: true,
                token: action.payload
            }       
        default:
            return state;
    }
}
