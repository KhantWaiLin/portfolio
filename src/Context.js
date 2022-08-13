import {createContext,useReducer} from 'react';

export const themContext = createContext();

const initialState = {darkMode: false};

const themeReducer = (state,action)=>{
    switch (action.type) {
        case 'toggle':
            return{darkMode: !state.darkMode};
    
        default:
            return state;
    }
}

export const ThemeProvider = (props)=>{
    const [state,dispatch] = useReducer(themeReducer,initialState);
    return(
        <themContext.Provider value={{state,dispatch}}>
            {props.children}
        </themContext.Provider>
    )
}