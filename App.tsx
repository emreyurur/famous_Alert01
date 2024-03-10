import React from "react";
<<<<<<< HEAD
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TurkeyScreen from "./src/screens/TurkeyScreen";
import TurkeySporScreen from "./src/screens/TurkeyCategory/TurkeySporScreen";
import NFTScreen from "./src/screens/NFTScreen";
import Message from "./src/components/Message";

import { useWalletConnectModal } from "@walletconnect/modal-react-native";

const projectId = '0b316d97d419b21fa8f34dc0d1b3f4df'

const providerMetadata = {
  name: 'YOUR_PROJECT_NAME',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TurkeyScreen" component={TurkeyScreen} />
        <Stack.Screen name="TurkeySporScreen" component={TurkeySporScreen} />
        <Stack.Screen name="NFTScreen" component={NFTScreen}/>
        <Stack.Screen name="Message" component={Message}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
=======
import {Text,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();

import WelcomeScreen from "./src/screens/WelcomeScreen";

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
>>>>>>> e9296ad310be0f4aa50757fcc05c9c2c933cb971
