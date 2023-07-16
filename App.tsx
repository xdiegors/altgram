import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24}}>
        <Text italic bold preset="headingLarge">
          OI
        </Text>
        <Box marginBottom="s24">
          <Button title="Clique" />
        </Box>
        <Button title="Carregou" loading />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
