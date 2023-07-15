import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text italic bold preset="headingLarge">
        OI
      </Text>
    </SafeAreaView>
  );
}

export default App;
