import React, {useState} from 'react'
import { Avatar, Card, IconButton, } from 'react-native-paper';
import UltimosMov from '../Components/UltimosMov';
import { StyleSheet, View } from 'react-native';


const CardScreen = () => (
    <>  
    <View style={styles.container}>
        <Card style={styles.card}>
            <Card.Title
                title="Titular"
                subtitle="N° de cuenta: 0005554321135899"
                left={(props) => <Avatar.Icon {...props} icon="cash" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}
            />
        <UltimosMov />
        </Card>
    </View>
    </>

);

export default CardScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2727',
        height:'100%'
    },
   card: {
    backgroundColor: '#FF0000',
    width: '90%',
    top: 10,
    left: '5%',
    height: '50%'
   }, 
   titleStyle: {
    color: '#fff', // Cambia el color del título a rojo
    fontSize: 25,
    fontFamily: 'sans-serif-medium' // Cambia el tamaño del texto del título
   },
   subtitleStyle: {
    color: '#fff', // Cambia el color del subtítulo a azul
    fontSize: 16, // Cambia el tamaño del texto del subtítulo
    fontFamily: 'sans-serif-medium'
   },
   surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
