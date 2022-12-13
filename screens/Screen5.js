import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={[styles.eventosText, styles.mb1]}>Eventos</Text>
      <View style={[styles.rectngulo5View, styles.mt133]} />
      <Pressable
        style={[styles.calendarioPressable, styles.mt_27, styles.mb118]}
        onPress={() => navigation.navigate("Screen4")}
      >
        <Text style={styles.calendarioText}>Calendario</Text>
      </Pressable>
      <Text style={[styles.listadoText, styles.mt133]}>Listado</Text>
      <Image
        style={[styles.lagunaNocheIcon, styles.mt218]}
        resizeMode="cover"
        source={require("../assets/lagunanoche.png")}
      />
      <Text style={[styles.showDeLuces, styles.mt_95, styles.mb69]}>
        Show de Luces
      </Text>
      <Text style={[styles.deJulioDel2022, styles.mt4, styles.mb83]}>
        01 de Julio del 2022
      </Text>
      <Image
        style={[styles.calendarioIcon, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/calendario2.png")}
      />
      <Text style={[styles.text, styles.mt4, styles.mb40]}>18:00-20:00</Text>
      <Image
        style={[styles.cronografoIcon, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.lagunaDelNainari, styles.mt4, styles.mb74]}>
        Laguna del Nainari
      </Text>
      <Image
        style={[styles.localizacionIcon, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.recreativoText, styles.mt3, styles.mb29]}>
        Recreativo
      </Text>
      <Image
        style={[styles.informacionIcon, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/informacion.png")}
      />
      <Image
        style={[styles.campana1Icon, styles.mt_13, styles.mb272]}
        resizeMode="cover"
        source={require("../assets/campana-1.png")}
      />
      <Image
        style={[styles.parqueInfantilIcon, styles.mt218]}
        resizeMode="cover"
        source={require("../assets/parqueinfantil1.png")}
      />
      <Text style={[styles.showDeMarionetas, styles.mt_95, styles.mb115]}>
        Show de Marionetas
      </Text>
      <Text style={[styles.deJulioDel20221, styles.mt4, styles.mb83]}>
        21 de Julio del 2022
      </Text>
      <Image
        style={[styles.calendarioIcon1, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/calendario2.png")}
      />
      <Text style={[styles.text1, styles.mt4, styles.mb39]}>16:00-19:00</Text>
      <Image
        style={[styles.cronografoIcon1, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.parqueOstimuriText, styles.mt4, styles.mb60]}>
        Parque Ostimuri
      </Text>
      <Image
        style={[styles.localizacionIcon1, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.recreativoText1, styles.mt3, styles.mb29]}>
        Recreativo
      </Text>
      <Image
        style={[styles.informacionIcon1, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/informacion.png")}
      />
      <Image
        style={[styles.campanaIcon, styles.mt_13, styles.mb272]}
        resizeMode="cover"
        source={require("../assets/campana.png")}
      />
      <Image
        style={[styles.imagen5Icon, styles.mt218]}
        resizeMode="cover"
        source={require("../assets/imagen-5.png")}
      />
      <Text
        style={[styles.nocheDeLuna, styles.mt_95, styles.mb67]}
      >{`Noche de luna `}</Text>
      <Text style={[styles.deJulioDel20222, styles.mt4, styles.mb85]}>
        23 de Julio del 2022
      </Text>
      <Image
        style={[styles.calendarioIcon2, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/calendario2.png")}
      />
      <Text style={[styles.text2, styles.mt4, styles.mb38]}>19:00-21:00</Text>
      <Image
        style={[styles.cronografoIcon2, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/cronografo.png")}
      />
      <Text style={[styles.planetarioDeCajeme, styles.mt4, styles.mb89]}>
        Planetario de Cajeme
      </Text>
      <Image
        style={[styles.localizacionIcon2, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/localizacion.png")}
      />
      <Text style={[styles.recreativoText2, styles.mt3, styles.mb29]}>
        Recreativo
      </Text>
      <Image
        style={[styles.informacionIcon2, styles.mt72]}
        resizeMode="cover"
        source={require("../assets/informacion.png")}
      />
      <Image
        style={[styles.campana1Icon1, styles.mt_13, styles.mb272]}
        resizeMode="cover"
        source={require("../assets/campana-1.png")}
      />
      <View style={[styles.rectngulo11View, styles.mt249]} />
      <Image
        style={[styles.calendarioRojoIcon, styles.mt_78, styles.mb147]}
        resizeMode="cover"
        source={require("../assets/calendario-rojo.png")}
      />
      <Image
        style={[styles.trazado44Icon, styles.mt_30, styles.mb260]}
        resizeMode="cover"
        source={require("../assets/trazado-443.png")}
      />
      <Image
        style={[styles.corazonDescansoIcon, styles.mt_32, styles.mb9]}
        resizeMode="cover"
        source={require("../assets/corazon-descanso.png")}
      />
      <Image
        style={[styles.localizacion1Icon, styles.mt147]}
        resizeMode="cover"
        source={require("../assets/localizacion-1.png")}
      />
      <Image
        style={[styles.hogarDescansoIcon, styles.mt285]}
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
  mt133: {
    marginTop: 133,
  },
  mt_27: {
    marginTop: -27,
  },
  mb118: {
    marginBottom: 118,
  },
  mt218: {
    marginTop: 218,
  },
  mt_95: {
    marginTop: -95,
  },
  mb69: {
    marginBottom: 69,
  },
  mt4: {
    marginTop: 4,
  },
  mb83: {
    marginBottom: 83,
  },
  mt72: {
    marginTop: 72,
  },
  mb40: {
    marginBottom: 40,
  },
  mb74: {
    marginBottom: 74,
  },
  mt3: {
    marginTop: 3,
  },
  mb29: {
    marginBottom: 29,
  },
  mt_13: {
    marginTop: -13,
  },
  mb272: {
    marginBottom: 272,
  },
  mb115: {
    marginBottom: 115,
  },
  mb39: {
    marginBottom: 39,
  },
  mb60: {
    marginBottom: 60,
  },
  mb67: {
    marginBottom: 67,
  },
  mb85: {
    marginBottom: 85,
  },
  mb38: {
    marginBottom: 38,
  },
  mb89: {
    marginBottom: 89,
  },
  mt249: {
    marginTop: 249,
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
  mt147: {
    marginTop: 147,
  },
  mt285: {
    marginTop: 285,
  },
  mt_9: {
    marginTop: -9,
  },
  eventosText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  rectngulo5View: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 116,
    height: 38,
  },
  calendarioText: {
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#876036",
    textAlign: "left",
  },
  calendarioPressable: {
    position: "relative",
  },
  listadoText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "left",
  },
  lagunaNocheIcon: {
    position: "relative",
    borderRadius: 50,
    width: 99,
    height: 99,
  },
  showDeLuces: {
    position: "relative",
    fontSize: 19,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  deJulioDel2022: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  calendarioIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cronografoIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  lagunaDelNainari: {
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
  recreativoText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  informacionIcon: {
    position: "relative",
    width: 13,
    height: 13,
  },
  campana1Icon: {
    position: "relative",
    width: 19,
    height: 19,
  },
  parqueInfantilIcon: {
    position: "relative",
    borderRadius: 50,
    width: 99,
    height: 99,
  },
  showDeMarionetas: {
    position: "relative",
    fontSize: 19,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  deJulioDel20221: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  calendarioIcon1: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cronografoIcon1: {
    position: "relative",
    width: 13,
    height: 13,
  },
  parqueOstimuriText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon1: {
    position: "relative",
    width: 13,
    height: 13,
  },
  recreativoText1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  informacionIcon1: {
    position: "relative",
    width: 13,
    height: 13,
  },
  campanaIcon: {
    position: "relative",
    width: 19,
    height: 19,
  },
  imagen5Icon: {
    position: "relative",
    borderRadius: 240,
    width: 99,
    height: 99,
  },
  nocheDeLuna: {
    position: "relative",
    fontSize: 19,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "left",
  },
  deJulioDel20222: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  calendarioIcon2: {
    position: "relative",
    width: 13,
    height: 13,
  },
  text2: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  cronografoIcon2: {
    position: "relative",
    width: 13,
    height: 13,
  },
  planetarioDeCajeme: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  localizacionIcon2: {
    position: "relative",
    width: 13,
    height: 13,
  },
  recreativoText2: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  informacionIcon2: {
    position: "relative",
    width: 13,
    height: 13,
  },
  campana1Icon1: {
    position: "relative",
    width: 19,
    height: 19,
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
  calendarioRojoIcon: {
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

export default Screen5;
