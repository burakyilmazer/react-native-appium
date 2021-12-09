/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <TouchableOpacity
      testID="alertButton"
      style={{width: 100, height: 100, backgroundColor: 'aqua'}}
      onPress={() => alert('Hello')}>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
};

export default App;
