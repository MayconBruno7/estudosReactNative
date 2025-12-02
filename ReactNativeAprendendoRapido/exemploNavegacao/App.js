import { Button, StatusBar, Text } from "react-native"
import { SafeAreaView } from "react-native-web"

const { Fragment } = require("react")

const App = props => {
  return (
    <Fragment>
      <StatusBar barStyle='dark-content'>
        <SafeAreaView>
          <Text>Teste</Text>

          <Button 
            title="Sobre" 
            onPress = { () => props.navigation.navigate("Sobre") }>
          </Button>
        </SafeAreaView>
      </StatusBar>
    </Fragment>
  )
}

export default App;