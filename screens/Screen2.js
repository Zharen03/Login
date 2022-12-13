import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.rectngulo36Pressable}
        onPress={() => navigation.navigate("Screen1")}
      />
      <Image
        style={[styles.buscarIcon, styles.mt284_5]}
        resizeMode="cover"
        source={require("../assets/buscar.png")}
      />
      <Text style={[styles.aDndeQuiereIr, styles.mt90_5]}>
        ¿A dónde quiere ir?
      </Text>
      <View style={[styles.lnea25View, styles.mt29_5]} />
      <Image
        style={[styles.lagunaNainariIcon, styles.mt235_5]}
        resizeMode="cover"
        source={require("../assets/lagunanainari.png")}
      />
      <Text style={[styles.lagunaDelNainari, styles.mt_82_5, styles.mb41]}>
        Laguna del Nainari
      </Text>
      <Text style={[styles.avVicenteGuerreoSN, styles.mt8_5, styles.mb82]}>
        Av. Vicente Guerreo SN
      </Text>
      <Image
        style={[styles.localizacionIcon, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunDom00000000Text, styles.mt4_5, styles.mb79]}>
        Lun-Dom 00:00-00:00
      </Text>
      <Image
        style={[styles.cronografoIcon, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text, styles.mt70_5]}>4.8</Text>
      <Image
        style={[styles.corazonBlancoIcon, styles.mt_13_5, styles.mb212]}
        resizeMode="cover"
        source={require("../assets/corazonblanco1.png")}
      />
      <Image
        style={[styles.starColorIcon, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Text style={[styles.catedralDeCdObregn, styles.mt44_5, styles.mb87]}>
        Catedral de Cd. Obregón
      </Text>
      <Image
        style={[styles.catedralIcon, styles.mt235_5]}
        resizeMode="cover"
        source={require("../assets/catedral.png")}
      />
      <Text style={[styles.cSonora166Centro, styles.mt_56_5, styles.mb74]}>
        C. Sonora 166, Centro
      </Text>
      <Image
        style={[styles.localizacionIcon1, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie9001400Text, styles.mt4_5, styles.mb59]}>
        Lun-Vie 9:00-14:00
      </Text>
      <Image
        style={[styles.cronografoIcon1, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text1, styles.mt71_5]}>4.5</Text>
      <Image
        style={[styles.starColorIcon1, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon1, styles.mt_12_5, styles.mb212]}
        resizeMode="cover"
        source={require("../assets/corazonblanco2.png")}
      />
      <Text style={[styles.palacioMunicipalText, styles.mt44_5, styles.mb29]}>
        Palacio Municipal
      </Text>
      <Image
        style={[styles.palacioMunicipalIcon, styles.mt236_5]}
        resizeMode="cover"
        source={require("../assets/palaciomunicipal.png")}
      />
      <Text style={[styles.calle5DeFebreroEsq, styles.mt_55_5, styles.mb92]}>
        Calle 5 de Febrero, Esq...
      </Text>
      <Image
        style={[styles.localizacionIcon2, styles.mt116_5]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie8001500Text, styles.mt4_5, styles.mb58]}>
        Lun-Vie 8:00-15:00
      </Text>
      <Image
        style={[styles.cronografoIcon2, styles.mt116_5]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text2, styles.mt72_5]}>4.5</Text>
      <Image
        style={[styles.starColorIcon2, styles.mt116_5]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon2, styles.mt_12_5, styles.mb212]}
        resizeMode="cover"
        source={require("../assets/corazonblanco2.png")}
      />
      <Image
        style={[styles.parqueInfantilIcon, styles.mt235_5]}
        resizeMode="cover"
        source={require("../assets/parqueinfantil.png")}
      />
      <Text
        style={[styles.parqueInfantilOstimuri, styles.mt_81_5, styles.mb76]}
      >
        Parque Infantil Ostimuri
      </Text>
      <Text style={[styles.ostimuriSnBellavista, styles.mt8_5, styles.mb79]}>
        Ostimuri s/n, Bellavista
      </Text>
      <Image
        style={[styles.localizacionIcon3, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie11000800Text, styles.mt4_5, styles.mb65]}>
        Lun-Vie 11:00-08:00
      </Text>
      <Image
        style={[styles.cronografoIcon3, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text3, styles.mt71_5]}>4.5</Text>
      <Image
        style={[styles.starColorIcon3, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <Image
        style={[styles.corazonBlancoIcon3, styles.mt_12_5, styles.mb212]}
        resizeMode="cover"
        source={require("../assets/corazonblanco2.png")}
      />
      <Image
        style={[styles.lagunaNainariIcon1, styles.mt235_5]}
        resizeMode="cover"
        source={require("../assets/lagunanainari.png")}
      />
      <Text style={[styles.lagunaDelNainari1, styles.mt_82_5, styles.mb41]}>
        Laguna del Nainari
      </Text>
      <Text style={[styles.avVicenteGuerreoSN1, styles.mt8_5, styles.mb82]}>
        Av. Vicente Guerreo SN
      </Text>
      <Image
        style={[styles.localizacionIcon4, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.lunVie00000000Text, styles.mt4_5, styles.mb69]}>
        Lun-Vie 00:00-00:00
      </Text>
      <Image
        style={[styles.cronografoIcon4, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.text4, styles.mt70_5]}>4.8</Text>
      <Image
        style={[styles.corazonBlancoIcon4, styles.mt_13_5, styles.mb212]}
        resizeMode="cover"
        source={require("../assets/corazonblanco1.png")}
      />
      <Image
        style={[styles.starColorIcon4, styles.mt115_5]}
        resizeMode="cover"
        source={require("../assets/starcolor.png")}
      />
      <View style={[styles.rectngulo11View, styles.mt62_5]} />
      <Image
        style={[styles.trazado44Icon, styles.mt_77_5, styles.mb260]}
        resizeMode="cover"
        source={require("../assets/trazado-441.png")}
      />
      <Image
        style={[styles.calendarioIcon, styles.mt_31_5, styles.mb139]}
        resizeMode="cover"
        source={require("../assets/calendario.png")}
      />
      <Image
        style={[styles.corazonDescansoIcon, styles.mt_28_5, styles.mb1]}
        resizeMode="cover"
        source={require("../assets/corazon-descanso.png")}
      />
      <Image
        style={[styles.hogarDescansoIcon, styles.mt304_5]}
        resizeMode="cover"
        source={require("../assets/hogar-descanso.png")}
      />
      <Image
        style={[styles.localizacionRojoIcon, styles.mt166_5]}
        resizeMode="cover"
        source={require("../assets/localizacion-rojo.png")}
      />
      <View style={[styles.rectngulo51View, styles.mt_10_5]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt284_5: {
    marginTop: 284.5,
  },
  mt90_5: {
    marginTop: 90.5,
  },
  mt29_5: {
    marginTop: 29.5,
  },
  mt235_5: {
    marginTop: 235.5,
  },
  mt_82_5: {
    marginTop: -82.5,
  },
  mb41: {
    marginBottom: 41,
  },
  mt8_5: {
    marginTop: 8.5,
  },
  mb82: {
    marginBottom: 82,
  },
  mt115_5: {
    marginTop: 115.5,
  },
  mt4_5: {
    marginTop: 4.5,
  },
  mb79: {
    marginBottom: 79,
  },
  mt70_5: {
    marginTop: 70.5,
  },
  mt_13_5: {
    marginTop: -13.5,
  },
  mb212: {
    marginBottom: 212,
  },
  mt44_5: {
    marginTop: 44.5,
  },
  mb87: {
    marginBottom: 87,
  },
  mt_56_5: {
    marginTop: -56.5,
  },
  mb74: {
    marginBottom: 74,
  },
  mb59: {
    marginBottom: 59,
  },
  mt71_5: {
    marginTop: 71.5,
  },
  mt_12_5: {
    marginTop: -12.5,
  },
  mb29: {
    marginBottom: 29,
  },
  mt236_5: {
    marginTop: 236.5,
  },
  mt_55_5: {
    marginTop: -55.5,
  },
  mb92: {
    marginBottom: 92,
  },
  mt116_5: {
    marginTop: 116.5,
  },
  mb58: {
    marginBottom: 58,
  },
  mt72_5: {
    marginTop: 72.5,
  },
  mt_81_5: {
    marginTop: -81.5,
  },
  mb76: {
    marginBottom: 76,
  },
  mb65: {
    marginBottom: 65,
  },
  mb69: {
    marginBottom: 69,
  },
  mt62_5: {
    marginTop: 62.5,
  },
  mt_77_5: {
    marginTop: -77.5,
  },
  mb260: {
    marginBottom: 260,
  },
  mt_31_5: {
    marginTop: -31.5,
  },
  mb139: {
    marginBottom: 139,
  },
  mt_28_5: {
    marginTop: -28.5,
  },
  mb1: {
    marginBottom: 1,
  },
  mt304_5: {
    marginTop: 304.5,
  },
  mt166_5: {
    marginTop: 166.5,
  },
  mt_10_5: {
    marginTop: -10.5,
  },
  rectngulo36Pressable: {
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
  lunDom00000000Text: {
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
  },
  palacioMunicipalText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  palacioMunicipalIcon: {
    position: "relative",
    borderRadius: 49,
    width: 83,
    height: 81.32,
  },
  calle5DeFebreroEsq: {
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
  lunVie8001500Text: {
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
  localizacionIcon3: {
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
  cronografoIcon3: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text3: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  starColorIcon3: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.7,
  },
  corazonBlancoIcon3: {
    position: "relative",
    width: 13,
    height: 13,
  },
  lagunaNainariIcon1: {
    position: "relative",
    borderRadius: 50,
    width: 83,
    height: 83,
    opacity: 0.9,
  },
  lagunaDelNainari1: {
    position: "relative",
    fontSize: 16,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  avVicenteGuerreoSN1: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon4: {
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
  cronografoIcon4: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text4: {
    position: "relative",
    fontSize: 13,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  corazonBlancoIcon4: {
    position: "relative",
    width: 13,
    height: 13,
  },
  starColorIcon4: {
    position: "relative",
    width: 13,
    height: 13,
    opacity: 0.7,
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
  trazado44Icon: {
    position: "relative",
    width: 15.5,
    height: 32.79,
  },
  calendarioIcon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  corazonDescansoIcon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  hogarDescansoIcon: {
    position: "relative",
    width: 30,
    height: 30,
  },
  localizacionRojoIcon: {
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

export default Screen2;
