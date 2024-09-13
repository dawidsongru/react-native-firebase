import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import UsersList from './screens/UsersList';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#621FF7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="UsersList" component={UsersList} options={{ title: 'Users List' }} />
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{ title: 'Create a New User' }} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{ title: 'User Detail' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
