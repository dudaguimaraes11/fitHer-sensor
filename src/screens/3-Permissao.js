import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Permissao({ irPara }) {

  return (
    <View style={styles.container}>

      <View style={styles.conteudo}>

        {/* TOPO */}

        <View style={styles.header}>

          <View style={styles.logoArea}>

            <View style={styles.logoIcone}>
              <MaterialCommunityIcons
                name="spa"
                size={18}
                color="#600126"
              />
            </View>

            <Text style={styles.logo}>
              FitHer
            </Text>

          </View>

          <View style={styles.etapa}>

            <MaterialCommunityIcons
              name="shield-check"
              size={14}
              color="#A93349"
            />

            <Text style={styles.textoEtapa}>
              ETAPA 3 DE 3
            </Text>

          </View>

        </View>

        {/* ILUSTRAÇÃO */}

        <View style={styles.hero}>

          <View style={styles.circuloExterno} />

          <View style={styles.circuloMeio} />

          <View style={styles.circuloInterno} />

          <View style={styles.capsula}>

            <View style={styles.iconePassos}>

              <MaterialCommunityIcons
                name="walk"
                size={44}
                color="#600126"
              />

            </View>

            {/* ÍCONE DO CELULAR */}

            <View style={styles.badgeCelular}>

              <MaterialCommunityIcons
                name="cellphone"
                size={21}
                color="#FFFFFF"
              />

            </View>

          </View>

        </View>

        {/* TÍTULO E DESCRIÇÃO */}

        <View style={styles.textos}>

          <Text style={styles.titulo}>
            Vamos acompanhar seus passos?
          </Text>

          <Text style={styles.descricao}>
            Para contar seus passos e acompanhar seu
            progresso diário, o FitHer precisa acessar o
            sensor de movimento do seu celular.
          </Text>

        </View>

        {/* CARD DE PRIVACIDADE */}

        <View style={styles.card}>

          <View style={styles.cardTopo}>

            <View style={styles.iconeSeguranca}>

              <MaterialCommunityIcons
                name="lock"
                size={21}
                color="#A93349"
              />

            </View>

            <View style={styles.cardTextos}>

              <Text style={styles.tituloCard}>
                Privacidade protegida
              </Text>

              <Text style={styles.textoCard}>
                Os dados serão utilizados para calcular o
                progresso da sua atividade diária com
                segurança e privacidade.
              </Text>

            </View>

          </View>

          {/* BENEFÍCIOS */}

          <View style={styles.beneficios}>

            <View style={styles.beneficio}>

              <MaterialCommunityIcons
                name="battery-charging"
                size={17}
                color="#600126"
              />

              <Text style={styles.textoBeneficio}>
                Baixo consumo
              </Text>

            </View>

            <View style={styles.beneficio}>

              <MaterialCommunityIcons
                name="cloud-off-outline"
                size={17}
                color="#600126"
              />

              <Text style={styles.textoBeneficio}>
                100% no celular
              </Text>

            </View>

          </View>

        </View>

        {/* BOTÕES */}

        <View style={styles.botoes}>

          <TouchableOpacity
            style={styles.botaoPrincipal}
            onPress={() => irPara('home')}
            activeOpacity={0.9}
          >

            <Text style={styles.textoBotaoPrincipal}>
              Permitir acesso
            </Text>

            <MaterialCommunityIcons
              name="arrow-right"
              size={19}
              color="#FFFFFF"
            />

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() => irPara('permission-denied')}
            activeOpacity={0.9}
          >

            <Text style={styles.textoBotaoSecundario}>
              Agora não
            </Text>

          </TouchableOpacity>

        </View>

        {/* AVISO */}

        <Text style={styles.aviso}>
          Você poderá alterar essa preferência a qualquer momento
          nas configurações.
        </Text>

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
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  /* TOPO */

  header: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcone: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FCE9EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  logo: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 18,
    color: '#600126',
    letterSpacing: -0.4,
  },

  etapa: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#FFF0F3',
  },

  textoEtapa: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 10,
    letterSpacing: 0.8,
    color: '#A93349',
  },

  /* ILUSTRAÇÃO */

  hero: {
    width: '100%',
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 18,
    paddingBottom: 12,
  },

  circuloExterno: {
    position: 'absolute',
    width: 224,
    height: 224,
    borderRadius: 112,
    backgroundColor: '#F6E4E8',
    opacity: 0.7,
  },

  circuloMeio: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFF0F3',
  },

  circuloInterno: {
    position: 'absolute',
    width: 168,
    height: 168,
    borderRadius: 84,
    backgroundColor: '#FCE9EE',
    opacity: 0.9,
  },

  capsula: {
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,

    shadowColor: '#600126',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  iconePassos: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FCE9EE',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 1,
  },

  badgeCelular: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#7F1D3B',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 4,

    shadowColor: '#600126',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  /* TEXTOS */

  textos: {
    alignItems: 'center',
    paddingHorizontal: 2,
    marginTop: 4,
  },

  titulo: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 28,
    lineHeight: 36,
    color: '#600126',
    textAlign: 'center',
    maxWidth: 280,
  },

  descricao: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#554245',
    textAlign: 'center',
    maxWidth: 320,
    marginTop: 8,
  },

  /* CARD */

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,

    elevation: 2,

    shadowColor: '#600126',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardTopo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  iconeSeguranca: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  cardTextos: {
    flex: 1,
  },

  tituloCard: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#22191C',
  },

  textoCard: {
    fontFamily: 'PlusJakartaSans_500Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#554245',
    marginTop: 2,
  },

  /* BENEFÍCIOS */

  beneficios: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF0F3',
  },

  beneficio: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  textoBeneficio: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
    color: '#554245',
  },

  /* BOTÕES */

  botoes: {
    width: '100%',
    marginTop: 22,
    gap: 12,
  },

  botaoPrincipal: {
    width: '100%',
    height: 56,
    borderRadius: 30,
    backgroundColor: '#7F1D3B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,

    elevation: 5,

    shadowColor: '#7F1D3B',
    shadowOpacity: 0.20,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  textoBotaoPrincipal: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },

  botaoSecundario: {
    width: '100%',
    height: 48,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 2,

    shadowColor: '#600126',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  textoBotaoSecundario: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
    color: '#A93349',
  },

  /* AVISO */

  aviso: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 10,
    lineHeight: 14,
    color: '#887175',
    textAlign: 'center',
    marginTop: 14,
    paddingHorizontal: 8,
  },

});