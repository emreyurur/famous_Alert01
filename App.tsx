import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';

// Define the types for your navigation stack
type RootStackParamList = {
  WelcomeScreen: undefined; // Add other screens here as needed
};

// This line creates a stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" getComponent={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
