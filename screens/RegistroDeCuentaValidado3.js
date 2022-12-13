import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistroDeCuentaValidado3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroDeCuentaValidadoView}>
      <Text style={[styles.perfilText, styles.mb1]}>Perfil</Text>
      <Image
        style={[styles.elipse1Icon, styles.mt48]}
        resizeMode="cover"
        source={require("../assets/elipse-1.png")}
      />
      <Image
        style={[styles.trazado1Icon, styles.mt_158]}
        resizeMode="cover"
        source={require("../assets/trazado-1.png")}
      />
      <Text style={[styles.abRiGuText, styles.mt207]}>AbRiGu</Text>
      <Image
        style={[styles.usuarioIcon, styles.mt302]}
        resizeMode="cover"
        source={require("../assets/usuario4.png")}
      />
      <View style={[styles.lnea19View, styles.mt10, styles.mb27]} />
      <Text style={[styles.abrilRiveraText, styles.mt177]}>Abril Rivera</Text>
      <Image
        style={[styles.usuarioIcon1, styles.mt302]}
        resizeMode="cover"
        source={require("../assets/usuario4.png")}
      />
      <View style={[styles.lnea18View, styles.mt10, styles.mb27]} />
      <Text style={[styles.abrilr1248hmailcomText, styles.mt95]}>
        abrilr1248@hmail.com
      </Text>
      <Image
        style={[styles.cartaIcon, styles.mt302]}
        resizeMode="cover"
        source={require("../assets/carta2.png")}
      />
      <View style={[styles.lnea16View, styles.mt10, styles.mb27]} />
      <Text style={[styles.text, styles.mt174]}>01/09/2000</Text>
      <Image
        style={[styles.fechaDeNacimientoIcon, styles.mt302]}
        resizeMode="cover"
        source={require("../assets/fechadenacimiento2.png")}
      />
      <View style={[styles.lnea20View, styles.mt10, styles.mb27]} />
      <Text style={[styles.text1, styles.mt169]}>……..</Text>
      <Image
        style={[styles.cerraduraIcon, styles.mt302]}
        resizeMode="cover"
        source={require("../assets/cerradura.png")}
      />
      <View style={[styles.lnea17View, styles.mt8, styles.mb27]} />
      <Pressable
        style={[styles.rectngulo5Pressable, styles.mt25, styles.mb185]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado2")}
      />
      <Pressable
        style={[styles.editarPressable, styles.mt_22, styles.mb187]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado2")}
      >
        <Text style={styles.editarText}>Editar</Text>
      </Pressable>
      <Text style={[styles.iniciarText, styles.mt10, styles.mb27]}>
        Iniciar
      </Text>
      <View style={[styles.rectngulo4View, styles.mt23]} />
      <Text style={[styles.cerrarSesinText, styles.mt_27, styles.mb1]}>
        Cerrar sesión
      </Text>
      <View style={[styles.rectngulo11View, styles.mt40]} />
      <Image
        style={[styles.calendarioIcon, styles.mt_78, styles.mb147]}
        resizeMode="cover"
        source={require("../assets/calendario.png")}
      />
      <Image
        style={[styles.trazado44Icon, styles.mt_30, styles.mb260]}
        resizeMode="cover"
        source={require("../assets/trazado-44.png")}
      />
      <Image
        style={[styles.corazonDescansoIcon, styles.mt_32, styles.mb9]}
        resizeMode="cover"
        source={require("../assets/corazon-descanso.png")}
      />
      <Image
        style={[styles.localizacion1Icon, styles.mt177]}
        resizeMode="cover"
        source={require("../assets/localizacion-1.png")}
      />
      <Image
        style={[styles.hogarDescansoIcon, styles.mt315]}
        resizeMode="cover"
        source={require("../assets/hogar-descanso.png")}
      />
      <View style={[styles.rectngulo51View, styles.mt_9]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mb1: {
    marginBottom: 1,
  },
  mt48: {
    marginTop: 48,
  },
  mt_158: {
    marginTop: -158,
  },
  mt207: {
    marginTop: 207,
  },
  mt302: {
    marginTop: 302,
  },
  mt10: {
    marginTop: 10,
  },
  mb27: {
    marginBottom: 27,
  },
  mt177: {
    marginTop: 177,
  },
  mt95: {
    marginTop: 95,
  },
  mt174: {
    marginTop: 174,
  },
  mt169: {
    marginTop: 169,
  },
  mt8: {
    marginTop: 8,
  },
  mt25: {
    marginTop: 25,
  },
  mb185: {
    marginBottom: 185,
  },
  mt_22: {
    marginTop: -22,
  },
  mb187: {
    marginBottom: 187,
  },
  mt23: {
    marginTop: 23,
  },
  mt_27: {
    marginTop: -27,
  },
  mt40: {
    marginTop: 40,
  },
  mt_78: {
    marginTop: -78,
  },
  mb147: {
    marginBottom: 147,
  },
  mt_30: {
    marginTop: -30,
  },
  mb260: {
    marginBottom: 260,
  },
  mt_32: {
    marginTop: -32,
  },
  mb9: {
    marginBottom: 9,
  },
  mt315: {
    marginTop: 315,
  },
  mt_9: {
    marginTop: -9,
  },
  perfilText: {
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
  },
  abrilr1248hmailcomText: {
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
  },
  text1: {
    position: "relative",
    fontSize: 40,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cerraduraIcon: {
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
  },
  rectngulo5Pressable: {
    position: "relative",
    borderRadius: 19,
    borderStyle: "solid",
    borderColor: "#f85d5a",
    borderWidth: 1,
    width: 86,
    height: 26,
    opacity: 0.5,
  },
  editarText: {
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  editarPressable: {
    position: "relative",
  },
  iniciarText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#e8e8e8",
    textAlign: "left",
  },
  rectngulo4View: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 235,
    height: 38,
  },
  cerrarSesinText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "center",
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
    height: 96,
  },
  calendarioIcon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  trazado44Icon: {
    position: "relative",
    width: 15.5,
    height: 32.79,
  },
  corazonDescansoIcon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  localizacion1Icon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  hogarDescansoIcon: {
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
  registroDeCuentaValidadoView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 28,
    alignItems: "center",
  },
});

export default RegistroDeCuentaValidado3;
