import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './Components/Main';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StoreProvider store={store}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </StoreProvider>
      </View>
    )
  }
}

export default App;