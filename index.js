// Import a Library to help create a Component
import React from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => (
    <View style={styles.container}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  });


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
