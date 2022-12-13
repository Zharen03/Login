import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Screen6 = () => {
  return (
    <View style={styles.view}>
      <Text style={[styles.favoritosText, styles.mb1]}>Favoritos</Text>
      <View style={[styles.rectngulo36View, styles.mt32]} />
      <Image
        style={[styles.buscarIcon, styles.mt287]}
        resizeMode="cover"
        source={require("../assets/buscar.png")}
      />
      <Text style={[styles.buscarText, styles.mt187]}>Buscar</Text>
      <Image
        style={[styles.lagunaNainariIcon, styles.mt230]}
        resizeMode="cover"
        source={require("../assets/lagunanainari.png")}
      />
      <Text style={[styles.lagunaDelNainari, styles.mt_83, styles.mb49]}>
        Laguna del Nainari
      </Text>
      <Text style={[styles.avVicenteGuerreoSN, styles.mt8, styles.mb90]}>
        Av. Vicente Guerreo SN
      </Text>
      <Image
        style={[styles.localizacionIcon, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie00000000Text, styles.mt4, styles.mb77]}>
        Lun-Vie 00:00-00:00
      </Text>
      <Image
        style={[styles.cronografoIcon, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text, styles.mt65]}>4.8</Text>
      <Image
        style={[styles.corazonBlancoIcon, styles.mt_14, styles.mb220]}
        resizeMode="cover"
        source={require("../assets/corazonblanco6.png")}
      />
      <Image
        style={[styles.starColorIcon, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Text style={[styles.catedralDeCdObregn, styles.mt46, styles.mb95]}>
        Catedral de Cd. Obregón
      </Text>
      <Image
        style={[styles.catedralIcon, styles.mt230]}
        resizeMode="cover"
        source={require("../assets/catedral.png")}
      />
      <Text style={[styles.cSonora166Centro, styles.mt_57, styles.mb82]}>
        C. Sonora 166, Centro
      </Text>
      <Image
        style={[styles.localizacionIcon1, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie9001400Text, styles.mt4, styles.mb67]}>
        Lun-Vie 9:00-14:00
      </Text>
      <Image
        style={[styles.cronografoIcon1, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text1, styles.mt66]}>4.5</Text>
      <Image
        style={[styles.starColorIcon1, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon1, styles.mt_13, styles.mb220]}
        resizeMode="cover"
        source={require("../assets/corazonblanco6.png")}
      />
      <Image
        style={[styles.parqueInfantilIcon, styles.mt230]}
        resizeMode="cover"
        source={require("../assets/parqueinfantil.png")}
      />
      <Text style={[styles.parqueInfantilOstimuri, styles.mt_82, styles.mb84]}>
        Parque Infantil Ostimuri
      </Text>
      <Text style={[styles.ostimuriSnBellavista, styles.mt8, styles.mb87]}>
        Ostimuri s/n, Bellavista
      </Text>
      <Image
        style={[styles.localizacionIcon2, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie11000800Text, styles.mt4, styles.mb73]}>
        Lun-Vie 11:00-08:00
      </Text>
      <Image
        style={[styles.cronografoIcon2, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text2, styles.mt66]}>4.5</Text>
      <Image
        style={[styles.starColorIcon2, styles.mt110]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon2, styles.mt_13, styles.mb220]}
        resizeMode="cover"
        source={require("../assets/corazonblanco6.png")}
      />
      <View style={[styles.barraView, styles.mt245]}>
        <View style={styles.rectngulo51View} />
        <Image
          style={styles.localizacion1Icon}
          resizeMode="cover"
          source={require("../assets/localizacion-1.png")}
        />
        <Image
          style={styles.calendarioIcon}
          resizeMode="cover"
          source={require("../assets/calendario.png")}
        />
        <Image
          style={styles.hogarDescansoIcon}
          resizeMode="cover"
          source={require("../assets/hogar-descanso.png")}
        />
        <Image
          style={styles.corazonRojoIcon}
          resizeMode="cover"
          source={require("../assets/corazon-rojo.png")}
        />
      </View>
      <Image
        style={[styles.trazado44Icon, styles.mt_78, styles.mb260]}
        resizeMode="cover"
        source={require("../assets/trazado-443.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mb1: {
    marginBottom: 1,
  },
  mt32: {
    marginTop: 32,
  },
  mt287: {
    marginTop: 287,
  },
  mt187: {
    marginTop: 187,
  },
  mt230: {
    marginTop: 230,
  },
  mt_83: {
    marginTop: -83,
  },
  mb49: {
    marginBottom: 49,
  },
  mt8: {
    marginTop: 8,
  },
  mb90: {
    marginBottom: 90,
  },
  mt110: {
    marginTop: 110,
  },
  mt4: {
    marginTop: 4,
  },
  mb77: {
    marginBottom: 77,
  },
  mt65: {
    marginTop: 65,
  },
  mt_14: {
    marginTop: -14,
  },
  mb220: {
    marginBottom: 220,
  },
  mt46: {
    marginTop: 46,
  },
  mb95: {
    marginBottom: 95,
  },
  mt_57: {
    marginTop: -57,
  },
  mb82: {
    marginBottom: 82,
  },
  mb67: {
    marginBottom: 67,
  },
  mt66: {
    marginTop: 66,
  },
  mt_13: {
    marginTop: -13,
  },
  mt_82: {
    marginTop: -82,
  },
  mb84: {
    marginBottom: 84,
  },
  mb87: {
    marginBottom: 87,
  },
  mb73: {
    marginBottom: 73,
  },
  mt245: {
    marginTop: 245,
  },
  mt_78: {
    marginTop: -78,
  },
  mb260: {
    marginBottom: 260,
  },
  favoritosText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
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
    width: 307,
    height: 40,
  },
  buscarIcon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  buscarText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  lagunaNainariIcon: {
    position: "relative",
    borderRadius: 50,
    width: 83,
    height: 83,
    opacity: 0.9,
  },
  lagunaDelNainari: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  avVicenteGuerreoSN: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  lunVie00000000Text: {
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
  text: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  corazonBlancoIcon: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.76,
  },
  starColorIcon: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.7,
  },
  catedralDeCdObregn: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  catedralIcon: {
    position: "relative",
    borderRadius: 42,
    width: 83,
    height: 83,
    opacity: 0.9,
  },
  cSonora166Centro: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon1: {
    position: "relative",
    width: 13,
    height: 13,
  },
  lunVie9001400Text: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cronografoIcon1: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text1: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  starColorIcon1: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.7,
  },
  corazonBlancoIcon1: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.76,
  },
  parqueInfantilIcon: {
    position: "relative",
    borderRadius: 50,
    width: 83,
    height: 83,
  },
  parqueInfantilOstimuri: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  ostimuriSnBellavista: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon2: {
    position: "relative",
    width: 13,
    height: 13,
  },
  lunVie11000800Text: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cronografoIcon2: {
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
  starColorIcon2: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.7,
  },
  corazonBlancoIcon2: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.76,
  },
  rectngulo51View: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#ebdfd2",
    height: 35,
  },
  localizacion1Icon: {
    position: "absolute",
    marginTop: -29,
    marginLeft: -79.5,
    top: "50%",
    left: "50%",
    width: 30,
    height: 30,
  },
  calendarioIcon: {
    position: "absolute",
    marginTop: -30,
    marginLeft: 58.5,
    top: "50%",
    left: "50%",
    width: 30,
    height: 30,
  },
  hogarDescansoIcon: {
    position: "absolute",
    marginTop: -29,
    top: "50%",
    left: 39,
    width: 30,
    height: 30,
  },
  corazonRojoIcon: {
    position: "absolute",
    marginTop: -29,
    marginLeft: -10.5,
    top: "50%",
    left: "50%",
    width: 30,
    height: 30,
  },
  barraView: {
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
  trazado44Icon: {
    position: "relative",
    width: 15.5,
    height: 32.79,
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 22,
    alignItems: "center",
  },
});

export default Screen6;
