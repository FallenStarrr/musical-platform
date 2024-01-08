import {Context,  MakeStore , createWrapper} from "@/node_modules/next-redux-wrapper/es6/index";
import { AnyAction, applyMiddleware, createStore } from "redux";
import {RootState, reducer} from "./reducers/index";
import { ThunkDispatch, thunk } from "redux-thunk";




const makeStore: MakeStore<RootState> 
= (context: Context) => createStore(reducer, applyMiddleware(thunk))

export const wrapper = createWrapper<RootState>(makeStore, {defug:true})


export type  NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>