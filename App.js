import React from 'react';
import { StyleSheet, View } from 'react-native';
import AgendaList from './components/AgendaList';
import Saldo from './components/Saldo';
import Fichada from './components/Fichada';
import NoticiasList from './components/NoticiaList';
import Header from './components/Header'

export default function App() {

  return (
    <View style={styles.screen}>
      <Header>Mi UNQ</Header>
      <View style={styles.container}>
        <View style={styles.widgets}>
          <Saldo></Saldo>
          <Fichada></Fichada>
        </View>
        <View style={styles.noticias}>
          <NoticiasList></NoticiasList>
        </View>
        <View style={styles.noticias}>
          <AgendaList></AgendaList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%'
  },  
  container: {
    flex: 1,
    backgroundColor: '#f3f3f4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    alignItems: 'stretch'
  },
  noticias: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%',
    padding: 10
  },
  widgets: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
