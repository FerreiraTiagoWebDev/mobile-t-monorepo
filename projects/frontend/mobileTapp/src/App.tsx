import defaultTheme from '@/mobileTapp/globalStyles';
import {Text, View} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme as DefaultTheme}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: defaultTheme.palette.grey200,
          alignItems: 'center',
        }}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          backgroundColor: defaultTheme.palette.grey200,
          alignItems: 'center',
        }}>
        <Text>Try editing me! 🎉</Text>
      </View>
    </ThemeProvider>
  );
}

export default App;
