import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class AddReunion extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        
        <TextInput
          placeholder='Intitulé de la réunion'
          style={styles.simpleInput} />

        <TextInput
          placeholder='Heure de la Réunion'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Organisateur de la réunion'
          style={styles.simpleInput}
          />
        <TextInput
          placeholder='Ajouter des participants'
          style={styles.simpleInput}
          />
       
        <TouchableOpacity
            style={styles.buttonSave}>
          <Text style={styles.buttonText}>Enregistrer la Réunion</Text>
        </TouchableOpacity>


        <StatusBar style="auto" />
      </View>
    );
      }
}

const styles = StyleSheet.create({

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#FF80AB', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#FF80AB',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
