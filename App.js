import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import Timeline from './src/components/Timeline';

const App = () => {
  return (
    <View>
      <Header />
      <Timeline />
    </View>
  );
};

export default App;
