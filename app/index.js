import { StyleSheet, Text, View, Image, Platform } from "react-native";

const Home = () => {
  const deer = require("../assets/Images/deer.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={deer} style={styles.imageStyles} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.slogan}>To protect is to conserve...</Text>
      </View>
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
  slogan: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    paddingTop: 0,
    marginTop: 0,
  },
});
export default Home;
