import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const Screen7 = () => {
  return (
    <View style={styles.view}>
      <Text style={[styles.misVisitasText, styles.mr97]}>Mis visitas</Text>
      <Image
        style={[styles.imagen1Icon, styles.mt41]}
        resizeMode="cover"
        source={require("../assets/imagen-1.png")}
      />
      <Image
        style={[styles.elipse10Icon, styles.mt_135, styles.mr10]}
        resizeMode="cover"
        source={require("../assets/elipse-10.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon, styles.mt_16, styles.mr14]}
        resizeMode="cover"
        source={require("../assets/corazonblanco.png")}
      />
      <View style={[styles.rectngulo54View, styles.mt93]} />
      <View style={[styles.rectngulo48View, styles.mt_26]} />
      <Text style={[styles.lagunaDelNainari, styles.mt_42, styles.mr118]}>
        Laguna del Nainari
      </Text>
      <Text style={[styles.text, styles.mt_19, styles.mr10]}>4.8</Text>
      <Image
        style={[styles.starColorIcon, styles.mt_18, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/starcolor9.png")}
      />
      <Image
        style={[styles.usuario3Icon, styles.mt_16, styles.mr274]}
        resizeMode="cover"
        source={require("../assets/usuario-3.png")}
      />
      <Text style={[styles.avVicenteGuerreoSN, styles.mt4, styles.mr130]}>
        Av. Vicente Guerreo SN
      </Text>
      <Image
        style={[styles.imagen2Icon, styles.mt41]}
        resizeMode="cover"
        source={require("../assets/imagen-2.png")}
      />
      <Image
        style={[styles.elipse9Icon, styles.mt_130, styles.mr10]}
        resizeMode="cover"
        source={require("../assets/elipse-10.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon1, styles.mt_16, styles.mr14]}
        resizeMode="cover"
        source={require("../assets/corazonblanco10.png")}
      />
      <View style={[styles.rectngulo62View, styles.mt91]} />
      <View style={[styles.rectngulo63View, styles.mt_26]} />
      <Text style={[styles.plazaLvaroObregn, styles.mt_42, styles.mr94]}>
        Plaza Álvaro Obregón
      </Text>
      <Text style={[styles.text1, styles.mt_19, styles.mr10]}>4.5</Text>
      <Image
        style={[styles.usuario3Icon1, styles.mt_19, styles.mr274]}
        resizeMode="cover"
        source={require("../assets/usuario-3.png")}
      />
      <Image
        style={[styles.starColorIcon1, styles.mt_15, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/starcolor9.png")}
      />
      <Text style={[styles.hidalgo744Centro, styles.mt2, styles.mr149]}>
        Hidalgo 744, Centro
      </Text>
      <Image
        style={[styles.imagen3Icon, styles.mt50]}
        resizeMode="cover"
        source={require("../assets/imagen-3.png")}
      />
      <Image
        style={[styles.elipse11Icon, styles.mt_162, styles.mr11]}
        resizeMode="cover"
        source={require("../assets/elipse-10.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon2, styles.mt_16, styles.mr15]}
        resizeMode="cover"
        source={require("../assets/corazonblanco.png")}
      />
      <View style={[styles.rectngulo57View, styles.mt116]} />
      <View style={[styles.rectngulo58View, styles.mt_26]} />
      <Image
        style={[styles.usuario3Icon2, styles.mt_44, styles.mr274]}
        resizeMode="cover"
        source={require("../assets/usuario-3.png")}
      />
      <Text style={[styles.parqueInfantilOstimuri, styles.mt_16, styles.mr76]}>
        Parque Infantil Ostimuri
      </Text>
      <Text style={[styles.text2, styles.mt_19, styles.mr10]}>4.5</Text>
      <Image
        style={[styles.starColorIcon2, styles.mt_18, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/starcolor9.png")}
      />
      <Text style={[styles.ostimuriSnBellavista, styles.mt2, styles.mr131]}>
        Ostimuri s/n, Bellavista
      </Text>
      <Image
        style={[styles.imagen4Icon, styles.mt52]}
        resizeMode="cover"
        source={require("../assets/imagen-4.png")}
      />
      <Image
        style={[styles.elipse12Icon, styles.mt_159, styles.mr10]}
        resizeMode="cover"
        source={require("../assets/elipse-10.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon3, styles.mt_16, styles.mr14]}
        resizeMode="cover"
        source={require("../assets/corazonblanco.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mr97: {
    marginRight: 97,
  },
  mt41: {
    marginTop: 41,
  },
  mt_135: {
    marginTop: -135,
  },
  mr10: {
    marginRight: 10,
  },
  mt_16: {
    marginTop: -16,
  },
  mr14: {
    marginRight: 14,
  },
  mt93: {
    marginTop: 93,
  },
  mt_26: {
    marginTop: -26,
  },
  mt_42: {
    marginTop: -42,
  },
  mr118: {
    marginRight: 118,
  },
  mt_19: {
    marginTop: -19,
  },
  mt_18: {
    marginTop: -18,
  },
  mr42: {
    marginRight: 42,
  },
  mr274: {
    marginRight: 274,
  },
  mt4: {
    marginTop: 4,
  },
  mr130: {
    marginRight: 130,
  },
  mt_130: {
    marginTop: -130,
  },
  mt91: {
    marginTop: 91,
  },
  mr94: {
    marginRight: 94,
  },
  mt_15: {
    marginTop: -15,
  },
  mt2: {
    marginTop: 2,
  },
  mr149: {
    marginRight: 149,
  },
  mt50: {
    marginTop: 50,
  },
  mt_162: {
    marginTop: -162,
  },
  mr11: {
    marginRight: 11,
  },
  mr15: {
    marginRight: 15,
  },
  mt116: {
    marginTop: 116,
  },
  mt_44: {
    marginTop: -44,
  },
  mr76: {
    marginRight: 76,
  },
  mr131: {
    marginRight: 131,
  },
  mt52: {
    marginTop: 52,
  },
  mt_159: {
    marginTop: -159,
  },
  misVisitasText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  imagen1Icon: {
    position: "relative",
    borderRadius: 22,
    width: 303,
    height: 144,
  },
  elipse10Icon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  corazonBlancoIcon: {
    position: "relative",
    width: 12,
    height: 12,
  },
  rectngulo54View: {
    position: "relative",
    backgroundColor: "#ecddcc",
    width: 303,
    height: 26,
  },
  rectngulo48View: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#ecddcc",
    width: 303,
    height: 46,
  },
  lagunaDelNainari: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  starColorIcon: {
    position: "relative",
    width: 16,
    height: 16,
  },
  usuario3Icon: {
    position: "relative",
    width: 16,
    height: 16,
    opacity: 0.34,
  },
  avVicenteGuerreoSN: {
    position: "relative",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.5,
  },
  imagen2Icon: {
    position: "relative",
    borderRadius: 22,
    width: 303,
    height: 135.12,
  },
  elipse9Icon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  corazonBlancoIcon1: {
    position: "relative",
    width: 12,
    height: 12,
  },
  rectngulo62View: {
    position: "relative",
    backgroundColor: "#ecddcc",
    width: 303,
    height: 26,
  },
  rectngulo63View: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#ecddcc",
    width: 303,
    height: 46,
  },
  plazaLvaroObregn: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  usuario3Icon1: {
    position: "relative",
    width: 16,
    height: 16,
    opacity: 0.34,
  },
  starColorIcon1: {
    position: "relative",
    width: 16,
    height: 16,
  },
  hidalgo744Centro: {
    position: "relative",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.5,
  },
  imagen3Icon: {
    position: "relative",
    borderRadius: 22,
    width: 303,
    height: 170.23,
    alignSelf: "flex-start",
  },
  elipse11Icon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  corazonBlancoIcon2: {
    position: "relative",
    width: 12,
    height: 12,
  },
  rectngulo57View: {
    position: "relative",
    backgroundColor: "#ecddcc",
    width: 303,
    height: 26,
    alignSelf: "flex-start",
  },
  rectngulo58View: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#ecddcc",
    width: 303,
    height: 51,
    alignSelf: "flex-start",
  },
  usuario3Icon2: {
    position: "relative",
    width: 16,
    height: 16,
    opacity: 0.34,
  },
  parqueInfantilOstimuri: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text2: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  starColorIcon2: {
    position: "relative",
    width: 16,
    height: 16,
  },
  ostimuriSnBellavista: {
    position: "relative",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.5,
  },
  imagen4Icon: {
    position: "relative",
    borderRadius: 22,
    width: 303,
    height: 170.44,
  },
  elipse12Icon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  corazonBlancoIcon3: {
    position: "relative",
    width: 12,
    height: 12,
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 36,
    paddingTop: 28,
    paddingRight: 36,
    alignItems: "flex-end",
  },
});

export default Screen7;
