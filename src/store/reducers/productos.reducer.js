import { PRODUCTOS } from '../../data/productos';

import { FILTRAR_POR_CATEGORIA } from '../actions/productos.action';

const initialState = {
    productos: PRODUCTOS,
    categoriaSeleccionada: null,
};

const ProductosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTRAR_POR_CATEGORIA:
            if(action.payload === 'todos') {
                return {
                    productos: PRODUCTOS,
                    categoriaSeleccionada: null,
                };
            }
            if(action.payload === 'sin_alcohol' || action.payload === 'con_alcohol') {
                return {
                    productos: PRODUCTOS.filter(producto => producto.categoria === action.payload),
                    categoriaSeleccionada: action.payload,
                };
            }
            return state;
        default:
            return state;
    }
}

export default ProductosReducer;