import React from 'react';
import { Button, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      {/* Botão pronto */}
      <Button
        title="Clique"
        onPress={() => alert('Oi!')}
      />

      {/* Botão personalizado */}
      <TouchableOpacity onPress={() => alert('Toque!')}>
        <Text>Botão personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}