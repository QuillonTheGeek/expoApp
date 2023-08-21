import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.menu}>
        <Link href="/about" style={styles.link}>
          About
        </Link>
        <Link href="/about" style={styles.link}>
          Park
        </Link>
        <Link href="/about" style={styles.link}>
          News
        </Link>
        <Link href="/about" style={styles.link}>
          Contact
        </Link>
      </View>
      <View style={styles.copyRow}>
        <Text style={styles.copyright}>
          CopyRight @2023 WildLife co. by Quillion
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  copyRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  copyright: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
});

export default Footer;
