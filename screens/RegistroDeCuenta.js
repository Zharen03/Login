import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistroDeCuenta = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroDeCuentaView}>
      <Text style={[styles.ingresaTusDatos, styles.ml72]}>
        Ingresa tus datos
      </Text>
      <Pressable
        style={[styles.usuario1Pressable, styles.mt_26]}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/usuario-1.png")}
        />
      </Pressable>
      <View style={styles.fotoP} >
        <Image 
          style={[styles.elipse1Icon, styles.mt43, styles.ml67]}
          resizeMode="cover"
          source={require("../assets/elipse-1.png")}
        />
        <Image
          style={[styles.trazado1Icon, styles.mt_158, styles.ml132]}
          resizeMode="cover"
          source={require("../assets/trazado-16.png")}
        />
        <Image
          style={[styles.trazado2Icon, styles.mt_18, styles.ml207]}
          resizeMode="cover"
          source={require("../assets/trazado-2.png")}

        />
        <View style={[styles.rectngulo42View, styles.mt_32, styles.ml225]} />
        <View style={[styles.rectngulo43View, styles.mt_15, styles.ml216]} />
      </View>
      
      <TextInput style={[styles.nombreText, styles.mt111, styles.ml54]} placeholder='Nombre'></TextInput>
      <Image
        style={[styles.usuarioIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/usuario.png")}
      />
      <View style={[styles.lnea18View, styles.mt10]} />
      <TextInput style={[styles.emailText, styles.mt21, styles.ml54]} placeholder='Email'></TextInput>
      <Image
        style={[styles.cartaIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/carta.png")}
      />
      <View style={[styles.lnea16View, styles.mt10]} />
      <TextInput style={[styles.contraseaText, styles.mt21, styles.ml54]} placeholder='Contraseña'>
        
      </TextInput>
      <Image
        style={[styles.cerraduraIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/cerradura7.png")}
      />
      <View style={[styles.lnea17View, styles.mt8]} />
      <TextInput style={[styles.usuarioText, styles.mt21, styles.ml54]} placeholder='Usuario'>
        
      </TextInput>
      <Image
        style={[styles.usuarioIcon1, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/usuario.png")}
      />
      <View style={[styles.lnea19View, styles.mt10]} />
      <TextInput style={[styles.fechaDeNacimiento, styles.mt21, styles.ml54]} placeholder='Fecha de nacimiento'>
        
      </TextInput>
      <Image
        style={[styles.fechaDeNacimientoIcon, styles.mt_18, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/fechadenacimiento.png")}
      />
      <View style={[styles.lnea20View, styles.mt10]} />
      <Pressable
        style={[styles.rectngulo3Pressable, styles.mt65, styles.ml36]}
        onPress={() => navigation.navigate("Inicio")}
      />
      <Text
        style={[styles.aceptoTrminosYCondiciones, styles.mt_19, styles.ml64]}
      >
        Acepto términos y condiciones
      </Text>
      <View style={[styles.lnea27View, styles.ml67]} />
      <View style={[styles.rectngulo4View, styles.mt52, styles.ml44]}>
        <Text style={[styles.crearCuentaText, styles.mt_20, styles.ml119]}>
          Crear cuenta
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fotoP: {
    marginLeft:"11%"
  },
  ml72: {
    marginLeft: 72,
  },
  mt_26: {
    marginTop: -26,
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
  mt52: {
    marginTop: 52,
  },
  ml44: {
    marginLeft: "22%",
  },
  mt_31: {
    marginTop: -31,
  },
  ml145: {
    marginLeft: 145,
  },
  mt_20: {
    marginTop: "1%",
  },
  ml119: {
    marginLeft: 0,
  },
  ingresaTusDatos: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  icon: {
    borderRadius: 17,
    width: "100%",
    height: "100%",
    marginLeft:"7%"
  },
  usuario1Pressable: {
    position: "relative",
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
  nombreText: {
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
    width: "85%",
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  emailText: {
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
  lnea16View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: "85%",
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  contraseaText: {
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
  lnea17View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: "85%",
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  usuarioText: {
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
    width: "85%",
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  fechaDeNacimiento: {
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
    width: "85%",
    height: 2,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  rectngulo3Pressable: {
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
  lnea27View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: "57%",
    height: 2,
  },
  rectngulo4View: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: "70%",
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
    fontSize: 18,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "center",
  },
  registroDeCuentaView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: "8%",
    paddingTop: "12%",
    paddingRight: "15%",
    alignItems: "flex-start",
  },
});

export default RegistroDeCuenta;
