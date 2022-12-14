import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inicioView}>
      <Image
        style={styles.lOGOSIARIVER2Icon}
        resizeMode="cover"
        source={require("../assets/logosiariver2.png")}
      />
      <Text style={[styles.sIARIText, styles.mt19_38, styles.mb1]}>SIARI</Text>
      <Text style={[styles.holaText, styles.mt19_38, styles.mb1]}>¡Hola!</Text>
      <Text
        style={[
          styles.estamosListosParaLlevarte,
          styles.mt11_379999999999999,
          styles.mb1,
        ]}
      >
        <Text
          style={styles.estamosListosPara}
        >{`Estamos listos para llevarte `}</Text>
        <Text style={styles.porCajemeText}>por Cajeme.</Text>
      </Text>
      <Pressable
        style={[styles.rectngulo4Pressable, styles.mt62_379999999999995]}
        onPress={() => navigation.navigate("RegistroDeCuenta")}
      />
      <Pressable
        style={[styles.crearUnaCuenta1, styles.mt_27_62, styles.mb1]}
        onPress={() => navigation.navigate("RegistroDeCuenta")}
      >
        <Text style={styles.crearUnaCuenta}>Crear una cuenta</Text>
      </Pressable>
      <Pressable
        style={[styles.rectngulo5Pressable, styles.mt22_38]}
        onPress={() => navigation.navigate("InicioDeSesin")}
      />
      <Pressable
        style={[styles.yaTengoUnaCuenta1, styles.mt_27_62, styles.mb1]}
        onPress={() => navigation.navigate("InicioDeSesin")}
      >
        <Text style={styles.yaTengoUnaCuenta}>Ya tengo una cuenta</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt19_38: {
    marginTop: "10%",
  },
  mb1: {
    marginBottom: 1,
  },
  mt11_379999999999999: {
    marginTop: "7%",
  },
  mt62_379999999999995: {
    marginTop: "18%",
  },
  mt_27_62: {
    marginTop: "-9.5%",
  },
  mt22_38: {
    marginTop: "9%",
  },
  lOGOSIARIVER2Icon: {
    position: "relative",
    width: "46%",
    height: "35%",
    marginTop:"10%"
  },
  sIARIText: {
    position: "relative",
    fontSize: 55,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  holaText: {
    position: "relative",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.5,
  },
  estamosListosPara: {
    margin: 0,
  },
  porCajemeText: {
    margin: 0,
  },
  estamosListosParaLlevarte: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.5,
  },
  rectngulo4Pressable: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 235,
    height: 38,
  },
  crearUnaCuenta: {
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "center",
  },
  crearUnaCuenta1: {
    position: "relative",
  },
  rectngulo5Pressable: {
    position: "relative",
    borderRadius: 19,
    borderStyle: "solid",
    borderColor: "#f85d5a",
    borderWidth: 1,
    width: 235,
    height: 38,
    opacity: 0.5,
  },
  yaTengoUnaCuenta: {
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  yaTengoUnaCuenta1: {
    position: "relative",
  },
  inicioView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: "14%",
    paddingTop: "12%",
    paddingRight: "14%",
    alignItems: "center",
  },
});

export default Inicio;
