import { Image, View, StyleSheet } from "react-native";

const Header = () => {
  const logo = require("../assets/Images/deerlogo.png");
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logoStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
  },
  logoStyles: {
    flex: 1,
    resizeMode: "center",
  },
});

export default Header;
