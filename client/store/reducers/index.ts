import { playerReducer } from './playerReduser';
import { combineReducers } from "@/node_modules/redux/dist/redux";


export const rootReducer = combineReducers({
  player: playerReducer
})


export type RootState = ReturnType<typeof rootReducer>
