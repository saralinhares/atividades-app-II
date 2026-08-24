import React from 'react';
import { Image, View } from 'react-native';

export default function App() {
  return (
    <View>
      {/* Imagem da internet */}
      <Image
        source={{ uri: 'https://site.com/foto.png' }}
        style={{ width: 100, height: 100 }}
      />

      {/* Imagem local */}
      <Image
        source={require('./logo.png')}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}