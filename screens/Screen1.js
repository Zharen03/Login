import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.rectngulo36View, styles.mb32]} />
      <Image
        style={[styles.buscarIcon, styles.mt231_5]}
        resizeMode="cover"
        source={require("../assets/buscar.png")}
      />
      <Image
        style={[styles.flechaHaciaLaIzquierdaIcon, styles.mt335_5]}
        resizeMode="cover"
        source={require("../assets/flechahacialaizquierda.png")}
      />
      <Text style={[styles.aDndeQuiereIr, styles.mt37_5]}>
        ¿A dónde quiere ir?
      </Text>
      <View style={[styles.lnea25View, styles.mt28_5]} />
      <Text style={[styles.dESTINOSPOPULARESText, styles.mt187_5]}>
        DESTINOS POPULARES
      </Text>
      <Text style={[styles.lagunaDelNainari, styles.mt91_5]}>
        Laguna del Nainari
      </Text>
      <Image
        style={[styles.localizacionIcon, styles.mt278_5]}
        resizeMode="cover"
        source={require("../assets/localizacion1.png")}
      />
      <Text style={[styles.text, styles.mt74_5]}>.</Text>
      <Text style={[styles.text1, styles.mt_11_5, styles.mb40]}>.</Text>
      <Text style={[styles.entretenimientoText, styles.mt156_5]}>
        Entretenimiento
      </Text>
      <Text style={[styles.familiarText, styles.mt31_5]}>Familiar</Text>
      <Text style={[styles.obregnText, styles.mt_11_5, styles.mb88]}>
        Obregón
      </Text>
      <Text style={[styles.parqueInfantilOstimuri, styles.mt54_5]}>
        Parque Infantil Ostimuri
      </Text>
      <Image
        style={[styles.localizacionIcon1, styles.mt278_5]}
        resizeMode="cover"
        source={require("../assets/localizacion1.png")}
      />
      <Text style={[styles.text2, styles.mt74_5]}>.</Text>
      <Text style={[styles.text3, styles.mt_11_5, styles.mb40]}>.</Text>
      <Text style={[styles.entretenimientoText1, styles.mt156_5]}>
        Entretenimiento
      </Text>
      <Text style={[styles.familiarText1, styles.mt31_5]}>Familiar</Text>
      <Text style={[styles.obregnText1, styles.mt_11_5, styles.mb88]}>
        Obregón
      </Text>
      <Text style={[styles.parqueDeLosPioneros, styles.mt58_5]}>
        Parque de los Pioneros
      </Text>
      <Image
        style={[styles.localizacionIcon2, styles.mt278_5]}
        resizeMode="cover"
        source={require("../assets/localizacion1.png")}
      />
      <Text style={[styles.text4, styles.mt146_5]}>.</Text>
      <Text style={[styles.text5, styles.mt56_5]}>.</Text>
      <Text style={[styles.deporteText, styles.mt193_5]}>Deporte</Text>
      <Text style={[styles.familiarText2, styles.mt101_5]}>Familiar</Text>
      <Text style={[styles.obregnText2, styles.mt_11_5, styles.mb20]}>
        Obregón
      </Text>
      <Text style={[styles.plazaLvaroObregn, styles.mt68_5]}>
        Plaza Álvaro Obregón
      </Text>
      <Image
        style={[styles.localizacionIcon3, styles.mt278_5]}
        resizeMode="cover"
        source={require("../assets/localizacion1.png")}
      />
      <Text style={[styles.text6, styles.mt74_5]}>.</Text>
      <Text style={[styles.text7, styles.mt_11_5, styles.mb18]}>.</Text>
      <Text style={[styles.entretenimientoText2, styles.mt156_5]}>
        Entretenimiento
      </Text>
      <Text style={[styles.plazaText, styles.mt42_5]}>Plaza</Text>
      <Text style={[styles.obregnText3, styles.mt_11_5, styles.mb66]}>
        Obregón
      </Text>
      <Text style={[styles.museoDeLosYaquis, styles.mt77_5]}>
        Museo de los Yaquis
      </Text>
      <Image
        style={[styles.localizacionIcon4, styles.mt278_5]}
        resizeMode="cover"
        source={require("../assets/localizacion1.png")}
      />
      <Text style={[styles.text8, styles.mt152_5]}>.</Text>
      <Text style={[styles.text9, styles.mt78_5]}>.</Text>
      <Text style={[styles.culturalText, styles.mt194_5]}>Cultural</Text>
      <Text style={[styles.museoText, styles.mt116_5]}>Museo</Text>
      <Text style={[styles.cocoritText, styles.mt38_5]}>Cocorit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mb32: {
    marginBottom: 32,
  },
  mt231_5: {
    marginTop: 231.5,
  },
  mt335_5: {
    marginTop: 335.5,
  },
  mt37_5: {
    marginTop: 37.5,
  },
  mt28_5: {
    marginTop: 28.5,
  },
  mt187_5: {
    marginTop: 187.5,
  },
  mt91_5: {
    marginTop: 91.5,
  },
  mt278_5: {
    marginTop: 278.5,
  },
  mt74_5: {
    marginTop: 74.5,
  },
  mt_11_5: {
    marginTop: -11.5,
  },
  mb40: {
    marginBottom: 40,
  },
  mt156_5: {
    marginTop: 156.5,
  },
  mt31_5: {
    marginTop: 31.5,
  },
  mb88: {
    marginBottom: 88,
  },
  mt54_5: {
    marginTop: 54.5,
  },
  mt58_5: {
    marginTop: 58.5,
  },
  mt146_5: {
    marginTop: 146.5,
  },
  mt56_5: {
    marginTop: 56.5,
  },
  mt193_5: {
    marginTop: 193.5,
  },
  mt101_5: {
    marginTop: 101.5,
  },
  mb20: {
    marginBottom: 20,
  },
  mt68_5: {
    marginTop: 68.5,
  },
  mb18: {
    marginBottom: 18,
  },
  mt42_5: {
    marginTop: 42.5,
  },
  mb66: {
    marginBottom: 66,
  },
  mt77_5: {
    marginTop: 77.5,
  },
  mt152_5: {
    marginTop: 152.5,
  },
  mt78_5: {
    marginTop: 78.5,
  },
  mt194_5: {
    marginTop: 194.5,
  },
  mt116_5: {
    marginTop: 116.5,
  },
  mt38_5: {
    marginTop: 38.5,
  },
  rectngulo36View: {
    position: "relative",
    borderRadius: 23,
    backgroundColor: "#ecddcc",
    shadowColor: "rgba(0, 0, 0, 0.36)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 275,
    height: 40,
  },
  buscarIcon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  flechaHaciaLaIzquierdaIcon: {
    position: "relative",
    width: 26,
    height: 26,
  },
  aDndeQuiereIr: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  lnea25View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 376,
    height: 2,
    opacity: 0.5,
  },
  dESTINOSPOPULARESText: {
    position: "relative",
    fontSize: 10,
    letterSpacing: 0.08,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  lagunaDelNainari: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  localizacionIcon: {
    position: "relative",
    width: 25,
    height: 25,
  },
  text: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  entretenimientoText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  familiarText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  obregnText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  parqueInfantilOstimuri: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  localizacionIcon1: {
    position: "relative",
    width: 25,
    height: 25,
  },
  text2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  text3: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  entretenimientoText1: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  familiarText1: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  obregnText1: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  parqueDeLosPioneros: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  localizacionIcon2: {
    position: "relative",
    width: 25,
    height: 25,
  },
  text4: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  text5: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  deporteText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  familiarText2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  obregnText2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  plazaLvaroObregn: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  localizacionIcon3: {
    position: "relative",
    width: 25,
    height: 25,
  },
  text6: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  text7: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  entretenimientoText2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  plazaText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  obregnText3: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  museoDeLosYaquis: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  localizacionIcon4: {
    position: "relative",
    width: 25,
    height: 25,
  },
  text8: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  text9: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  culturalText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  museoText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cocoritText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 23,
    alignItems: "center",
  },
});

export default Screen1;
