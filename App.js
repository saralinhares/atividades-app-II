
// exemplo 1
// import React, { createContext, useContext, useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const TemaContext = createContext();

// function Home() {
//   const { modo, alternarTema } = useContext(TemaContext);

//   return (
//     <View>
//       <Text>Tema atual: {modo}</Text>
//       <Button title="Trocar tema" onPress={alternarTema} />
//     </View>
//   );
// }

// export default function App() {
//   const [modo, setModo] = useState('claro');

//   function alternarTema() {
//     setModo(m => (m === 'claro' ? 'escuro' : 'claro'));
//   }

//   return (
//     <TemaContext.Provider value={{ modo, alternarTema }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Home />
//       </View>
//     </TemaContext.Provider>
//   );
// }
// exemplo 2
// import React, { createContext, useContext, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const TemaContext = createContext();

// const cores = {
//   claro: {
//     fundo: '#FFFFFF',
//     texto: '#111111',
//     primaria: '#6200EE',
//   },
//   escuro: {
//     fundo: '#121212',
//     texto: '#EEEEEE',
//     primaria: '#BB86FC',
//   },
// };

// function TemaProvider({ children }) {
//   const [modo, setModo] = useState('claro');

//   function alternarTema() {
//     setModo(m => (m === 'claro' ? 'escuro' : 'claro'));
//   }

//   return (
//     <TemaContext.Provider
//       value={{ modo, cores: cores[modo], alternarTema }}
//     >
//       {children}
//     </TemaContext.Provider>
//   );
// }

// function Home() {
//   const { modo, cores, alternarTema } = useContext(TemaContext);

//   return (
//     <View
//       style={[
//         styles.container,
//         { backgroundColor: cores.fundo },
//       ]}
//     >
//       <Text style={[styles.titulo, { color: cores.texto }]}>
//         Tema atual: {modo}
//       </Text>

//       <Button
//         title="Trocar tema"
//         color={cores.primaria}
//         onPress={alternarTema}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <TemaProvider>
//       <Home />
//     </TemaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 16,
//   },
//   titulo: {
//     fontSize: 24,
//   },
// });
// exemplo 3
// import React, { createContext, useContext, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
// } from 'react-native';

// const AuthContext = createContext(null);

// function AuthProvider({ children }) {
//   const [usuario, setUsuario] = useState(null);

//   function login(email, senha) {
//     if (senha !== '123456') return false;

//     setUsuario({
//       nome: email.split('@')[0],
//       email,
//     });

//     return true;
//   }

//   function logout() {
//     setUsuario(null);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         usuario,
//         logado: !!usuario,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   const contexto = useContext(AuthContext);

//   if (!contexto) {
//     throw new Error('useAuth fora do <AuthProvider>');
//   }

//   return contexto;
// }

// function Login() {
//   const { login } = useAuth();

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [erro, setErro] = useState('');

//   function entrar() {
//     const ok = login(email, senha);

//     if (!ok) {
//       setErro('Senha incorreta (dica: 123456)');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Login</Text>

//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={senha}
//         onChangeText={setSenha}
//       />

//       {erro ? (
//         <Text style={styles.erro}>{erro}</Text>
//       ) : null}

//       <Button title="Entrar" onPress={entrar} />
//     </View>
//   );
// }

// function Home() {
//   const { usuario, logout } = useAuth();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         Bem-vindo, {usuario.nome}!
//       </Text>

//       <Button title="Sair" onPress={logout} />
//     </View>
//   );
// }

// function Rotas() {
//   const { logado } = useAuth();

//   return logado ? <Home /> : <Login />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Rotas />
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     gap: 12,
//   },
//   titulo: {
//     fontSize: 28,
//     textAlign: 'center',
//   },
//   campo: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 8,
//     padding: 10,
//   },
//   erro: {
//     color: 'red',
//   },
// });


atv12
// exemplo 1 - useToggle
// import React, { useState } from 'react';
// import { experimental_LayoutConformance } from 'react-native';
// import {
//   View,
//   Text,
//   Switch,
//   StyleSheet,
// } from 'react-native';

// function useToggle(valorInicial = false) {
//   const [valor, setValor] = useState(valorInicial);

//   const alternar = () => setValor(v => !v);

//   return [valor, alternar];
// }

// export default function App() {
//   const [notificacoes, alternarNotificacoes] = useToggle(true);
//   const [modoAviao, alternarModoAviao] = useToggle();

//   return (
//     <View style={styles.container}>
//       <View style={styles.linha}>
//         <Text style={styles.texto}>
//           Notificações: {notificacoes ? 'ON' : 'OFF'}
//         </Text>

//         <Switch
//           value={notificacoes}
//           onValueChange={alternarNotificacoes}
//         />
//       </View>

//       <View style={styles.linha}>
//         <Text style={styles.texto}>
//           Modo avião: {modoAviao ? 'ON' : 'OFF'}
//         </Text>

//         <Switch
//           value={modoAviao}
//           onValueChange={alternarModoAviao}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 80,
//   },
//   linha: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//   },
//   texto: {
//     fontSize: 18,
//   },
// });

