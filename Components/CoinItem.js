import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const CoinItem = ({coin}) => {
    return (
        <View style={styles.container}>
            <View style={styles.coinName}>
                <Image style={styles.image}
                    source={{uri: coin.image}}
                />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textPrice}>${coin.current_price}</Text>
                <Text style={[
                    styles.pricePercentage,
                    coin.price_change_percentage_24h > 0 
                    ? styles.priceUp 
                    : styles.priceDown,
                    ]}>
                    {coin.price_change_percentage_24h.toFixed(2)}
                </Text>
            </View>
        </View>
    );
}

export default CoinItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F0F0F',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'     
    },
    containerNames: {
        marginLeft: 10
    },
    coinName: {
        flexDirection: 'row'
    },  
    image:{
        width: 30,
        height: 30
    },
    text: {
        color: '#ffffff',
    },
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase',
    },
    pricePercentage: {
        textAlign: 'right',
    },
    textPrice:{
        color: '#fff',
        textAlign: 'right'
    },
    priceUp: {
        color: 'green'
    },
    priceDown: {
        color: 'red'
    }
})