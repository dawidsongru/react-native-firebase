import React, { useState, useEffect } from 'react';
import { ScrollView, Button, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db } from '../database/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersList = [];
      snapshot.forEach((doc) => {
        const { name, email, phone } = doc.data();
        usersList.push({ id: doc.id, name, email, phone });
      });
      setUsers(usersList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate('CreateUserScreen')}
      />
      {users.map((user) => (
        <ListItem
          key={user.id}
          bottomDivider
          onPress={() => props.navigation.navigate('UserDetailScreen', { userId: user.id })}
        >
          <Avatar
            source={{
              uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default UsersList;
