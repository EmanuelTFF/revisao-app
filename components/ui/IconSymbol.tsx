import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Mapeamento de SF Symbols para MaterialIcons
const MAPPING: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  'engineering': 'engineering',
  'person': 'person',
  'movie': 'movie',
  'computer': 'computer',
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
};

// Definição dos nomes de ícones suportados
export type IconSymbolName = keyof typeof MAPPING;

/**
 * Um componente de ícone que usa SF Symbols no iOS e MaterialIcons no Android/Web.
 * Isso garante uma aparência consistente entre as plataformas.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
