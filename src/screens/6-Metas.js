import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function MetasScreen({
  irPara,
  metaAtual = 8000,
  onSalvarMeta,
}) {
  const [meta, setMeta] = useState(Number(metaAtual) || 8000);

  useEffect(() => {
    setMeta(Number(metaAtual) || 8000);
  }, [metaAtual]);

  function formatarNumero(numero) {
    return Number(numero).toLocaleString('pt-BR');
  }

  function diminuirMeta() {
    setMeta((atual) => Math.max(500, atual - 500));
  }

  function aumentarMeta() {
    setMeta((atual) => Math.min(50000, atual + 500));
  }

  function salvar() {
    const valor = Number(meta);

    if (!Number.isFinite(valor) || valor < 500) {
      Alert.alert(
        'Meta inválida',
        'Escolha uma meta de pelo menos 500 passos.'
      );
      return;
    }

    onSalvarMeta?.(Math.floor(valor));
  }

  const sugestoes = [
    {
      valor: 5000,
      titulo: 'Leve',
      descricao:
        'Ideal para manter o movimento suave e sem pressa.',
      icone: 'walk-outline',
    },
    {
      valor: 8000,
      titulo: 'Recomendado',
      descricao:
        'Equilíbrio perfeito de vitalidade e bem-estar diário.',
      icone: 'heart',
    },
    {
      valor: 10000,
      titulo: 'Ativo',
      descricao:
        'Para dias com energia máxima e ritmo acelerado.',
      icone: 'flash',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF8F8"
      />

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Ionicons
              name="fitness"
              size={17}
              color="#8A1D40"
            />
          </View>

          <Text style={styles.logoText}>FitHer</Text>
        </View>

        <TouchableOpacity
          style={styles.activityHeader}
          onPress={() => irPara?.('atividade')}
          activeOpacity={0.7}
        >
          <Text style={styles.activityText}>Atividade</Text>

          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={17}
              color="#7F1D3B"
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* TÍTULO */}
        <View style={styles.intro}>
          <View style={styles.badge}>
            <Ionicons
              name="heart"
              size={12}
              color="#8A1D40"
            />

            <Text style={styles.badgeText}>
              Ritmo & Autocuidado
            </Text>
          </View>

          <Text style={styles.title}>Sua meta diária</Text>

          <Text style={styles.subtitle}>
            Escolha uma meta que faça sentido para
            {'\n'}sua rotina.
          </Text>
        </View>

        {/* CARTÃO PRINCIPAL */}
        <View style={styles.mainCard}>
          <View style={styles.progressContainer}>
            <View style={styles.progressBackground} />
            <View style={styles.progressArc} />

            <View style={styles.progressContent}>
              <View style={styles.walkIcon}>
                <Ionicons
                  name="walk"
                  size={17}
                  color="#A52A4C"
                />
              </View>

              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.progressNumber}
              >
                {formatarNumero(meta)}
              </Text>

              <Text style={styles.stepsLabel}>PASSOS</Text>

              {/* CALORIAS E DISTÂNCIA EM LINHAS SEPARADAS */}
              <View style={styles.metrics}>
                <View style={styles.metricItem}>
                  <Ionicons
                    name="flame-outline"
                    size={11}
                    color="#A52A4C"
                  />

                  <Text style={styles.metricText}>
                    ~340 kcal
                  </Text>
                </View>

                <View style={styles.metricItem}>
                  <Ionicons
                    name="walk-outline"
                    size={11}
                    color="#A52A4C"
                  />

                  <Text style={styles.metricText}>
                    ~6,1 km
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* AJUSTAR META */}
          <View style={styles.adjustment}>
            <TouchableOpacity
              style={styles.adjustButton}
              onPress={diminuirMeta}
              activeOpacity={0.7}
            >
              <Ionicons
                name="remove"
                size={22}
                color="#8A1D40"
              />
            </TouchableOpacity>

            <Text style={styles.adjustText}>
              Ajuste de 500 em 500
            </Text>

            <TouchableOpacity
              style={styles.adjustButton}
              onPress={aumentarMeta}
              activeOpacity={0.7}
            >
              <Ionicons
                name="add"
                size={22}
                color="#8A1D40"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* SUGESTÕES */}
        <View style={styles.suggestionsHeader}>
          <Text style={styles.sectionTitle}>
            Sugestões de ritmo
          </Text>

          <Text style={styles.suggestionsLink}>
            Toque para definir
          </Text>
        </View>

        <View style={styles.suggestionsList}>
          {sugestoes.map((item) => {
            const selecionado = meta === item.valor;

            return (
              <TouchableOpacity
                key={item.valor}
                style={[
                  styles.suggestionCard,
                  selecionado && styles.suggestionSelected,
                ]}
                onPress={() => setMeta(item.valor)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.suggestionIcon,
                    selecionado && styles.suggestionIconSelected,
                  ]}
                >
                  <Ionicons
                    name={item.icone}
                    size={17}
                    color={selecionado ? '#FFFFFF' : '#8A1D40'}
                  />
                </View>

                <View style={styles.suggestionInfo}>
                  <View style={styles.suggestionTitleRow}>
                    <Text
                      style={[
                        styles.suggestionNumber,
                        selecionado && styles.selectedText,
                      ]}
                    >
                      {formatarNumero(item.valor)} passos
                    </Text>

                    <Text
                      style={[
                        styles.suggestionTag,
                        selecionado && styles.selectedTag,
                      ]}
                    >
                      {item.titulo}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.suggestionDescription,
                      selecionado && styles.selectedDescription,
                    ]}
                  >
                    {item.descricao}
                  </Text>
                </View>

                <View
                  style={[
                    styles.selectionCircle,
                    selecionado && styles.selectionCircleActive,
                  ]}
                >
                  {selecionado && (
                    <Ionicons
                      name="checkmark"
                      size={12}
                      color="#8A1D40"
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* CARTÃO MOTIVACIONAL */}
        <View style={styles.motivationCard}>
          <View style={styles.motivationImage}>
            <Ionicons
              name="leaf"
              size={29}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.motivationContent}>
            <Text style={styles.motivationTitle}>
              Celebre cada passo
            </Text>

            <Text style={styles.motivationDescription}>
              Pequenas caminhadas ao longo do dia renovam a
              mente e recarregam sua energia.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTÃO SALVAR */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={salvar}
          activeOpacity={0.85}
        >
          <Ionicons
            name="checkmark-circle-outline"
            size={15}
            color="#FFFFFF"
          />

          <Text style={styles.saveText}>Salvar meta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },

  header: {
    height: 48,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F9E8EC',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  logoIcon: {
    width: 24,
    height: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBE9ED',
  },

  logoText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7F1D3B',
  },

  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  activityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7F1D3B',
  },

  avatar: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#F5DDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 12,
  },

  intro: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 13,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FBE7ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 10,
    color: '#8A1D40',
    fontWeight: '600',
  },

  title: {
    marginTop: 7,
    fontSize: 23,
    fontWeight: '700',
    color: '#650B2B',
  },

  subtitle: {
    marginTop: 3,
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 16,
    color: '#775D65',
  },

  mainCard: {
    marginHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 16,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#7F1D3B',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  progressContainer: {
    width: 190,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  progressBackground: {
    position: 'absolute',
    width: 144,
    height: 144,
    borderRadius: 72,
    borderWidth: 7,
    borderColor: '#F7E2E8',
  },

  progressArc: {
    position: 'absolute',
    width: 144,
    height: 144,
    borderRadius: 72,
    borderWidth: 7,
    borderTopColor: '#B32D50',
    borderRightColor: '#B32D50',
    borderBottomColor: '#B32D50',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '25deg' }],
  },

  progressContent: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  walkIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#FFF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },

  progressNumber: {
    fontSize: 26,
    fontWeight: '800',
    color: '#650B2B',
    letterSpacing: -0.5,
  },

  stepsLabel: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#8A1D40',
    marginTop: -1,
  },

  metrics: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: 7,
  },

  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },

  metricText: {
    fontSize: 9,
    color: '#775D65',
  },

  adjustment: {
    width: '88%',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  adjustButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9E5EA',
    shadowColor: '#8A1D40',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  adjustText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 10,
    color: '#775D65',
  },

  suggestionsHeader: {
    marginTop: 18,
    marginHorizontal: 16,
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#33232A',
  },

  suggestionsLink: {
    fontSize: 9,
    color: '#A51F43',
    fontWeight: '500',
  },

  suggestionsList: {
    paddingHorizontal: 12,
    gap: 8,
  },

  suggestionCard: {
    minHeight: 68,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    borderWidth: 1,
    borderColor: '#F9EDF0',
  },

  suggestionSelected: {
    backgroundColor: '#821D3D',
    borderColor: '#821D3D',
  },

  suggestionIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBE9EE',
  },

  suggestionIconSelected: {
    backgroundColor: '#A84B65',
  },

  suggestionInfo: {
    flex: 1,
    minWidth: 0,
  },

  suggestionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },

  suggestionNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3C2930',
  },

  suggestionTag: {
    fontSize: 8,
    color: '#775D65',
    backgroundColor: '#F5E8EB',
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  selectedText: {
    color: '#FFFFFF',
  },

  selectedTag: {
    color: '#7F1D3B',
    backgroundColor: '#F7C7D4',
    fontWeight: '700',
  },

  suggestionDescription: {
    marginTop: 4,
    fontSize: 10,
    lineHeight: 14,
    color: '#806A71',
  },

  selectedDescription: {
    color: '#F8DDE5',
  },

  selectionCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#FBE7ED',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectionCircleActive: {
    backgroundColor: '#FFFFFF',
  },

  motivationCard: {
    marginTop: 14,
    marginHorizontal: 12,
    minHeight: 86,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFF0F3',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  motivationImage: {
    width: 70,
    height: 62,
    borderRadius: 10,
    backgroundColor: '#C8A69A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  motivationContent: {
    flex: 1,
  },

  motivationTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#650B2B',
    marginBottom: 4,
  },

  motivationDescription: {
    fontSize: 10,
    lineHeight: 14,
    color: '#775D65',
  },

  footer: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#FFF8F8',
  },

  saveButton: {
    minHeight: 43,
    borderRadius: 24,
    backgroundColor: '#821D3D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    shadowColor: '#650B2B',
    shadowOpacity: 0.15,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  saveText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

