import React from 'react';
import { SafeAreaView, View } from 'react-native';

import Header from './src/components/Header';
import Timeline from './src/components/Timeline';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <Timeline />
    </SafeAreaView>
  );
};

export default App;
