import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
} from 'react-native-svg';

import {
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';

import { useFonts } from 'expo-font';

export default function Onboarding({ irPara }) {

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_600SemiBold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <View style={styles.conteudo}>

        <View style={styles.header}>

          <View style={styles.progresso}>

            <View style={styles.progressoAtivo} />

            <View style={styles.progressoInativo} />

            <View style={styles.progressoInativo} />

          </View>

          <TouchableOpacity
            onPress={() => irPara('permissao')}
          >
            <Text style={styles.pular}>
              Pular
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.ilustracao}>

          <View style={styles.fundoIlustracao} />

          <View style={styles.circuloBranco} />

          <Svg
            width="100%"
            height="100%"
            viewBox="0 0 320 320"
            style={styles.svg}
          >

            <Path
              d="M40 220C80 250 110 170 160 190C210 210 240 140 280 150"
              stroke="#FCE9EE"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            <Path
              d="M50 200C90 220 120 150 160 170C200 190 230 130 270 140"
              stroke="#FE7488"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.3"
              fill="none"
            />

            <Path
              d="M70 195C105 210 135 145 165 160C195 175 220 125 250 135"
              stroke="#7F1D3B"
              strokeWidth="3"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
            />

            <Circle
              cx="85"
              cy="110"
              r="26"
              fill="#FFD9DE"
              fillOpacity="0.7"
            />

            <Circle
              cx="235"
              cy="80"
              r="16"
              fill="#FCE9EE"
            />

            <Circle
              cx="250"
              cy="225"
              r="32"
              fill="#FFD9DD"
              fillOpacity="0.5"
            />

            <G>

              <Rect
                x="132"
                y="100"
                width="56"
                height="56"
                rx="28"
                fill="#7F1D3B"
              />

              <Path
                d="M153 134C150 131 150 124 155 120C160 116 167 118 168 124C169 130 165 136 159 136C156 136 154 135 153 134Z"
                fill="#FFFFFF"
              />

              <Circle
                cx="168"
                cy="117"
                r="3.5"
                fill="#FFFFFF"
              />

              <Circle
                cx="162"
                cy="114"
                r="2.5"
                fill="#FFFFFF"
              />

              <Circle
                cx="156"
                cy="115"
                r="2"
                fill="#FFFFFF"
              />

              <Circle
                cx="151"
                cy="117"
                r="1.8"
                fill="#FFFFFF"
              />

            </G>

          </Svg>


          <View style={styles.badgeRitmo}>

            <View style={styles.iconeCoracao}>
              <Text style={styles.coracao}>
                ♥
              </Text>
            </View>

            <Text style={styles.textoBadge}>
              Ritmo leve
            </Text>

          </View>

          {/* DECORAÇÃO SUPERIOR */}

          <View style={styles.badgeSuperior}>

            <Text style={styles.seta}>
              ‹
            </Text>

          </View>

        </View>

        <View style={styles.textos}>

          <View style={styles.badgeBemEstar}>

            <Text style={styles.iconeNatureza}>
              ♧
            </Text>

            <Text style={styles.textoBemEstar}>
              BEM-ESTAR FEMININO
            </Text>

          </View>

          <Text style={styles.titulo}>
            Conheça o FitHer
          </Text>

          <Text style={styles.descricao}>
            Acompanhe seus passos, acompanhe seu
            progresso e crie metas para manter uma
            rotina mais ativa.
          </Text>

        </View>


        <View style={styles.footer}>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => irPara('permissao')}
          >

            <Text style={styles.textoBotao}>
              Começar
            </Text>

            <Text style={styles.setaBotao}>
              →
            </Text>

          </TouchableOpacity>

          {/* INDICADORES */}

          <View style={styles.pontos}>

            <View style={styles.pontoAtivo} />

            <View style={styles.ponto} />

            <View style={styles.ponto} />

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },


  header: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progresso: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  progressoAtivo: {
    width: 24,
    height: 6,
    borderRadius: 10,
    backgroundColor: '#7F1D3B',
  },

  progressoInativo: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: '#F0DEE3',
  },

  pular: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
    color: '#554245',
  },

  ilustracao: {
    width: '100%',
    maxWidth: 340,
    aspectRatio: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 8,
    marginBottom: 14,
  },

  fundoIlustracao: {
    position: 'absolute',
    width: '92%',
    height: '92%',
    borderRadius: 999,
    backgroundColor: '#FCE9EE',
    opacity: 0.65,
  },

  circuloBranco: {
    position: 'absolute',
    width: 224,
    height: 224,
    borderRadius: 112,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#600126',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  svg: {
    position: 'absolute',
  },

  badgeRitmo: {
    position: 'absolute',
    left: 4,
    bottom: 4,
    height: 42,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    elevation: 4,

    shadowColor: '#600126',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  iconeCoracao: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFDADC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  coracao: {
    color: '#7F1D3B',
    fontSize: 13,
  },

  textoBadge: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
    color: '#22191C',
  },

  badgeSuperior: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FCE9EE',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 2,
  },

  seta: {
    color: '#7F1D3B',
    fontSize: 24,
    lineHeight: 24,
    marginTop: -3,
  },

  textos: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  badgeBemEstar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F6E4E8',
    marginBottom: 10,
  },

  iconeNatureza: {
    color: '#7F1D3B',
    fontSize: 14,
  },

  textoBemEstar: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 10,
    letterSpacing: 0.8,
    color: '#7F1D3B',
  },

  titulo: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 32,
    lineHeight: 40,
    color: '#7F1D3B',
    textAlign: 'center',
    marginBottom: 8,
  },

  descricao: {
    maxWidth: 290,
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#554245',
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 22,
  },

  botao: {
    width: '100%',
    height: 56,
    borderRadius: 30,
    backgroundColor: '#7F1D3B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

    elevation: 5,

    shadowColor: '#7F1D3B',
    shadowOpacity: 0.20,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  textoBotao: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },

  setaBotao: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: -2,
  },

  pontos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 18,
  },

  pontoAtivo: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7F1D3B',
  },

  ponto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DBC0C3',
  },

});