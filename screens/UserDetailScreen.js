import React, { useEffect, useState } from 'react';
import { ScrollView, Button, View, Alert, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../database/firebase';

const UserDetailScreen = (props) => {
  const initialState = { id: '', name: '', email: '', phone: '' };
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const getUserById = async (id) => {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser({ ...docSnap.data(), id: docSnap.id });
      setLoading(false);
    }
  };

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const updateUser = async () => {
    const userRef = doc(db, 'users', user.id);
    await updateDoc(userRef, { name: user.name, email: user.email, phone: user.phone });
    props.navigation.navigate('UsersList');
  };

  const deleteUser = async () => {
    const userRef = doc(db, 'users', props.route.params.userId);
    await deleteDoc(userRef);
    props.navigation.navigate('UsersList');
  };

  const confirmDelete = () => {
    Alert.alert('Remove User', 'Are you sure?', [
      { text: 'Yes', onPress: () => deleteUser() },
      { text: 'No' },
    ]);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name" value={user.name} onChangeText={(value) => handleTextChange(value, 'name')} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email" value={user.email} onChangeText={(value) => handleTextChange(value, 'email')} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone" value={user.phone} onChangeText={(value) => handleTextChange(value, 'phone')} />
      </View>
      <View style={styles.button}>
        <Button title="Update User" onPress={() => updateUser()} color="#19AC52" />
      </View>
      <View style={styles.button}>
        <Button title="Delete User" onPress={() => confirmDelete()} color="#E37399" />
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
    marginBottom: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserDetailScreen;
