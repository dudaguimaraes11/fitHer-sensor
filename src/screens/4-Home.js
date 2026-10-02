
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import Header from '../components/Header';

export default function Home({ irPara }) {
  return (
    <View style={styles.container}>

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        <View style={styles.greetingContainer}>

          <View style={styles.greeting}>

            <View style={styles.greetingText}>

              <Text style={styles.greetingTitle}>
                Olá!
              </Text>

              <Text style={styles.greetingSubtitle}>
                Vamos continuar em movimento?
              </Text>

            </View>

            <TouchableOpacity style={styles.notification}>

              <Ionicons
                name="notifications-outline"
                size={22}
                color="#600126"
              />

              <View style={styles.notificationDot} />

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.cardMargin}>

          <View style={styles.stepsCard}>

            <View style={styles.cardHeader}>

              <View style={styles.cardTitleArea}>

                <View style={styles.stepsIcon}>
                  <Ionicons
                    name="footsteps-outline"
                    size={23}
                    color="#600126"
                  />
                </View>

                <View>

                  <Text style={styles.cardLabel}>
                    ATIVIDADE
                  </Text>

                  <Text style={styles.cardTitle}>
                    Passos de hoje
                  </Text>

                </View>

              </View>

              <View style={styles.goalBadge}>

                <Text style={styles.goalText}>
                  Meta diária
                </Text>

              </View>

            </View>

            <View style={styles.stepMetrics}>

              <View style={styles.stepNumberArea}>

                <Text style={styles.stepNumber}>
                  6.842
                </Text>

                <Text style={styles.stepUnit}>
                  passos
                </Text>

              </View>

              <Text style={styles.expectedSteps}>
                de 8.000 passos previstos
              </Text>

            </View>

            <View style={styles.progressBackground}>
              <View style={styles.progressFill} />
            </View>

            <View style={styles.subMetrics}>

              <View style={styles.metricCard}>

                <View style={styles.metricIcon}>
                  <Ionicons
                    name="navigate-outline"
                    size={16}
                    color="#600126"
                  />
                </View>

                <View>

                  <Text style={styles.metricValue}>
                    4,8 km
                  </Text>

                  <Text style={styles.metricLabel}>
                    DISTÂNCIA
                  </Text>

                </View>

              </View>

              <View style={styles.metricCard}>

                <View style={styles.metricIcon}>
                  <MaterialCommunityIcons
                    name="fire"
                    size={17}
                    color="#600126"
                  />
                </View>

                <View>

                  <Text style={styles.metricValue}>
                    326 kcal
                  </Text>

                  <Text style={styles.metricLabel}>
                    CALORIAS
                  </Text>

                </View>

              </View>

            </View>

          </View>

        </View>

        <View style={styles.cardMargin}>

          <View style={styles.dailyCard}>

            <View style={styles.dailyContent}>

              <View style={styles.progressCircle}>

                <Text style={styles.progressPercent}>
                  85%
                </Text>

              </View>

              <View style={styles.dailyText}>

                <Text style={styles.dailyTitle}>
                  Meta diária
                </Text>

                <Text style={styles.dailySubtitle}>
                  85% concluída
                </Text>

                <Text style={styles.dailyDescription}>
                  Quase lá! Faltam apenas 1.158 passos
                </Text>

              </View>

            </View>

            <TouchableOpacity style={styles.actionButton}>

              <Text style={styles.actionText}>
                Ver detalhes
              </Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.cardMargin}>

          <View style={styles.motivationCard}>

            <View style={styles.motivationIcon}>

              <Ionicons
                name="heart"
                size={19}
                color="#600126"
              />

            </View>

            <View style={styles.motivationText}>

              <Text style={styles.motivationTitle}>
                Cada passo conta
              </Text>

              <Text style={styles.motivationDescription}>
                Pequenos movimentos ao longo do dia
                ajudam você a manter uma rotina ativa.
              </Text>

            </View>

          </View>

        </View>

        <View style={styles.cardMargin}>

          <View style={styles.storyCard}>

            {/* Imagem protegida com fallback caso o arquivo não exista */}
            <ImageBackground
              source={
                tryRequireImage() 
                  ? require('../../assets/imageHome.png') 
                  : { uri: 'https://via.placeholder.com/400x200' }
              }
              style={styles.storyImage}
              imageStyle={styles.storyImageRadius}
            >

              <View style={styles.storyOverlay} />

              <Text style={styles.storyLabel}>
                DICA DO DIA
              </Text>

              <Text style={styles.storyTitle}>
                Caminhada Consciente de 10min
              </Text>

              <Text style={styles.storySubtitle}>
                RENOVE SUA MENTE
              </Text>

            </ImageBackground>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}

