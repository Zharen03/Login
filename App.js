import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import * as React from "react";
import Inicio from "./screens/Inicio";
import InicioDeSesin from "./screens/InicioDeSesin";
import RegistroDeCuenta from "./screens/RegistroDeCuenta";
import Screen0 from './screens/Screen';
import Screen1 from './screens/Screen1';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="InicioDeSesin"
            component={InicioDeSesin}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="RegistroDeCuenta"
            component={RegistroDeCuenta}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Screen"
            component={Screen1}
            options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

export default App;
/*
export default function App() {
  
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(239, 234, 228, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
