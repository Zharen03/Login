import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.rectngulo53View, styles.mt8]} />
      <Image
        style={[styles.whatsAppImage20220630At1, styles.mt_812, styles.mb1]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20220630-at-100422-pm.png")}
      />
      <Pressable
        style={[styles.rectngulo11Pressable, styles.mt_42]}
        onPress={() => navigation.navigate("Screen7")}
      />
      <View style={[styles.rectngulo47View, styles.mt_107, styles.mb1]} />
      <Text style={[styles.deslizaParaVerLasVisitasQ, styles.mt24, styles.mb1]}>
        Desliza para ver las visitas que realizaste
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt_812: {
    marginTop: -812,
  },
  mb1: {
    marginBottom: 1,
  },
  mt_42: {
    marginTop: -42,
  },
  mt_107: {
    marginTop: -107,
  },
  mt24: {
    marginTop: 24,
  },
  rectngulo53View: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 425,
    height: 819,
  },
  whatsAppImage20220630At1: {
    position: "relative",
    width: 430.26,
    height: 773,
  },
  rectngulo11Pressable: {
    position: "relative",
    borderRadius: 35,
    backgroundColor: "#ebdfd2",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 375,
    height: 120,
  },
  rectngulo47View: {
    position: "relative",
    borderRadius: 2,
    backgroundColor: "#8e8983",
    width: 70,
    height: 4,
    opacity: 0.62,
  },
  deslizaParaVerLasVisitasQ: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF UI  Text",
    color: "#8e7962",
    textAlign: "left",
  },
  view: {
    position: "relative",
    backgroundColor: "#efeae4",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Screen3;
