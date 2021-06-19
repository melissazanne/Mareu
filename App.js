import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListReunion from './ListReunion'
import AddReunion from './AddReunion';


const Stack = createStackNavigator();

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Liste de voisins">
          <Stack.Screen name="Liste des Réunions" component={ListReunion} />
          <Stack.Screen name="Add" component={AddReunion} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
});