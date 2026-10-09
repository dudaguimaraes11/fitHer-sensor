import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Pedometer } from 'expo-sensors';
import { SafeAreaView } from 'react-native-safe-area-context';

import Metas from './6-Metas';

const COLORS = {
  background: '#FFF8F8',
  white: '#FFFFFF',
  wine: '#7F1D3B',
  darkWine: '#600126',
  rose: '#A93349',
  lightRose: '#FCE9EE',
  paleRose: '#FFF0F3',
  text: '#22191C',
  muted: '#554245',
};

export default function AtividadeScreen() {
  const [passos, setPassos] = useState(6842);
  const [sensorDisponivel, setSensorDisponivel] = useState(false);
  const [meta, setMeta] = useState(8000);
  const [mostrarMetas, setMostrarMetas] = useState(false);

  const progresso = Math.min(passos / meta, 1);
  const percentual = Math.round(progresso * 100);

  useEffect(() => {
    let subscription;
    let ativo = true;

    async function iniciarSensor() {
      try {
        const disponivel = await Pedometer.isAvailableAsync();

        if (!ativo) return;

        setSensorDisponivel(disponivel);

        if (!disponivel) return;

        subscription = Pedometer.watchStepCount((result) => {
          if (ativo) {
            setPassos(result.steps);
          }
        });
      } catch (error) {
        console.warn('Não foi possível iniciar o pedômetro:', error);

        if (ativo) {
          setSensorDisponivel(false);
        }
      }
    }

    iniciarSensor();

    return () => {
      ativo = false;
      subscription?.remove();
    };
  }, []);

  function abrirMetas() {
    setMostrarMetas(true);
  }

  function voltarParaAtividade() {
    setMostrarMetas(false);
  }

  function salvarMeta(novaMeta) {
    const valor = Number(novaMeta);

    if (Number.isFinite(valor) && valor > 0) {
      setMeta(valor);
    }

    setMostrarMetas(false);
  }

  // Abre a tela de metas dentro desta tela,
  // mantendo o MenuInferior existente.
  if (mostrarMetas) {
    return (
      <Metas
        metaAtual={meta}
        onSalvarMeta={salvarMeta}
        irPara={voltarParaAtividade}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      />

      <View style={styles.screen}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoIcon}>❀</Text>
            </View>
            <Text style={styles.logoText}>FitHer</Text>
          </View>

          <View style={styles.headerRight}>
            <Text style={styles.headerPage}>Atividade</Text>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>F</Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Título */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.eyebrow}>
                SENSORIAMENTO EM TEMPO REAL
              </Text>
              <Text style={styles.pageTitle}>Sua atividade</Text>
            </View>

            <View style={styles.sensorBadge}>
              <View
                style={[
                  styles.sensorDot,
                  {
                    backgroundColor: sensorDisponivel
                      ? COLORS.darkWine
                      : '#999',
                  },
                ]}
              />
              <Text style={styles.sensorBadgeText}>
                {sensorDisponivel
                  ? 'Pedômetro ativo'
                  : 'Sensor indisponível'}
              </Text>
            </View>
          </View>

          {/* Cartão de atividade */}
          <View style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <View style={styles.activityIcon}>
                <Text style={styles.personIcon}>♟</Text>
              </View>

              <View style={styles.activityHeading}>
                <Text style={styles.cardTitle}>Movimento de Hoje</Text>
              </View>

              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>
                  {sensorDisponivel ? 'Sensor ativo' : 'Sensor inativo'}
                </Text>
              </View>
            </View>

            <View style={styles.stepsRow}>
              <Text style={styles.stepsNumber}>
                {passos.toLocaleString('pt-BR')}
              </Text>
              <Text style={styles.stepsLabel}>passos</Text>
            </View>

            <Text style={styles.stepsDescription}>
              ♡ Passadas com cadência constante e ritmo fluido
            </Text>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <View style={styles.statIcon}>
                  <Text>▤</Text>
                </View>
                <Text style={styles.statLabel}>Distância</Text>
                <Text style={styles.statValue}>
                  {(passos * 0.0007).toLocaleString('pt-BR', {
                    maximumFractionDigits: 1,
                  })}{' '}
                  km
                </Text>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statIcon}>
                  <Text>♨</Text>
                </View>
                <Text style={styles.statLabel}>Calorias</Text>
                <Text style={styles.statValue}>
                  {Math.round(passos * 0.047)} kcal
                </Text>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statIcon}>
                  <Text>◉</Text>
                </View>
                <Text style={styles.statLabel}>Progresso</Text>
                <Text style={styles.statValue}>{percentual}%</Text>
              </View>
            </View>
          </View>

          {/* Cartão de progresso da meta */}
          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <View style={styles.goalIcon}>
                <Text style={styles.goalIconText}>◎</Text>
              </View>

              <View style={styles.goalHeading}>
                <Text style={styles.goalTitle}>Progresso da meta</Text>
                <Text style={styles.goalSubtitle}>
                  Objetivo diário consciente
                </Text>
              </View>

              <View style={styles.percentBadge}>
                <Text style={styles.percentText}>{percentual}%</Text>
              </View>
            </View>

            {/* Indicador circular */}
            <View style={styles.progressArea}>
              <View style={styles.progressCircle}>
                <View
                  style={[
                    styles.progressArc,
                    {
                      borderTopColor: COLORS.rose,
                      borderRightColor: COLORS.rose,
                      transform: [
                        { rotate: `${progresso * 360 - 45}deg` },
                      ],
                    },
                  ]}
                />

                <View style={styles.progressInner}>
                  <Text style={styles.progressEyebrow}>
                    ATUAL / META
                  </Text>
                  <Text style={styles.progressNumbers}>
                    {passos.toLocaleString('pt-BR')} /{' '}
                    {meta.toLocaleString('pt-BR')}
                  </Text>
                  <Text style={styles.progressUnit}>passos</Text>
                </View>
              </View>
            </View>

            {/* Mensagem motivacional */}
            <View style={styles.motivationBox}>
              <View style={styles.heartCircle}>
                <Text style={styles.heart}>♥</Text>
              </View>

              <Text style={styles.motivationText}>
                Faltam{' '}
                <Text style={styles.motivationBold}>
                  {Math.max(meta - passos, 0).toLocaleString('pt-BR')} passos
                </Text>{' '}
                para atingir sua meta. Continue no seu tempo, você já foi
                incrível hoje!
              </Text>
            </View>

            {/* Botão Alterar meta */}
            <TouchableOpacity
              style={styles.changeGoalButton}
              activeOpacity={0.85}
              onPress={abrirMetas}
            >
              <Text style={styles.buttonIcon}>☷</Text>
              <Text style={styles.changeGoalText}>Alterar meta</Text>
            </TouchableOpacity>
          </View>

          {/* Dica de bem-estar */}
          <View style={styles.tipCard}>
            <View style={styles.tipImage}>
              <Text style={styles.tipImageEmoji}>🏃🏻‍♀️</Text>
            </View>

            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>
                Ritmo do seu bem-estar
              </Text>
              <Text style={styles.tipDescription}>
                Caminhar de forma atenta estimula a circulação e renova a
                mente.
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* A navegação inferior fica exclusivamente no MenuInferior.js */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: 64,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,248,248,0.96)',
    borderBottomWidth: 1,
    borderBottomColor: '#F9ECEF',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: COLORS.lightRose,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    color: COLORS.wine,
    fontSize: 21,
  },
  logoText: {
    color: COLORS.darkWine,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.45,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerPage: {
    color: COLORS.wine,
    fontSize: 13,
    fontWeight: '600',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D7B39C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 24,
    gap: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  eyebrow: {
    color: COLORS.rose,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  pageTitle: {
    marginTop: 3,
    color: COLORS.darkWine,
    fontSize: 22,
    fontWeight: '700',
  },
  sensorBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#F6E4E8',
  },
  sensorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  sensorBadgeText: {
    color: COLORS.muted,
    fontSize: 8,
    fontWeight: '600',
  },
  activityCard: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 16,
    gap: 9,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 18,
    elevation: 3,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  activityIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.lightRose,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personIcon: {
    color: COLORS.wine,
    fontSize: 16,
  },
  activityHeading: {
    flex: 1,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '600',
  },
  activeBadge: {
    backgroundColor: COLORS.paleRose,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    maxWidth: 90,
  },
  activeBadgeText: {
    color: COLORS.darkWine,
    fontSize: 8,
    fontWeight: '600',
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
    marginTop: 2,
  },
  stepsNumber: {
    color: COLORS.darkWine,
    fontSize: 29,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  stepsLabel: {
    color: COLORS.rose,
    fontSize: 13,
    fontWeight: '500',
  },
  stepsDescription: {
    color: COLORS.muted,
    fontSize: 9,
    marginTop: -7,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF5F7',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  statIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    color: COLORS.muted,
    fontSize: 9,
  },
  statValue: {
    color: COLORS.darkWine,
    fontSize: 12,
    fontWeight: '700',
  },
  goalCard: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 16,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 18,
    elevation: 3,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  goalIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.lightRose,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalIconText: {
    color: COLORS.darkWine,
    fontSize: 20,
    fontWeight: '700',
  },
  goalHeading: {
    flex: 1,
  },
  goalTitle: {
    color: COLORS.darkWine,
    fontSize: 14,
    fontWeight: '600',
  },
  goalSubtitle: {
    color: COLORS.muted,
    fontSize: 9,
    marginTop: 2,
  },
  percentBadge: {
    backgroundColor: '#F6E4E8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  percentText: {
    color: COLORS.darkWine,
    fontSize: 10,
    fontWeight: '700',
  },
  progressArea: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
  },
  progressCircle: {
    width: 154,
    height: 154,
    borderRadius: 77,
    borderWidth: 11,
    borderColor: COLORS.lightRose,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressArc: {
    position: 'absolute',
    width: 154,
    height: 154,
    borderRadius: 77,
    borderWidth: 11,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  progressInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressEyebrow: {
    color: COLORS.rose,
    fontSize: 7,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  progressNumbers: {
    color: COLORS.darkWine,
    fontSize: 12,
    fontWeight: '800',
    marginTop: 4,
  },
  progressUnit: {
    color: COLORS.muted,
    fontSize: 9,
    marginTop: 2,
  },
  motivationBox: {
    backgroundColor: COLORS.paleRose,
    borderRadius: 13,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
  },
  heartCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    color: COLORS.darkWine,
    fontSize: 14,
  },
  motivationText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 10,
    lineHeight: 15,
  },
  motivationBold: {
    color: COLORS.darkWine,
    fontWeight: '800',
  },
  changeGoalButton: {
    marginTop: 14,
    minHeight: 46,
    borderRadius: 25,
    backgroundColor: COLORS.wine,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: COLORS.wine,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonIcon: {
    color: COLORS.white,
    fontSize: 16,
  },
  changeGoalText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: COLORS.paleRose,
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tipImage: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#D8B7A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipImageEmoji: {
    fontSize: 23,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: COLORS.darkWine,
    fontSize: 10,
    fontWeight: '700',
  },
  tipDescription: {
    color: COLORS.muted,
    fontSize: 9,
    lineHeight: 13,
    marginTop: 2,
  },
});