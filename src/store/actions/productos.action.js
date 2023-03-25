export const FILTRAR_POR_CATEGORIA = 'FILTRAR_POR_CATEGORIA';

export const seleccionarCategoria = (categoria) => ({
    type: FILTRAR_POR_CATEGORIA,
    payload: categoria,
});