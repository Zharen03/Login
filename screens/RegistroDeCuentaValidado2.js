import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistroDeCuentaValidado2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroDeCuentaValidadoView}>
      <Text style={[styles.perfilText, styles.ml135]}>Perfil</Text>
      <Image
        style={[styles.usuario1Icon, styles.mt_26]}
        resizeMode="cover"
        source={require("../assets/usuario-1.png")}
      />
      <Image
        style={[styles.elipse1Icon, styles.mt48, styles.ml67]}
        resizeMode="cover"
        source={require("../assets/elipse-1.png")}
      />
      <Image
        style={[styles.trazado1Icon, styles.mt_158, styles.ml132]}
        resizeMode="cover"
        source={require("../assets/trazado-1.png")}
      />
      <Pressable
        style={[styles.trazado2Pressable, styles.mt_5, styles.ml203]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado4")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/trazado-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.lapizPressable, styles.mt_32, styles.ml213]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado4")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/lapiz.png")}
        />
      </Pressable>
      <Text style={[styles.abRiGuText, styles.mt52, styles.ml54]}>AbRiGu</Text>
      <Image
        style={[styles.usuarioIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/usuario4.png")}
      />
      <View style={[styles.lnea19View, styles.mt10]} />
      <Text style={[styles.abrilRiveraText, styles.mt22, styles.ml54]}>
        Abril Rivera
      </Text>
      <Image
        style={[styles.usuarioIcon1, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/usuario4.png")}
      />
      <View style={[styles.lnea18View, styles.mt10]} />
      <Text style={[styles.abrilr1248gmailcomText, styles.mt21, styles.ml54]}>
        abrilr1248@gmail.com
      </Text>
      <Image
        style={[styles.cartaIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/carta2.png")}
      />
      <View style={[styles.lnea16View, styles.mt10]} />
      <Text style={[styles.text, styles.mt21, styles.ml54]}>01/09/2000</Text>
      <Image
        style={[styles.fechaDeNacimientoIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/fechadenacimiento2.png")}
      />
      <View style={[styles.lnea20View, styles.mt10]} />
      <Pressable
        style={[styles.pressable, styles.ml57]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado3")}
      >
        <Text style={styles.text1}>……..</Text>
      </Pressable>
      <Pressable
        style={[styles.cerraduraPressable, styles.mt_25, styles.ml26]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado3")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/cerradura.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.lnea17Pressable, styles.mt8]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado3")}
      />
      <Text style={[styles.contraseaNuevaText, styles.mt21, styles.ml54]}>
        Contraseña nueva
      </Text>
      <Image
        style={[styles.cerraduraIcon, styles.mt_15, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/cerradura7.png")}
      />
      <View style={[styles.lnea23View, styles.mt8]} />
      <Text style={[styles.confirmarContraseaText, styles.mt21, styles.ml54]}>
        Confirmar contraseña
      </Text>
      <Image
        style={[styles.cerraduraIcon1, styles.mt_15, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/cerradura7.png")}
      />
      <View style={[styles.lnea24View, styles.mt8]} />
      <Pressable
        style={[styles.rectngulo4Pressable, styles.mt54, styles.ml44]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado1")}
      />
      <Text style={[styles.guardarText, styles.mt_27, styles.ml135]}>
        Guardar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml135: {
    marginLeft: 135,
  },
  mt_26: {
    marginTop: -26,
  },
  mt48: {
    marginTop: 48,
  },
  ml67: {
    marginLeft: 67,
  },
  mt_158: {
    marginTop: -158,
  },
  ml132: {
    marginLeft: 132,
  },
  mt_5: {
    marginTop: -5,
  },
  ml203: {
    marginLeft: 203,
  },
  mt_32: {
    marginTop: -32,
  },
  ml213: {
    marginLeft: 213,
  },
  mt52: {
    marginTop: 52,
  },
  ml54: {
    marginLeft: 54,
  },
  mt_18: {
    marginTop: -18,
  },
  ml26: {
    marginLeft: 26,
  },
  mt10: {
    marginTop: 10,
  },
  mt22: {
    marginTop: 22,
  },
  mt21: {
    marginTop: 21,
  },
  ml57: {
    marginLeft: 57,
  },
  mt_25: {
    marginTop: -25,
  },
  mt8: {
    marginTop: 8,
  },
  mt_15: {
    marginTop: -15,
  },
  mt54: {
    marginTop: 54,
  },
  ml44: {
    marginLeft: 44,
  },
  mt_27: {
    marginTop: -27,
  },
  perfilText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  usuario1Icon: {
    position: "relative",
    borderRadius: 17,
    width: 26,
    height: 26,
  },
  elipse1Icon: {
    position: "relative",
    width: 189,
    height: 189,
    opacity: 0.3,
  },
  trazado1Icon: {
    position: "relative",
    width: 60,
    height: 126.5,
    opacity: 0.73,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  trazado2Pressable: {
    position: "relative",
    width: 41,
    height: 41,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  lapizPressable: {
    position: "relative",
    width: 23,
    height: 23,
  },
  abRiGuText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  usuarioIcon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  lnea19View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    alignSelf: "flex-end",
  },
  abrilRiveraText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  usuarioIcon1: {
    position: "relative",
    width: 17,
    height: 17,
  },
  lnea18View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    alignSelf: "flex-end",
  },
  abrilr1248gmailcomText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cartaIcon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  lnea16View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    alignSelf: "flex-end",
  },
  text: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  fechaDeNacimientoIcon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  lnea20View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    alignSelf: "flex-end",
  },
  text1: {
    fontSize: 40,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  pressable: {
    position: "relative",
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  cerraduraPressable: {
    position: "relative",
    width: 17,
    height: 17,
  },
  lnea17Pressable: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    alignSelf: "flex-end",
  },
  contraseaNuevaText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  cerraduraIcon: {
    position: "relative",
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  lnea23View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  confirmarContraseaText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  cerraduraIcon1: {
    position: "relative",
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  lnea24View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  rectngulo4Pressable: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 235,
    height: 38,
  },
  guardarText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "center",
  },
  registroDeCuentaValidadoView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 26,
    paddingTop: 28,
    paddingRight: 52,
    alignItems: "flex-start",
  },
});

export default RegistroDeCuentaValidado2;
