import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import WelcomeScreen from "./src/screens/WelcomeScreen";

const App=()=>{
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;