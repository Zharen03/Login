import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import http from "logins/http";




const InicioDeSesin = () => {
  const navigation = useNavigation();
  const [email, onChangeTextEmail] = React.useState("Email");
  const [pass, onChangeTextPass] = React.useState("Contraseña");
  const [number, onChangeNumber] = React.useState(null);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  
  

  return (
    <View style={styles.inicioDeSesinView}>
      <Image
        style={[styles.lOGOSIARIVER2Icon, styles.mt1]}
        resizeMode="cover"
        source={require("../assets/logosiariver2.png")}
      />
      <Text style={[styles.bienvenidoText, styles.mt13_72]}>¡Bienvenido!</Text>
      <Text
        style={[styles.estamosFelicesDeVerteDeNu, styles.mt6_720000000000001]}
      >
        Estamos felices de verte de nuevo
      </Text>
      
      <Image
        style={[styles.cartaIcon, styles.mt276_72]}
        resizeMode="cover"
        source={require("../assets/carta2.png")}
      />
      
      <SafeAreaView>
      <TextInput
          style={[styles.input, styles.emailText]}
          onChangeText={onChangeTextEmail}
          value={email}
          textAlign={'left'}
          maxLength={30}
          secureTextEntry={false}
        /></SafeAreaView>
      <View style={[styles.lnea16View, styles.mt9_72, styles.mb18]} />
      <Image
        style={[styles.cerraduraIcon, styles.mt276_72]}
        resizeMode="cover"
        source={require("../assets/cerradura.png")}
      />
      
      <SafeAreaView>
      <TextInput
          style={[styles.input, styles.contraseaText]}
          onChangeText={onChangeTextPass}
          value={pass}
          textAlign={'left'}
          maxLength={30}
          secureTextEntry={true}
      /></SafeAreaView>
      <View
        style={[styles.lnea17View, styles.mt7_720000000000001, styles.mb18]}
      />
      <Text
        style={[
          styles.olvidMiContrasea,
          styles.mt5_720000000000001,
          styles.mb143,
        ]}
      > Olvidé mi contraseña</Text>
      <Text style={[styles.oText, styles.mt59_72]}>O</Text>
      <View style={[styles.rectngulo41View, styles.mt14_72]} />
      <View style={[styles.lnea15View, styles.mt15_72]} />
      <View style={[styles.rectngulo38View, styles.mt14_72]} />
      <Image
        style={[styles.logotipoDeGoogleGlassIcon, styles.mt190_72]}
        resizeMode="cover"
        source={require("../assets/logotipodegoogleglass.png")}
      />
      <Text style={[styles.continuarConGoogle, styles.mt_22_28, styles.mb28]}>
        Continuar con Google
      </Text>
      <View style={[styles.rectngulo40View, styles.mt14_72]} />
      <Image
        style={[styles.logotipoDeAppleIcon, styles.mt190_72]}
        resizeMode="cover"
        source={require("../assets/logotipodeapple.png")}
      />
      <Text style={[styles.continuarConApple, styles.mt_20_28, styles.mb22]}>
        Continuar con Apple
      </Text>
      <Pressable
        style={[styles.rectngulo4Pressable, styles.mt14_72]}
        onPress={() => navigation.navigate("Inicio")}
      />
      <Text style={[styles.iniciarText, styles.mt_31_28, styles.mb26]}>
        Iniciar
      </Text>
      <Text style={[styles.iniciarText1, styles.mt_20_28]}>Iniciar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  /*mt1: {
    marginTop: 1,
  },
  mt13_72: {
    marginTop: 13.72,
  },
  mt6_720000000000001: {
    marginTop: 6.720000000000001,
  },
  mt197_72: {
    marginTop: 197.72,
  },
  mt276_72: {
    marginTop: 276.72,
  },
  mt9_72: {
    marginTop: 9.72,
  },
  mb18: {
    marginBottom: 18,
  },
  mt150_72: {
    marginTop: 150.72,
  },
  mt7_720000000000001: {
    marginTop: 7.720000000000001,
  },
  mt5_720000000000001: {
    marginTop: 5.720000000000001,
  },
  mb143: {
    marginBottom: 143,
  },
  mt59_72: {
    marginTop: 59.72,
  },
  mt14_72: {
    marginTop: 14.72,
  },
  mt15_72: {
    marginTop: 15.72,
  },
  mt190_72: {
    marginTop: 190.72,
  },
  mt_22_28: {
    marginTop: -22.28,
  },
  mb28: {
    marginBottom: 28,
  },
  mt_20_28: {
    marginTop: -20.28,
  },
  mb22: {
    marginBottom: 22,
  },
  mt_31_28: {
    marginTop: -31.28,
  },
  mb26: {
    marginBottom: 26,
  },*/
  lOGOSIARIVER2Icon: {
    position: "relative",
    width: 69.5,
    height: 151.28,
    marginTop: "6%",
  },
  bienvenidoText: {
    position: "relative",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#f85d5a",
    textAlign: "center",
    marginTop: "3%",
  },
  estamosFelicesDeVerteDeNu: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.57,
    marginTop: "3%",
  },
  emailText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    marginRight: "0%",
    marginTop: "12%",
  },
  cartaIcon: {
    position: "absolute",
    width: 17,
    height: 17,
    marginRight: 270,
    top: "39%",
    left: "20%",
  },
  lnea16View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: "52%",
    height: 2,
  },
  contraseaText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    marginRight: "0%",
    marginTop: "9%",
    
  },
  cerraduraIcon: {
    position: "absolute",
    width: 17,
    height: 17,
    marginRight: 270,
    top: "46%",
    left: "20%",

  },
  lnea17View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#8e7962",
    borderTopWidth: 1,
    width: "53%",
    height: 2,
  },
  olvidMiContrasea: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
    marginLeft: 130,
  },
  oText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.5,
    marginTop: 100,
  },
  rectngulo41View: {
    position: "relative",
    backgroundColor: "#efeae4",
    width: 29,
    height: 20,
  },
  lnea15View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 349,
    height: 2,
    opacity: 0.16,
    marginTop: -30,
  },
  rectngulo38View: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#94806a",
    width: 235,
    height: 41,
    opacity: 0.2,
    marginTop: "11%",
  },
  logotipoDeGoogleGlassIcon: {
    position: "absolute",
    width: 25,
    height: 25,
    top: "67.5%",
    left: 145,
  },
  continuarConGoogle: {
    position: "absolute",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    top: "67.5%",
    left: 180,
  },
  rectngulo40View: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#94806a",
    width: 235,
    height: 41,
    opacity: 0.2,
    marginTop: "10%",
  },
  logotipoDeAppleIcon: {
    position: "absolute",
    width: 25,
    height: 25,
    top: "76%",
    left: 145,
  },
  continuarConApple: {
    position: "absolute",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    top: "76.2%",
    left: 180,
  },
  rectngulo4Pressable: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 235,
    height: 38,
    marginTop: 50,
  },
  iniciarText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#e8e8e8",
    textAlign: "left",
  },
  iniciarText1: {
    position: "absolute",
    fontSize: 18,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "center",
    top: "85%",
  },
  inicioDeSesinView: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 13,
    paddingTop: "12%",
    paddingRight: 14,
    alignItems: "center",
  },
});

export default InicioDeSesin;
