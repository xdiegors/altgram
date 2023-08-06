import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge" marginBottom="s8">
          Olá
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu email e senha para entrar
        </Text>
        <Box>
          <TextInput
            label="E-mail"
            placeholder="Digite seu email"
            boxProps={{mb: 's20'}}
          />
        </Box>
        <Box>
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{mb: 's10'}}
          />
        </Box>
        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
        <Button marginTop="s48" title="Entrar" />
        <Button preset="outline" marginTop="s12" title="Criar uma conta" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
