import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const About = () => {
  <>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.345,
          longitude: 2.72892,
          latitudeDelta: 0.983,
          longitudeDelta: -3.89,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <View style={styles.textContainer}>
          <Text style={styles.heading}>To protect is to conserve...</Text>
          <Text style={styles.content}>
            Welcome to WildLife co. animal sanctuary
          </Text>
          <Text style={styles.address}>
            Faculty of Engineering,Unilag ,Akoka, Lagos State.
          </Text>
          <Text
            style={styles.back}
            onPress={() => {
              router.replace("/");
            }}
          >
            GO HOME
          </Text>
        </View>
      </MapView>
    </View>
  </>;
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 8,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 5,
    paddingTop: 10,
  },
  heading: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    paddingLeft: 4,
  },
  content: {
    paddingTop: 8,
    paddingLeft: 3,
    fontFamily: "Roboto-Regular",
  },
  address: {
    paddingTop: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
  },
  back: {
    paddingTop: 80,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
  },
});
export default About;
