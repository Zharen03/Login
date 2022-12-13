import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistroDeCuentaValidado4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroDeCuentaValidadoView}>
      <Pressable
        style={styles.usuario1Pressable}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/usuario-1.png")}
        />
      </Pressable>
      <Text style={[styles.ingresaTusDatos, styles.mt_26, styles.ml72]}>
        Ingresa tus datos
      </Text>
      <Image
        style={[styles.elipse1Icon, styles.mt43, styles.ml67]}
        resizeMode="cover"
        source={require("../assets/elipse-1.png")}
      />
      <Image
        style={[styles.trazado1Icon, styles.mt_158, styles.ml132]}
        resizeMode="cover"
        source={require("../assets/trazado-1.png")}
      />
      <Image
        style={[styles.trazado2Icon, styles.mt_18, styles.ml207]}
        resizeMode="cover"
        source={require("../assets/trazado-2.png")}
      />
      <View style={[styles.rectngulo42View, styles.mt_32, styles.ml225]} />
      <View style={[styles.rectngulo43View, styles.mt_15, styles.ml216]} />
      <Text style={[styles.abrilRiveraText, styles.mt111, styles.ml54]}>
        Abril Rivera
      </Text>
      <Image
        style={[styles.usuarioIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/usuario.png")}
      />
      <View style={[styles.lnea18View, styles.mt10]} />
      <Text style={[styles.abrilr1248gmailcomText, styles.mt21, styles.ml54]}>
        abrilr1248@gmail.com
      </Text>
      <Image
        style={[styles.cartaIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/carta.png")}
      />
      <Text style={[styles.text, styles.mt9, styles.ml57]}>……..</Text>
      <View style={[styles.lnea16View, styles.mt_47]} />
      <Image
        style={[styles.cerraduraIcon, styles.mt22, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/cerradura.png")}
      />
      <Image
        style={[styles.usuario2Icon, styles.mt_17, styles.ml268]}
        resizeMode="cover"
        source={require("../assets/usuario-2.png")}
      />
      <View style={[styles.lnea17View, styles.mt8]} />
      <Text style={[styles.abRiGuText, styles.mt21, styles.ml54]}>AbRiGu</Text>
      <Image
        style={[styles.usuarioIcon1, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/usuario.png")}
      />
      <View style={[styles.lnea19View, styles.mt10]} />
      <Text style={[styles.text1, styles.mt21, styles.ml54]}>01/09/2000</Text>
      <Image
        style={[styles.fechaDeNacimientoIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/fechadenacimiento.png")}
      />
      <View style={[styles.lnea20View, styles.mt10]} />
      <View style={[styles.rectngulo3View, styles.mt65, styles.ml36]} />
      <Text
        style={[styles.aceptoTrminosYCondiciones, styles.mt_19, styles.ml64]}
      >
        Acepto términos y condiciones
      </Text>
      <View style={[styles.grupo1View, styles.mt_15, styles.ml41]}>
        <View style={styles.rectngulo44View} />
        <Image
          style={styles.trazado47Icon}
          resizeMode="cover"
          source={require("../assets/trazado-47.png")}
        />
      </View>
      <View style={[styles.lnea27View, styles.mt3, styles.ml63]} />
      <Pressable
        style={[styles.rectngulo4Pressable, styles.mt52, styles.ml44]}
        onPress={() => navigation.navigate("Screen8")}
      />
      <Text style={[styles.iniciarText, styles.mt_31, styles.ml145]}>
        Iniciar
      </Text>
      <Text style={[styles.crearCuentaText, styles.mt_20, styles.ml119]}>
        Crear cuenta
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_26: {
    marginTop: -26,
  },
  ml72: {
    marginLeft: 72,
  },
  mt43: {
    marginTop: 43,
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
  mt_18: {
    marginTop: -18,
  },
  ml207: {
    marginLeft: 207,
  },
  mt_32: {
    marginTop: -32,
  },
  ml225: {
    marginLeft: 225,
  },
  mt_15: {
    marginTop: -15,
  },
  ml216: {
    marginLeft: 216,
  },
  mt111: {
    marginTop: 111,
  },
  ml54: {
    marginLeft: 54,
  },
  ml26: {
    marginLeft: 26,
  },
  mt10: {
    marginTop: 10,
  },
  mt21: {
    marginTop: 21,
  },
  mt9: {
    marginTop: 9,
  },
  ml57: {
    marginLeft: 57,
  },
  mt_47: {
    marginTop: -47,
  },
  mt22: {
    marginTop: 22,
  },
  mt_17: {
    marginTop: -17,
  },
  ml268: {
    marginLeft: 268,
  },
  mt8: {
    marginTop: 8,
  },
  mt65: {
    marginTop: 65,
  },
  ml36: {
    marginLeft: 36,
  },
  mt_19: {
    marginTop: -19,
  },
  ml64: {
    marginLeft: 64,
  },
  ml41: {
    marginLeft: 41,
  },
  mt3: {
    marginTop: 3,
  },
  ml63: {
    marginLeft: 63,
  },
  mt52: {
    marginTop: 52,
  },
  ml44: {
    marginLeft: 44,
  },
  mt_31: {
    marginTop: -31,
  },
  ml145: {
    marginLeft: 145,
  },
  mt_20: {
    marginTop: -20,
  },
  ml119: {
    marginLeft: 119,
  },
  icon: {
    borderRadius: 17,
    width: "100%",
    height: "100%",
  },
  usuario1Pressable: {
    position: "relative",
    width: 26,
    height: 26,
  },
  ingresaTusDatos: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
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
  trazado2Icon: {
    position: "relative",
    width: 41,
    height: 41,
  },
  rectngulo42View: {
    position: "relative",
    borderRadius: 3,
    backgroundColor: "#efeae4",
    width: 5,
    height: 24,
  },
  rectngulo43View: {
    position: "relative",
    borderRadius: 3,
    backgroundColor: "#efeae4",
    width: 24,
    height: 5,
  },
  abrilRiveraText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  usuarioIcon: {
    position: "relative",
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  lnea18View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  abrilr1248gmailcomText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  cartaIcon: {
    position: "relative",
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  text: {
    position: "relative",
    fontSize: 40,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  lnea16View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  cerraduraIcon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  usuario2Icon: {
    position: "relative",
    width: 17,
    height: 17,
  },
  lnea17View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    alignSelf: "flex-end",
  },
  abRiGuText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  usuarioIcon1: {
    position: "relative",
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  lnea19View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  text1: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  fechaDeNacimientoIcon: {
    position: "relative",
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  lnea20View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  rectngulo3View: {
    position: "relative",
    borderRadius: 11,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderWidth: 2,
    width: 22,
    height: 21,
  },
  aceptoTrminosYCondiciones: {
    position: "relative",
    fontSize: 15,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  rectngulo44View: {
    position: "absolute",
    bottom: 0.02,
    left: 1.97,
    borderRadius: 3,
    backgroundColor: "#f85d5a",
    width: 1.95,
    height: 6.74,
    transform: [
      {
        rotate: "319deg",
      },
    ],
  },
  trazado47Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 3.4,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  grupo1View: {
    position: "relative",
    width: 12.94,
    height: 11.77,
  },
  lnea27View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 220,
    height: 2,
  },
  rectngulo4Pressable: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 235,
    height: 38,
  },
  iniciarText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#e8e8e8",
    textAlign: "left",
  },
  crearCuentaText: {
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

export default RegistroDeCuentaValidado4;
