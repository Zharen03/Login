import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen = () => {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.usuario1Icon, styles.ml12]}
        resizeMode="cover"
        source={require("../assets/usuario-1.png")}
      />
      <Text style={[styles.parqueInfantilOstimuri, styles.mt_26]}>
        Parque Infantil Ostimuri
      </Text>
      <Image
        style={[styles.imagen6Icon, styles.mt51, styles.ml20]}
        resizeMode="cover"
        source={require("../assets/imagen-6.png")}
      />
      <Image
        style={[styles.elipse10Icon, styles.mt_166, styles.ml296]}
        resizeMode="cover"
        source={require("../assets/elipse-10.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon, styles.mt_16, styles.ml300]}
        resizeMode="cover"
        source={require("../assets/corazonblanco.png")}
      />
      <Image
        style={[styles.elipse13Icon, styles.mt24]}
        resizeMode="cover"
        source={require("../assets/elipse-13.png")}
      />
      <Image
        style={[styles.playButtonIcon, styles.mt_55, styles.ml162]}
        resizeMode="cover"
        source={require("../assets/playbutton.png")}
      />
      <Text
        style={[styles.calzadaOstimuriSnBellavis, styles.mt84, styles.ml39]}
      >
        Calzada Ostimuri s/n, Bellavista, Ciudad Obregón.
      </Text>
      <Image
        style={[styles.localizacionIcon, styles.mt_14, styles.ml20]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.text, styles.mt_4]}>.</Text>
      <Text
        style={[styles.mircolesDomingo, styles.mt_15, styles.ml39]}
      >{`Miércoles - Domingo `}</Text>
      <Text style={[styles.text1, styles.mt_15, styles.ml183]}>
        8:00 - 20:00
      </Text>
      <Image
        style={[styles.cronografoIcon, styles.mt_14, styles.ml20]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text2, styles.mt1, styles.ml302]}>4.5</Text>
      <Image
        style={[styles.starColorIcon, styles.mt_14, styles.ml283]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Text style={[styles.text3, styles.mt_10, styles.ml39]}>
        (644) 413 4917
      </Text>
      <Image
        style={[styles.llamadaTelefonicaIcon, styles.mt_14, styles.ml20]}
        resizeMode="cover"
        source={require("../assets/llamadatelefonica.png")}
      />
      <View style={[styles.lnea26View, styles.mt15]} />
      <Text style={[styles.informacinText, styles.mt20]}>Información</Text>
      <Text
        style={[styles.steParqueDeDiversionesCuen, styles.mt16, styles.ml23]}
      >
        <Text style={styles.steParqueDe}>
          Éste parque de diversiones cuenta con una gran variedad de juegos,
          desde columpios hasta juegos mecánicos donde se puede disfrutar una
          tarde en familia acompañado de un helado y gran surtido de alimentos
        </Text>
        <Text style={styles.blankLineText}> </Text>
        <Text style={styles.elParqueInfantil}>
          El Parque Infantil Ostimuri fue inaugurado el 9 de diciembre de 1970
          con una ubicación en terrenos del Bosque “Ostimuri” situada en la
          parte sur de la Laguna del Náinari.
        </Text>
        <Text style={styles.blankLineText1}> </Text>
        <Text style={styles.elParqueInfantil1}>
          El parque infantil es famoso por el tobogán metálico, para los
          aficionados de las alturas y la velocidad, en él puedes deslizarte con
          un tapete e ir observando todo el parque debido a su altura. Otra
          atracción característica del parque es el famoso trenecito, éste
          trenecito muestra un recorrido por todo el parque y por el zoológico
          donde podrás observar su todo el entorno.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  mt_26: {
    marginTop: -26,
  },
  mt51: {
    marginTop: 51,
  },
  ml20: {
    marginLeft: 20,
  },
  mt_166: {
    marginTop: -166,
  },
  ml296: {
    marginLeft: 296,
  },
  mt_16: {
    marginTop: -16,
  },
  ml300: {
    marginLeft: 300,
  },
  mt24: {
    marginTop: 24,
  },
  mt_55: {
    marginTop: -55,
  },
  ml162: {
    marginLeft: 162,
  },
  mt84: {
    marginTop: 84,
  },
  ml39: {
    marginLeft: 39,
  },
  mt_14: {
    marginTop: -14,
  },
  mt_4: {
    marginTop: -4,
  },
  mt_15: {
    marginTop: -15,
  },
  ml183: {
    marginLeft: 183,
  },
  mt1: {
    marginTop: 1,
  },
  ml302: {
    marginLeft: 302,
  },
  ml283: {
    marginLeft: 283,
  },
  mt_10: {
    marginTop: -10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt16: {
    marginTop: 16,
  },
  ml23: {
    marginLeft: 23,
  },
  usuario1Icon: {
    position: "relative",
    borderRadius: 17,
    width: 26,
    height: 26,
  },
  parqueInfantilOstimuri: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
    alignSelf: "center",
  },
  imagen6Icon: {
    position: "relative",
    width: 304,
    height: 172,
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
  elipse13Icon: {
    position: "relative",
    width: 80,
    height: 80,
    opacity: 0.4,
    alignSelf: "center",
  },
  playButtonIcon: {
    position: "relative",
    width: 30,
    height: 30,
    opacity: 0.85,
  },
  calzadaOstimuriSnBellavis: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text: {
    position: "relative",
    fontSize: 20,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
    alignSelf: "center",
  },
  mircolesDomingo: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cronografoIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text2: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  starColorIcon: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.7,
  },
  text3: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  llamadaTelefonicaIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  lnea26View: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 346,
    height: 2,
    opacity: 0.5,
  },
  informacinText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
    alignSelf: "center",
  },
  steParqueDe: {
    margin: 0,
  },
  blankLineText: {
    margin: 0,
  },
  elParqueInfantil: {
    margin: 0,
  },
  blankLineText1: {
    margin: 0,
  },
  elParqueInfantil1: {
    margin: 0,
  },
  steParqueDeDiversionesCuen: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#544738",
    textAlign: "left",
    width: 302,
    height: 275,
    opacity: 0.8,
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 14,
    paddingTop: 28,
    paddingRight: 15,
    alignItems: "flex-start",
  },
});

export default Screen;
