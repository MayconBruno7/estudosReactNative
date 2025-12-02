import { Fragment } from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-web";

const Sobre = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Sobre</Text>
      </SafeAreaView>
    </Fragment>
  );
};

export default Sobre;