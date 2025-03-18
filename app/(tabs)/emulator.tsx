import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
 
export default function TabEmulator() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">config</ThemedText>
      </ThemedView>
      <ThemedText>Passo 1: Instalar ferramentas
Instalar Node.js: Baixe e instale o Node.js aqui.
Instalar Expo CLI: No terminal, execute:
nginx
Copiar
npm install -g expo-cli
Passo 2: Baixar o projeto
Clonar o repositório ou descompactar o arquivo do projeto Expo no seu computador.
Ir para a pasta do projeto no terminal:
arduino
Copiar
cd nome-do-projeto
Passo 3: Instalar dependências
No terminal, execute:
nginx
Copiar
npm install
Passo 4: Configurar o Android Studio
Instalar o Android Studio aqui.
Criar um emulador Android no Android Studio (usando o AVD Manager).
Passo 5: Rodar o projeto
No terminal, execute:
sql
Copiar
expo start
No painel que abrir, clique em "Run on Android device/emulator" para rodar no emulador.
Passo 6: (Opcional) Rodar diretamente no Android Studio
Abra a pasta android do seu projeto no Android Studio.
Clique em Run no Android Studio para rodar no emulador.
Pronto! O projeto estará rodando no emulador Android.</ThemedText>
    </ParallaxScrollView>
  );
}
 
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
