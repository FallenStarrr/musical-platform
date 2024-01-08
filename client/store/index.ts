import {Context,  MakeStore , createWrapper} from "@/node_modules/next-redux-wrapper/es6/index";
import { createStore } from "redux";
import {RootState, reducer} from "./reducers/index";




const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer)

export const wrapper = createWrapper<RootState>(makeStore, {defug:true})