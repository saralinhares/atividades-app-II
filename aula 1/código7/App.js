import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

export default function Formulario() {
  const [nome, setNome] = useState('');

  return (
    <View>
      <Text>Digite seu nome:</Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text>Olá, {nome}!</Text>
    </View>
  );
}