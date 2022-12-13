import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={[styles.eventosText, styles.mb1]}>Eventos</Text>
      <View style={[styles.rectngulo59View, styles.mt18, styles.mb117]} />
      <Pressable
        style={[styles.listadoPressable, styles.mt137]}
        onPress={() => navigation.navigate("Screen5")}
      >
        <Text style={styles.listadoText}>Listado</Text>
      </Pressable>
      <Text style={[styles.calendarioText, styles.mt_16, styles.mb118]}>
        Calendario
      </Text>
      <Image
        style={[styles.downArrowIcon, styles.mt316]}
        resizeMode="cover"
        source={require("../assets/downarrow.png")}
      />
      <Image
        style={[styles.downArrowIcon1, styles.mt_33, styles.mb300]}
        resizeMode="cover"
        source={require("../assets/downarrow1.png")}
      />
      <Text style={[styles.julio2022Text, styles.mt22]}>Julio 2022</Text>
      <Text style={[styles.dText, styles.mt286]}>D</Text>
      <Text style={[styles.lText, styles.mt200]}>L</Text>
      <Text style={[styles.mText, styles.mt104]}>M</Text>
      <Text style={[styles.xText, styles.mt_21]}>X</Text>
      <Text style={[styles.jText, styles.mt_21, styles.mb88]}>J</Text>
      <Text style={[styles.vText, styles.mt_21, styles.mb180]}>V</Text>
      <Text style={[styles.sText, styles.mt_21, styles.mb269]}>S</Text>
      <View style={[styles.rectngulo24View, styles.mt3]} />
      <View style={[styles.dasJULIOView, styles.mt_231, styles.mb2]}>
        <Image
          style={styles.d21Icon}
          resizeMode="cover"
          source={require("../assets/d21.png")}
        />
        <Image
          style={styles.d24Icon}
          resizeMode="cover"
          source={require("../assets/d24.png")}
        />
        <Image
          style={styles.d23Icon}
          resizeMode="cover"
          source={require("../assets/d24.png")}
        />
        <Image
          style={styles.d22Icon}
          resizeMode="cover"
          source={require("../assets/d22.png")}
        />
        <Image
          style={styles.d21Icon1}
          resizeMode="cover"
          source={require("../assets/d22.png")}
        />
        <Text style={styles.text}>30</Text>
        <Text style={styles.text1}>31</Text>
        <Text style={styles.text2}>29</Text>
        <Text style={styles.text3}>28</Text>
        <Text style={styles.text4}>27</Text>
        <Text style={styles.text5}>26</Text>
        <Text style={styles.text6}>25</Text>
        <Text style={styles.text7}>24</Text>
        <Text style={styles.text8}>23</Text>
        <Text style={styles.text9}>22</Text>
        <Text style={styles.text10}>21</Text>
        <Text style={styles.text11}>20</Text>
        <Text style={styles.text12}>19</Text>
        <Text style={styles.text13}>18</Text>
        <Text style={styles.text14}>17</Text>
        <Text style={styles.text15}>16</Text>
        <Text style={styles.text16}>15</Text>
        <Text style={styles.text17}>14</Text>
        <Text style={styles.text18}>13</Text>
        <Text style={styles.text19}>12</Text>
        <Text style={styles.text20}>11</Text>
        <Text style={styles.text21}>10</Text>
        <Text style={styles.text22}>9</Text>
        <Text style={styles.text23}>8</Text>
        <Text style={styles.text24}>7</Text>
        <Text style={styles.text25}>6</Text>
        <Text style={styles.text26}>5</Text>
        <Text style={styles.text27}>4</Text>
        <Text style={styles.text28}>3</Text>
        <Text style={styles.text29}>2</Text>
        <Text style={styles.text30}>1</Text>
        <Text style={styles.text31}>25</Text>
        <Text style={styles.text32}>26</Text>
        <Text style={styles.text33}>27</Text>
        <Text style={styles.text34}>28</Text>
        <Text style={styles.text35}>29</Text>
        <Text style={styles.text36}>30</Text>
        <Text style={styles.text37}>1</Text>
        <Text style={styles.text38}>2</Text>
        <Text style={styles.text39}>3</Text>
        <Text style={styles.text40}>4</Text>
        <Text style={styles.text41}>5</Text>
      </View>
      <Text style={[styles.agendaText, styles.mt57, styles.mb1]}>Agenda</Text>
      <View style={[styles.rectngulo25View, styles.mt11]} />
      <Text style={[styles.nocheDeLuna, styles.mt119]}>Noche de luna</Text>
      <View style={[styles.rectngulo26View, styles.mt_14, styles.mb230]} />
      <Image
        style={[styles.elipse7Icon, styles.mt297]}
        resizeMode="cover"
        source={require("../assets/elipse-7.png")}
      />
      <Text style={[styles.text42, styles.mt_17, styles.mb231]}>
        19:00 - 21:00
      </Text>
      <Text style={[styles.planetarioDeCajeme, styles.mt121]}>
        Planetario de Cajeme
      </Text>
      <View style={[styles.rectngulo27View, styles.mt37]} />
      <Text style={[styles.showDeLuces, styles.mt118]}>Show de luces</Text>
      <View style={[styles.rectngulo28View, styles.mt_14, styles.mb230]} />
      <Image
        style={[styles.elipse8Icon, styles.mt297]}
        resizeMode="cover"
        source={require("../assets/elipse-8.png")}
      />
      <Text style={[styles.text43, styles.mt_17, styles.mb233]}>
        18:00 - 20:00
      </Text>
      <Text style={[styles.lagunaDelNainari, styles.mt136]}>
        Laguna del Nainari
      </Text>
      <View style={[styles.rectngulo11View, styles.mt67]} />
      <Image
        style={[styles.calendarioRojoIcon, styles.mt_78, styles.mb147]}
        resizeMode="cover"
        source={require("../assets/calendario-rojo.png")}
      />
      <Image
        style={[styles.trazado44Icon, styles.mt_30, styles.mb260]}
        resizeMode="cover"
        source={require("../assets/trazado-441.png")}
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
  mt18: {
    marginTop: 18,
  },
  mb117: {
    marginBottom: 117,
  },
  mt137: {
    marginTop: 137,
  },
  mt_16: {
    marginTop: -16,
  },
  mb118: {
    marginBottom: 118,
  },
  mt316: {
    marginTop: 316,
  },
  mt_33: {
    marginTop: -33,
  },
  mb300: {
    marginBottom: 300,
  },
  mt22: {
    marginTop: 22,
  },
  mt286: {
    marginTop: 286,
  },
  mt200: {
    marginTop: 200,
  },
  mt104: {
    marginTop: 104,
  },
  mt_21: {
    marginTop: -21,
  },
  mb88: {
    marginBottom: 88,
  },
  mb180: {
    marginBottom: 180,
  },
  mb269: {
    marginBottom: 269,
  },
  mt3: {
    marginTop: 3,
  },
  mt_231: {
    marginTop: -231,
  },
  mb2: {
    marginBottom: 2,
  },
  mt57: {
    marginTop: 57,
  },
  mt11: {
    marginTop: 11,
  },
  mt119: {
    marginTop: 119,
  },
  mt_14: {
    marginTop: -14,
  },
  mb230: {
    marginBottom: 230,
  },
  mt297: {
    marginTop: 297,
  },
  mt_17: {
    marginTop: -17,
  },
  mb231: {
    marginBottom: 231,
  },
  mt121: {
    marginTop: 121,
  },
  mt37: {
    marginTop: 37,
  },
  mt118: {
    marginTop: 118,
  },
  mb233: {
    marginBottom: 233,
  },
  mt136: {
    marginTop: 136,
  },
  mt67: {
    marginTop: 67,
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
  rectngulo59View: {
    position: "relative",
    borderRadius: 19,
    backgroundColor: "#f85d5a",
    width: 116,
    height: 38,
  },
  listadoText: {
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#8e7962",
    textAlign: "left",
  },
  listadoPressable: {
    position: "relative",
  },
  calendarioText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "SF UI Text",
    color: "#fff",
    textAlign: "left",
  },
  downArrowIcon: {
    position: "relative",
    width: 33,
    height: 33,
  },
  downArrowIcon1: {
    position: "relative",
    width: 33,
    height: 33,
  },
  julio2022Text: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  dText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
  },
  lText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  mText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  xText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  jText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  vText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  sText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  rectngulo24View: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#ead1b6",
    width: 333,
    height: 243,
    opacity: 0.5,
  },
  d21Icon: {
    position: "absolute",
    marginTop: -39.5,
    marginLeft: 26.5,
    top: "50%",
    left: "50%",
    width: 36,
    height: 36,
    opacity: 0.5,
  },
  d24Icon: {
    position: "absolute",
    marginTop: 43.5,
    top: "50%",
    left: 42,
    width: 6,
    height: 6,
  },
  d23Icon: {
    position: "absolute",
    marginTop: 43.5,
    top: "50%",
    left: 0,
    width: 6,
    height: 6,
  },
  d22Icon: {
    position: "absolute",
    marginTop: 2.5,
    top: "50%",
    right: 22,
    width: 6,
    height: 6,
  },
  d21Icon1: {
    position: "absolute",
    marginTop: 3.5,
    marginLeft: 75.5,
    top: "50%",
    left: "50%",
    width: 6,
    height: 6,
  },
  text: {
    position: "absolute",
    bottom: 0,
    left: 3,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    marginLeft: -101.5,
    bottom: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    marginTop: 46.5,
    top: "50%",
    right: -1,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    marginTop: 46.5,
    top: "50%",
    right: 42,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    marginTop: 46.5,
    marginLeft: 33.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    marginTop: 46.5,
    marginLeft: -10.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    marginTop: 46.5,
    marginLeft: -55.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    marginTop: 46.5,
    marginLeft: -101.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text8: {
    position: "absolute",
    marginTop: 46.5,
    top: "50%",
    left: 3,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text9: {
    position: "absolute",
    marginTop: 6.5,
    top: "50%",
    right: 0,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text10: {
    position: "absolute",
    marginTop: 6.5,
    marginLeft: 79.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text11: {
    position: "absolute",
    marginTop: 6.5,
    marginLeft: 33.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text12: {
    position: "absolute",
    marginTop: 6.5,
    marginLeft: -10.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text13: {
    position: "absolute",
    marginTop: 6.5,
    marginLeft: -54.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text14: {
    position: "absolute",
    marginTop: 6.5,
    marginLeft: -100.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text15: {
    position: "absolute",
    marginTop: 6.5,
    top: "50%",
    left: 3,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text16: {
    position: "absolute",
    marginTop: -33.5,
    top: "50%",
    right: 2,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text17: {
    position: "absolute",
    marginTop: -33.5,
    marginLeft: 79.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text18: {
    position: "absolute",
    marginTop: -33.5,
    marginLeft: 33.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#fff",
    textAlign: "left",
  },
  text19: {
    position: "absolute",
    marginTop: -33.5,
    marginLeft: -10.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text20: {
    position: "absolute",
    marginTop: -33.5,
    marginLeft: -52.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text21: {
    position: "absolute",
    marginTop: -33.5,
    marginLeft: -101.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text22: {
    position: "absolute",
    marginTop: -33.5,
    top: "50%",
    left: 8,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text23: {
    position: "absolute",
    marginTop: -73.5,
    top: "50%",
    right: 6,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text24: {
    position: "absolute",
    marginTop: -73.5,
    marginLeft: 84.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text25: {
    position: "absolute",
    marginTop: -73.5,
    marginLeft: 38.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text26: {
    position: "absolute",
    marginTop: -73.5,
    marginLeft: -5.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text27: {
    position: "absolute",
    marginTop: -73.5,
    marginLeft: -49.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text28: {
    position: "absolute",
    marginTop: -73.5,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text29: {
    position: "absolute",
    marginTop: -73.5,
    top: "50%",
    left: 8,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text30: {
    position: "absolute",
    top: 0,
    right: 9,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
  },
  text31: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.6,
  },
  text32: {
    position: "absolute",
    top: 0,
    left: 43,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.6,
  },
  text33: {
    position: "absolute",
    marginLeft: -54.5,
    top: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.6,
  },
  text34: {
    position: "absolute",
    marginLeft: -12.5,
    top: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.6,
  },
  text35: {
    position: "absolute",
    marginLeft: 31.5,
    top: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.6,
  },
  text36: {
    position: "absolute",
    marginLeft: 77.5,
    top: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "center",
    opacity: 0.6,
  },
  text37: {
    position: "absolute",
    marginLeft: -48.5,
    bottom: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.6,
  },
  text38: {
    position: "absolute",
    marginLeft: -5.5,
    bottom: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.6,
  },
  text39: {
    position: "absolute",
    marginLeft: 38.5,
    bottom: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.6,
  },
  text40: {
    position: "absolute",
    marginLeft: 84.5,
    bottom: 0,
    left: "50%",
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.6,
  },
  text41: {
    position: "absolute",
    right: 6,
    bottom: 0,
    fontSize: 19,
    fontFamily: "SF UI  Text",
    color: "#544738",
    textAlign: "left",
    opacity: 0.6,
  },
  dasJULIOView: {
    position: "relative",
    width: 293,
    height: 219,
  },
  agendaText: {
    position: "relative",
    fontSize: 22,
    fontFamily: "SF UI Text",
    color: "#f85d5a",
    textAlign: "center",
  },
  rectngulo25View: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#ead1b6",
    width: 333,
    height: 59,
    opacity: 0.5,
  },
  nocheDeLuna: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  rectngulo26View: {
    position: "relative",
    borderRadius: 11,
    backgroundColor: "#62b461",
    width: 87,
    height: 21,
  },
  elipse7Icon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  text42: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI  Text",
    color: "#fff",
    textAlign: "left",
  },
  planetarioDeCajeme: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.6,
  },
  rectngulo27View: {
    position: "relative",
    borderRadius: 24,
    backgroundColor: "#ead1b6",
    width: 333,
    height: 59,
    opacity: 0.5,
  },
  showDeLuces: {
    position: "relative",
    fontSize: 18,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  rectngulo28View: {
    position: "relative",
    borderRadius: 11,
    backgroundColor: "#f85d5a",
    width: 87,
    height: 21,
  },
  elipse8Icon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  text43: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI  Text",
    color: "#fff",
    textAlign: "left",
  },
  lagunaDelNainari: {
    position: "relative",
    fontSize: 12,
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
    opacity: 0.6,
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

export default Screen4;
