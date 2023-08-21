import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const deer = require("./assets/Images/deer.jpg");
  setStatusBarBackgroundColor("#3361ff", false);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Alkatra-Bold": require("./assets/fonts/Alkatra-Bold.ttf"),
    "Alkatra-Regular": require("./assets/fonts/Alkatra-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.imageView}>
        <Image source={deer} style={styles.imageStyles} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WildLife Co.</Text>
        <Text style={styles.slogan}>To protect is to conserve...</Text>
      </View>
      <StatusBar style="light" translucent={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    flex: 5,
  },
  imageStyles: {
    flex: 1,
    ...Platform.select({
      android: {
        resizeMode: "contain",
      },
      ios: {
        resizeMode: "contain",
      },
      default: {
        resizeMode: "cover",
      },
    }),
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Alkatra-Bold",
    paddingBottom: 0,
  },
  slogan: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    paddingTop: 0,
    marginTop: 0,
  },
});
export default App;
