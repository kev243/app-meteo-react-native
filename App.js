// import {  Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast/Forecast";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoader] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  return isFontLoader ? (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          animation: "fade",
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Forecast" component={Forecast} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}
