import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistroDeCuentaValidado = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroDeCuentaValidadoView}>
      <Pressable
        style={[styles.rectngulo53Pressable, styles.mt8]}
        onPress={() => navigation.navigate("RegistroDeCuentaValidado2")}
      />
      <View style={[styles.grupo2View, styles.mt41]}>
        <Image
          style={styles.elipse1Icon}
          resizeMode="cover"
          source={require("../assets/elipse-1.png")}
        />
        <Image
          style={styles.trazado1Icon}
          resizeMode="cover"
          source={require("../assets/trazado-1.png")}
        />
        <Text style={styles.perfilText}>Perfil</Text>
        <Image
          style={styles.usuario1Icon}
          resizeMode="cover"
          source={require("../assets/usuario-1.png")}
        />
        <Image
          style={styles.trazado2Icon}
          resizeMode="cover"
          source={require("../assets/trazado-2.png")}
        />
        <View style={styles.rectngulo4View} />
        <Text style={styles.guardarText}>Guardar</Text>
        <Text style={styles.abrilrivera1246gmailcomText}>
          abrilrivera1246@gmail.com
        </Text>
        <Image
          style={styles.cerraduraIcon}
          resizeMode="cover"
          source={require("../assets/cerradura.png")}
        />
        <View style={styles.lnea16View} />
        <View style={styles.lnea17View} />
        <Text style={styles.abrilRiveraText}>Abril Rivera</Text>
        <View style={styles.lnea18View} />
        <Image
          style={styles.usuarioIcon}
          resizeMode="cover"
          source={require("../assets/usuario.png")}
        />
        <Text style={styles.text}>01/09/2000</Text>
        <View style={styles.lnea20View} />
        <Image
          style={styles.fechaDeNacimientoIcon}
          resizeMode="cover"
          source={require("../assets/fechadenacimiento.png")}
        />
        <Image
          style={styles.cartaIcon}
          resizeMode="cover"
          source={require("../assets/carta.png")}
        />
        <Text style={styles.abRiGuText}>AbRiGu</Text>
        <View style={styles.lnea19View} />
        <Image
          style={styles.usuarioIcon1}
          resizeMode="cover"
          source={require("../assets/usuario.png")}
        />
        <Image
          style={styles.cerraduraIcon1}
          resizeMode="cover"
          source={require("../assets/cerradura.png")}
        />
        <View style={styles.lnea23View} />
        <Text style={styles.contraseaNuevaText}>Contraseña nueva</Text>
        <Image
          style={styles.cerraduraIcon2}
          resizeMode="cover"
          source={require("../assets/cerradura.png")}
        />
        <View style={styles.lnea24View} />
        <Text style={styles.confirmarContraseaText}>Confirmar contraseña</Text>
        <Text style={styles.contraseaActualText}>ContraseñaActual</Text>
        <Image
          style={styles.lapizIcon}
          resizeMode="cover"
          source={require("../assets/lapiz.png")}
        />
      </View>
      <View style={[styles.rectngulo19View, styles.mt_98]} />
      <Text style={[styles.fotoDePerfil, styles.mt22]}>Foto de perfil</Text>
      <Image
        style={[styles.elipse14Icon, styles.mt253]}
        resizeMode="cover"
        source={require("../assets/elipse-14.png")}
      />
      <Image
        style={[styles.elipse16Icon, styles.mt_65]}
        resizeMode="cover"
        source={require("../assets/elipse-14.png")}
      />
      <Image
        style={[styles.elipse17Icon, styles.mt_65, styles.mb234]}
        resizeMode="cover"
        source={require("../assets/elipse-14.png")}
      />
      <Image
        style={[styles.eliminarIcon, styles.mt_47, styles.mb234]}
        resizeMode="cover"
        source={require("../assets/eliminar.png")}
      />
      <Image
        style={[styles.camaraIcon, styles.mt253]}
        resizeMode="cover"
        source={require("../assets/camara.png")}
      />
      <Image
        style={[styles.fotografiaIcon, styles.mt_29]}
        resizeMode="cover"
        source={require("../assets/fotografia.png")}
      />
      <Text style={[styles.cmaraText, styles.mt253]}>Cámara</Text>
      <Text style={[styles.galeraText, styles.mt_16, styles.mb1]}>Galería</Text>
      <Text style={[styles.eliminarText, styles.mt_16, styles.mb241]}>
        Eliminar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt41: {
    marginTop: 41,
  },
  mt_98: {
    marginTop: -98,
  },
  mt22: {
    marginTop: 22,
  },
  mt253: {
    marginTop: 253,
  },
  mt_65: {
    marginTop: -65,
  },
  mb234: {
    marginBottom: 234,
  },
  mt_47: {
    marginTop: -47,
  },
  mt_29: {
    marginTop: -29,
  },
  mt_16: {
    marginTop: -16,
  },
  mb1: {
    marginBottom: 1,
  },
  mb241: {
    marginBottom: 241,
  },
  rectngulo53Pressable: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 425,
    height: 819,
  },
  elipse1Icon: {
    position: "absolute",
    top: 74,
    right: 41,
    width: 189,
    height: 189,
    opacity: 0.3,
  },
  trazado1Icon: {
    position: "absolute",
    marginLeft: -17,
    top: 105.37,
    left: "50%",
    width: 60,
    height: 126.5,
    opacity: 0.73,
  },
  perfilText: {
    position: "absolute",
    marginLeft: -13.5,
    top: 0,
    left: "50%",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  usuario1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 17,
    width: 26,
    height: 26,
  },
  trazado2Icon: {
    position: "absolute",
    marginTop: -143.87,
    marginLeft: 54.5,
    top: "50%",
    left: "50%",
    width: 41,
    height: 41,
  },
  rectngulo4View: {
    position: "absolute",
    right: 18,
    bottom: 0,
    left: 44,
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    height: 38,
  },
  guardarText: {
    position: "absolute",
    marginLeft: -13.5,
    bottom: 11,
    left: "50%",
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "center",
  },
  abrilrivera1246gmailcomText: {
    position: "absolute",
    marginTop: 43.5,
    top: "50%",
    right: 38,
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  cerraduraIcon: {
    position: "absolute",
    marginTop: 147.5,
    top: "50%",
    left: 26,
    width: 17,
    height: 17,
  },
  lnea16View: {
    position: "absolute",
    marginTop: 71.5,
    top: "50%",
    right: 0,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
  },
  lnea17View: {
    position: "absolute",
    marginTop: 172.5,
    top: "50%",
    right: 0,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  abrilRiveraText: {
    position: "absolute",
    marginTop: -7.5,
    marginLeft: -94.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  lnea18View: {
    position: "absolute",
    marginTop: 20.5,
    top: "50%",
    right: 0,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
  },
  usuarioIcon: {
    position: "absolute",
    marginTop: -6.5,
    top: "50%",
    left: 26,
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  text: {
    position: "absolute",
    marginTop: 94.5,
    marginLeft: -94.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  lnea20View: {
    position: "absolute",
    marginTop: 122.5,
    top: "50%",
    right: 0,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
  },
  fechaDeNacimientoIcon: {
    position: "absolute",
    marginTop: 95.5,
    top: "50%",
    left: 26,
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  cartaIcon: {
    position: "absolute",
    marginTop: 44.5,
    top: "50%",
    left: 26,
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  abRiGuText: {
    position: "absolute",
    marginTop: -59.5,
    marginLeft: -94.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
  },
  lnea19View: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
    opacity: 0.5,
  },
  usuarioIcon1: {
    position: "absolute",
    marginTop: -58.5,
    top: "50%",
    left: 26,
    width: 17,
    height: 17,
    opacity: 0.5,
  },
  cerraduraIcon1: {
    position: "absolute",
    marginTop: 199.5,
    top: "50%",
    left: 26,
    width: 17,
    height: 17,
  },
  lnea23View: {
    position: "absolute",
    right: 0,
    bottom: 144,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  contraseaNuevaText: {
    position: "absolute",
    marginTop: 195.5,
    marginLeft: -94.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cerraduraIcon2: {
    position: "absolute",
    bottom: 102,
    left: 26,
    width: 17,
    height: 17,
  },
  lnea24View: {
    position: "absolute",
    right: 0,
    bottom: 92,
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  confirmarContraseaText: {
    position: "absolute",
    marginLeft: -94.5,
    bottom: 104,
    left: "50%",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  contraseaActualText: {
    position: "absolute",
    marginTop: 143.5,
    marginLeft: -94.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  lapizIcon: {
    position: "absolute",
    marginTop: -134.5,
    marginLeft: 64.5,
    top: "50%",
    left: "50%",
    width: 23,
    height: 23,
  },
  grupo2View: {
    position: "relative",
    width: 297,
    height: 741,
  },
  rectngulo19View: {
    position: "relative",
    borderRadius: 43,
    backgroundColor: "#ebdfd2",
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 375,
    height: 196,
  },
  fotoDePerfil: {
    position: "relative",
    fontSize: 20,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  elipse14Icon: {
    position: "relative",
    width: 65,
    height: 65,
  },
  elipse16Icon: {
    position: "relative",
    width: 65,
    height: 65,
  },
  elipse17Icon: {
    position: "relative",
    width: 65,
    height: 65,
  },
  eliminarIcon: {
    position: "relative",
    width: 29,
    height: 29,
  },
  camaraIcon: {
    position: "relative",
    width: 29,
    height: 29,
  },
  fotografiaIcon: {
    position: "relative",
    width: 29,
    height: 29,
  },
  cmaraText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  galeraText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  eliminarText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  registroDeCuentaValidadoView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default RegistroDeCuentaValidado;
