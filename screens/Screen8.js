import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={[styles.whatsAppImage20220630At1, styles.mb1]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20220630-at-100422-pm.png")}
      />
      <Pressable
        style={[styles.rectngulo36Pressable, styles.mt_750]}
        onPress={() => navigation.navigate("Screen1")}
      />
      <Image
        style={[styles.buscarIcon, styles.mt881]}
        resizeMode="cover"
        source={require("../assets/buscar.png")}
      />
      <Text style={[styles.aDndeQuiereIr, styles.mt687]}>
        ¿A dónde quiere ir?
      </Text>
      <Pressable
        style={[styles.rectngulo46Pressable, styles.mt626]}
        onPress={() => navigation.navigate("Screen3")}
      />
      <Text style={[styles.misVisitasText, styles.mt_36, styles.mb1]}>
        Mis Visitas
      </Text>
      <View style={[styles.rectngulo11View, styles.mt31]} />
      <Pressable
        style={[styles.trazado44Pressable, styles.mt_80, styles.mb260]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/trazado-441.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.calendarioPressable, styles.mt_32, styles.mb139]}
        onPress={() => navigation.navigate("Screen5")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/calendario.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.corazonDescansoPressable, styles.mt_29, styles.mb1]}
        onPress={() => navigation.navigate("Screen6")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/corazon-descanso.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.localizacion1Pressable, styles.mt763]}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/localizacion-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeRojoIcon, styles.mt901]}
        resizeMode="cover"
        source={require("../assets/home-rojo.png")}
      />
      <View style={[styles.rectngulo51View, styles.mt_10]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mb1: {
    marginBottom: 1,
  },
  mt_750: {
    marginTop: -750,
  },
  mt881: {
    marginTop: 881,
  },
  mt687: {
    marginTop: 687,
  },
  mt626: {
    marginTop: 626,
  },
  mt_36: {
    marginTop: -36,
  },
  mt31: {
    marginTop: 31,
  },
  mt_80: {
    marginTop: -80,
  },
  mb260: {
    marginBottom: 260,
  },
  mt_32: {
    marginTop: -32,
  },
  mb139: {
    marginBottom: 139,
  },
  mt_29: {
    marginTop: -29,
  },
  mt763: {
    marginTop: 763,
  },
  mt901: {
    marginTop: 901,
  },
  mt_10: {
    marginTop: -10,
  },
  whatsAppImage20220630At1: {
    position: "relative",
    width: 430.26,
    height: 773,
  },
  rectngulo36Pressable: {
    position: "relative",
    borderRadius: 23,
    backgroundColor: "#ece3d9",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 307,
    height: 40,
  },
  buscarIcon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  aDndeQuiereIr: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  rectngulo46Pressable: {
    position: "relative",
    borderRadius: 25,
    backgroundColor: "#ece3d9",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 193,
    height: 49,
  },
  misVisitasText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  rectngulo11View: {
    position: "relative",
    borderRadius: 35,
    backgroundColor: "#ebdfd2",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 375,
    height: 98,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  trazado44Pressable: {
    position: "relative",
    width: 15.5,
    height: 32.79,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  calendarioPressable: {
    position: "relative",
    width: 30,
    height: 30,
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  corazonDescansoPressable: {
    position: "relative",
    width: 30,
    height: 30,
  },
  icon3: {
    width: "100%",
    height: "100%",
  },
  localizacion1Pressable: {
    position: "relative",
    width: 30,
    height: 30,
  },
  homeRojoIcon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  rectngulo51View: {
    position: "relative",
    backgroundColor: "#ebdfd2",
    width: 375,
    height: 35,
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Screen8;
