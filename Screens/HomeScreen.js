import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react'
import CoinItem from '../Components/CoinItem';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const HomeScreen = ({navigation, setEmail, setPassword}) => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    try {
      const res = await fetch (
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      const data = await res.json()
      setCoins(data)
    } catch (error) {
      console.error('error feching')
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  const saldo = 33600511;

  const handleSaldo = () => {
    navigation.navigate('Mi Cuenta')
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar /* backgroundColor="#141414" hidden /> */}
      <View style={styles.containerSaldo}>
      <Text style={{color: '#fff', fontSize: 25}}>Mi Cuenta</Text>
        <TouchableOpacity style={styles.saldo} onPress={handleSaldo}>
              <Text style={{color: '#fff', fontSize: 20}}>Total:</Text>
              <Text style={{color: '#fff', fontSize: 20}}>${saldo}</Text>
          <View style={styles.total}>
              <Entypo name="edit" size={24} color="#fff" />
              <AntDesign name="delete" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Crypto Marketing</Text>
        <TextInput style={styles.searchInput}
          placeholder="Seach a Coin"
          placeholderTextColor="#434343"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>
      <FlatList 
        style={styles.list}
        data={coins.filter((coin) => 
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )}
        renderItem={({item}) => {
          return <CoinItem coin={item}/>
        }}
        showsVerticalScrollIndicator = {false}
        refreshing={refreshing}
        onRefresh={async ()=>{
          setRefreshing(true) 
          await loadData(); 
          setRefreshing(false);
        }}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'white',
    marginTop: 20,
    fontSize: 20,
  },
  list: {
    width: '90%'
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10
  },
  searchInput: {
    color: '#fff',
    borderBottomColor: '#FF0000',
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'center',
  },
  containerSaldo: {
    backgroundColor: '#0F0F0F',
    width: '90%',
    height: '40%',
    padding: 12,
    borderTopColor: '#FF0000',
    borderTopWidth: 3,
    
    
  },
  saldo:{
    height: '70%',
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  total: {
    alignItems: 'center',
    flexDirection: 'columns',
  },

})