function tryRequireImage() {
  try {
    return require('../../assets/imageHome.png');
  } catch (e) {
    return null;
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },

  scrollContent: {
    paddingTop: 24,
    paddingBottom: 40,
  },

  greetingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 18,
  },

  greeting: {
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  greetingText: {
    flex: 1,
    paddingRight: 12,
  },

  greetingTitle: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 28,
    lineHeight: 36,
    color: '#600126',
    letterSpacing: -0.7,
  },

  greetingSubtitle: {
    marginTop: 2,
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#554245',
  },

  notification: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F6E4E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FE7488',
    right: 4,
    top: 4,
    borderWidth: 2,
    borderColor: '#FFF8F8',
  },

  cardMargin: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  stepsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#7F1D3B',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 4,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  stepsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6E4E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  cardLabel: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
    color: '#A93349',
  },

  cardTitle: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 18,
    lineHeight: 22,
    color: '#22191C',
  },

  goalBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: '#F6E4E8',
    marginLeft: 8,
  },

  goalText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
    color: '#600126',
  },

  stepMetrics: {
    marginTop: 16,
  },

  stepNumberArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stepNumber: {
    fontFamily: 'PlusJakartaSans_800ExtraBold',
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -0.9,
    color: '#600126',
  },

  stepUnit: {
    marginLeft: 4,
    marginTop: 10,
    fontFamily: 'PlusJakartaSans_500Medium',
    fontSize: 14,
    color: '#554245',
  },

  expectedSteps: {
    marginTop: 4,
    fontFamily: 'PlusJakartaSans_500Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#554245',
  },

  progressBackground: {
    width: '100%',
    height: 12,
    marginTop: 8,
    backgroundColor: '#FCE9EE',
    borderRadius: 20,
    overflow: 'hidden',
  },

  progressFill: {
    width: '85%',
    height: '100%',
    backgroundColor: '#7F1D3B',
    borderRadius: 20,
  },

  subMetrics: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: -4,
  },

  metricCard: {
    flex: 1,
    height: 58,
    backgroundColor: '#FFF0F3',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },

  metricIcon: {
    width: 28,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0DEE3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  metricValue: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 14,
    lineHeight: 20,
    color: '#600126',
  },

  metricLabel: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: '#554245',
  },

  dailyCard: {
    minHeight: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#7F1D3B',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },

  dailyContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  progressCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 5,
    borderColor: '#7F1D3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  progressPercent: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 12,
    color: '#600126',
  },

  dailyText: {
    flex: 1,
  },

  dailyTitle: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 18,
    lineHeight: 26,
    color: '#22191C',
  },

  dailySubtitle: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
    lineHeight: 18,
    color: '#A93349',
  },

  dailyDescription: {
    marginTop: 2,
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 10,
    lineHeight: 14,
    color: '#554245',
  },

  actionButton: {
    width: 97,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#7F1D3B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginLeft: 8,
  },

  actionText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  motivationCard: {
    minHeight: 88,
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#FCE9EE',
    flexDirection: 'row',
    alignItems: 'center',
  },

  motivationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  motivationText: {
    flex: 1,
  },

  motivationTitle: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#600126',
  },

  motivationDescription: {
    marginTop: 2,
    fontFamily: 'PlusJakartaSans_500Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#554245',
  },

  storyCard: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
  },

  storyImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: 15,
  },

  storyImageRadius: {
    borderRadius: 12,
  },

  storyOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(60, 10, 25, 0.38)',
  },

  storyLabel: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFEFF2',
  },

  storyTitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 18,
    lineHeight: 26,
    color: '#FFFFFF',
  },

  storySubtitle: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },

});