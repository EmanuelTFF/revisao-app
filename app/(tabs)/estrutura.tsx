import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
 
export default function Tabestrutura() {
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
        <ThemedText type="title">estrutura</ThemedText>
      </ThemedView>
      <ThemedText>A organização de um projeto Expo geralmente segue uma estrutura padrão para facilitar a gestão e desenvolvimento do aplicativo. O diretório raiz contém o arquivo package.json, que é responsável por listar as dependências do projeto e as configurações de execução, além de outros arquivos de configuração importantes, como app.json ou app.config.js, que controlam a configuração do aplicativo no Expo. Dentro da pasta assets, ficam armazenados os recursos como imagens, fontes e ícones utilizados no aplicativo. A pasta node_modules contém todas as dependências do projeto que são instaladas via npm ou yarn.
 
A pasta src é onde o código-fonte do aplicativo é desenvolvido. Dentro dela, normalmente se encontra a pasta components, que armazena componentes reutilizáveis, e a pasta screens, que contém as diferentes telas do aplicativo. A pasta navigation pode ser usada para armazenar arquivos relacionados à navegação entre as telas. No caso de projetos mais complexos, também pode haver pastas para redux, hooks personalizados ou utils, que contêm funções auxiliares.
 
No geral, a estrutura de pastas e arquivos em um projeto Expo visa manter uma organização modular e escalável, facilitando o desenvolvimento, manutenção e colaboração entre os desenvolvedores.</ThemedText>
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
 