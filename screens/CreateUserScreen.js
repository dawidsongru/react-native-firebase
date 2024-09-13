import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { db } from '../database/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateUserScreen = (props) => {
  const initialState = { name: '', email: '', phone: '' };
  const [state, setState] = useState(initialState);

  const handleChangeText = (value, field) => {
    setState({ ...state, [field]: value });
  };

  const saveNewUser = async () => {
    if (state.name === '') {
      alert('Please provide a name');
    } else {
      try {
        await addDoc(collection(db, 'users'), {
          name: state.name,
          email: state.email,
          phone: state.phone,
        });
        props.navigation.navigate('UsersList');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name" onChangeText={(value) => handleChangeText(value, 'name')} value={state.name} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email" onChangeText={(value) => handleChangeText(value, 'email')} value={state.email} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone" onChangeText={(value) => handleChangeText(value, 'phone')} value={state.phone} />
      </View>
      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  button: {
    marginTop: 20,
  },
});

export default CreateUserScreen;
