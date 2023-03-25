import React from 'react'
import { Button, FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { seleccionarCategoria } from '../store/actions/productos.action'

const Home = () => {

    const productos = useSelector(state => state.productos.productos)
    const dispatch = useDispatch()

    // React.useEffect(() => {
    //     console.log(productos)
    // }, [productos])
    

    return (
        <View style={styles.screen}>
            <Text style={styles.titulo}>Listado de bebidas</Text>
            <FlatList
                data={productos}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nombre}</Text>
                        <Text>${item.precio}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <View style={styles.filtros}>
                <Button
                    title="Todas"
                    onPress={() => dispatch(seleccionarCategoria('todos'))}
                />
                <Button
                    title="Sin Alcohol"
                    onPress={() => dispatch(seleccionarCategoria('sin_alcohol'))}
                />
                <Button
                    title="Con Alcohol"
                    onPress={() => dispatch(seleccionarCategoria('con_alcohol'))}
                />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        gap: 10,
        backgroundColor: '#ddd',
    },
    filtros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        gap: 10,
    },
})