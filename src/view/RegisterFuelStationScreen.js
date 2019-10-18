import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import HearderComponent from "../components/HeaderComponent";
import ButtonAvatarComponent from "../components/ButtonAvatarComponent";

const iconGasPump = <FontAwesomeIcon icon={faGasPump} />;
export function navigationOptions({ navigation }) {
  return {
    title: "posto de Gasolina",
    HeaderStyle: {
      backgroundColor: "#f4511e"
    },
    drawerIcon: iconGasPump
  };
}
const RegisterFullSatitonScreen = props => {
  const { navigate } = props.navigation;
  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
        <HearderComponent {...props} title="posto de gasolina" icone="home" />
        <ScrollView>
          <View style={style.containerBody}>
            <ButtonAvatarComponent
              size="xlarge"
              iconColor="#2089dc"
              name="plus"
              subTitle="Adicionar"
              {...props}
              onPress={() => {
                navigate("Adicionar");
              }}
            />
            <ButtonAvatarComponent
              size="xlarge"
              iconColor="#2089dc"
              name="plus"
              subTitle="Adicionar"
              {...props}
              onPress={() => {
                navigate("Adicionar");
              }}
            />
            <ButtonAvatarComponent
              size="xlarge"
              iconColor="#2089dc"
              name="plus"
              subTitle="Adicionar"
              {...props}
              onPress={() => {
                navigate("Adicionar");
              }}
            />
            <ButtonAvatarComponent
              size="xlarge"
              iconColor="#2089dc"
              name="plus"
              subTitle="Adicionar"
              {...props}
              onPress={() => {
                navigate("Adicionar");
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const Screen = {
  screen: RegisterFullSatitonScreen,
  navigationOptions,
  params: {
    navigationType: "drawer"
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  containerHeader: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center"
  },
  containerBody: {
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default Screen;