// exemplo 2 -useFetch
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';

// const usuarios = [
//   { id: 1, nome: 'Ana', email: 'ana@email.com' },
//   { id: 2, nome: 'Bruno', email: 'bruno@email.com' },
//   { id: 3, nome: 'Carla', email: 'carla@email.com' },
//   { id: 4, nome: 'Diego', email: 'diego@email.com' },
//   { id: 5, nome: 'Elisa', email: 'elisa@email.com' },
// ];

// const posts = Array.from({ length: 30 }, (_, i) => ({
//   id: i + 1,
//   titulo: `Post número ${i + 1}`,
//   texto: 'Conteúdo de exemplo do post.',
// }));

// function fakeFetch(url) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       let dados;
//       let status = 200;

//       if (url === '/usuarios') {
//         dados = usuarios;
//       } else if (url === '/posts') {
//         dados = posts;
//       } else {
//         status = 404;
//       }

//       resolve({
//         ok: status === 200,
//         status,
//         json: async () => dados,
//       });
//     }, 800);
//   });
// }

// function useFetch(url) {
//   const [dados, setDados] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);

//   useEffect(() => {
//     let cancelado = false;

//     async function carregar() {
//       setCarregando(true);
//       setErro(null);

//       try {
//         const resposta = await fakeFetch(url);

//         if (!resposta.ok) {
//           throw new Error(`Erro ${resposta.status}`);
//         }

//         const json = await resposta.json();

//         if (!cancelado) {
//           setDados(json);
//         }
//       } catch (e) {
//         if (!cancelado) {
//           setErro(e.message);
//         }
//       } finally {
//         if (!cancelado) {
//           setCarregando(false);
//         }
//       }
//     }

//     carregar();

//     return () => {
//       cancelado = true;
//     };
//   }, [url]);

//   return { dados, carregando, erro };
// }

// function Posts() {
//   const { dados, carregando, erro } = useFetch('/posts');

//   if (carregando) return <ActivityIndicator />;
//   if (erro) return <Text>{erro}</Text>;

//   return (
//     <Text style={styles.texto}>
//       {dados.length} posts carregados
//     </Text>
//   );
// }

// function Usuarios() {
//   const { dados, carregando, erro } = useFetch('/usuarios');

//   if (carregando) return <ActivityIndicator />;
//   if (erro) return <Text>{erro}</Text>;

//   return dados.map(u => (
//     <Text key={u.id} style={styles.texto}>
//       {u.nome}
//     </Text>
//   ));
// }

// function Inexistente() {
//   const { carregando, erro } = useFetch('/nada');

//   if (carregando) return <ActivityIndicator />;

//   return <Text style={styles.erro}>{erro}</Text>;
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Posts</Text>
//       <Posts />

//       <Text style={styles.titulo}>Usuários</Text>
//       <Usuarios />

//       <Text style={styles.titulo}>Endereço errado</Text>
//       <Inexistente />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//     gap: 4,
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 12,
//   },
//   texto: {
//     fontSize: 18,
//   },
//   erro: {
//     fontSize: 18,
//     color: 'red',
//   },
// });
// exemplo 3 - useForm
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   StyleSheet,
// } from 'react-native';

// function useForm(valoresIniciais, validar) {
//   const [valores, setValores] = useState(valoresIniciais);
//   const [erros, setErros] = useState({});

//   function alterar(campo, valor) {
//     setValores(ant => ({
//       ...ant,
//       [campo]: valor,
//     }));
//   }

//   function enviar(aoEnviar) {
//     const novosErros = validar(valores);

//     setErros(novosErros);

//     if (Object.keys(novosErros).length === 0) {
//       aoEnviar(valores);
//     }
//   }

//   function limpar() {
//     setValores(valoresIniciais);
//     setErros({});
//   }

//   return { valores, erros, alterar, enviar, limpar };
// }

// function validarLogin(v) {
//   const e = {};

//   if (!v.email.includes('@')) {
//     e.email = 'E-mail inválido';
//   }

//   if (v.senha.length < 6) {
//     e.senha = 'Mínimo de 6 caracteres';
//   }

//   return e;
// }

// function fazerLogin(v) {
//   Alert.alert('Sucesso', `Bem-vindo, ${v.email}`);
// }

// export default function App() {
//   const { valores, erros, alterar, enviar, limpar } =
//     useForm({ email: '', senha: '' }, validarLogin);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         value={valores.email}
//         onChangeText={t => alterar('email', t)}
//       />

//       {erros.email && (
//         <Text style={styles.erro}>{erros.email}</Text>
//       )}

//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={valores.senha}
//         onChangeText={t => alterar('senha', t)}
//       />

//       {erros.senha && (
//         <Text style={styles.erro}>{erros.senha}</Text>
//       )}

//       <Button
//         title="Entrar"
//         onPress={() => enviar(fazerLogin)}
//       />

//       <Button
//         title="Limpar"
//         color="#999"
//         onPress={limpar}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     gap: 8,
//   },
//   campo: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 8,
//     padding: 10,
//   },
//   erro: {
//     color: 'red',
//   },
// });