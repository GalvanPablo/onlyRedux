import { createStore, combineReducers } from "redux";

import ProductosReducer from "./reducers/productos.reducer";

const RootReducer = combineReducers({
    productos: ProductosReducer,
});

export default createStore(RootReducer);