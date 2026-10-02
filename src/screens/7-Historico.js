import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

export default function Historico({ irPara }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleSelectDay = (dayName, steps, distance, calories, isGoal) => {
    setSelectedDetail({
      dayName,
      stats: `${steps} • ${distance} • ${calories}${isGoal ? ' (Meta batida!)' : ''}`,
    });
  };

  const handleDismissDetail = () => {
    setSelectedDetail(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8F8" />
      
      {/* Header */}
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Narrativo da Tela */}
        <View style={styles.headerNarrative}>
          <View style={styles.badgeRow}>
            <View style={styles.pillBadge}>
              <Text style={styles.pillBadgeText}>PROGRESSO PESSOAL</Text>
            </View>
            <View style={styles.dateSelector}>
              <Ionicons name="calendar-outline" size={16} color="#A93349" />
              <Text style={styles.dateSelectorText}>Esta Semana</Text>
            </View>
          </View>
          <Text style={styles.title}>Seu histórico</Text>
          <Text style={styles.subtitle}>
            Acompanhe sua constância e celebre cada conquista com leveza.
          </Text>
        </View>

        {/* Banner de Média Semanal */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerLabel}>Média Semanal</Text>
            <View style={styles.bannerMetricRow}>
              <Text style={styles.bannerMetric}>7.135</Text>
              <Text style={styles.bannerUnit}>passos/dia</Text>
            </View>
            <View style={styles.bannerStatusRow}>
              <Ionicons name="checkmark-circle" size={15} color="#7F1D3B" />
              <Text style={styles.bannerStatusText}>
                Meta de 8.000 superada no período
              </Text>
            </View>
          </View>
          <View style={styles.bannerIconCircle}>
            <MaterialCommunityIcons name="sparkles" size={28} color="#600126" />
          </View>
        </View>

        {/* Gráfico de Evolução Semanal */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={styles.chartTitle}>Evolução Semanal</Text>
              <Text style={styles.chartSubtitle}>Meta diária: 8.000 passos</Text>
            </View>
            <View style={styles.chartBadge}>
              <View style={styles.chartBadgeDot} />
              <Text style={styles.chartBadgeText}>Meta Atingida</Text>
            </View>
          </View>

          {/* Área das Barras do Gráfico */}
          <View style={styles.chartArea}>
            {/* Linha Guia dos 8k */}
            <View style={styles.guideLineContainer}>
              <View style={styles.guideLine} />
              <Text style={styles.guideLineText}>8k</Text>
            </View>

            <View style={styles.barsContainer}>
              {/* Seg */}
              <TouchableOpacity
                style={styles.barItem}
                onPress={() => handleSelectDay('Segunda-feira', '7.563 passos', '4.8 km', '264 kcal', false)}
              >
                <View style={[styles.barFill, { height: '72%', backgroundColor: '#F0DEE3' }]} />
                <Text style={styles.barLabel}>Seg</Text>
              </TouchableOpacity>

              {/* Ter - Meta Atingida */}
              <TouchableOpacity
                style={styles.barItem}
                onPress={() => handleSelectDay('Terça-feira (Ontem)', '8.214 passos', '5.5 km', '310 kcal', true)}
              >
                <MaterialCommunityIcons name="star" size={14} color="#A93349" style={styles.starIcon} />
                <View style={[styles.barFill, styles.activeBarFill, { height: '84%' }]} />
                <Text style={[styles.barLabel, styles.activeBarLabel]}>Ter</Text>
              </TouchableOpacity>

              {/* Qua - Hoje */}
              <TouchableOpacity
                style={styles.barItem}
                onPress={() => handleSelectDay('Quarta-feira (Hoje)', '6.842 passos', '4.3 km', '241 kcal', false)}
              >
                <View style={[styles.barFill, { height: '65%', backgroundColor: '#FFD9DE' }]} />
                <Text style={[styles.barLabel, styles.activeBarLabel]}>Qua</Text>
              </TouchableOpacity>

              {/* Qui */}
              <View style={[styles.barItem, { opacity: 0.4 }]}>
                <View style={[styles.barFill, { height: '25%', backgroundColor: '#FCE9EE' }]} />
                <Text style={styles.barLabel}>Qui</Text>
              </View>

              {/* Sex */}
              <View style={[styles.barItem, { opacity: 0.4 }]}>
                <View style={[styles.barFill, { height: '18%', backgroundColor: '#FCE9EE' }]} />
                <Text style={styles.barLabel}>Sex</Text>
              </View>

              {/* Sáb */}
              <View style={[styles.barItem, { opacity: 0.4 }]}>
                <View style={[styles.barFill, { height: '15%', backgroundColor: '#FCE9EE' }]} />
                <Text style={styles.barLabel}>Sáb</Text>
              </View>

              {/* Dom */}
              <TouchableOpacity
                style={styles.barItem}
                onPress={() => handleSelectDay('Domingo passado', '5.921 passos', '3.7 km', '198 kcal', false)}
              >
                <View style={[styles.barFill, { height: '54%', backgroundColor: '#F0DEE3' }]} />
                <Text style={styles.barLabel}>Dom</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Grid dos Últimos Dias */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Últimos dias</Text>
          <Text style={styles.sectionSubtitle}>Mais recentes</Text>
        </View>

        <View style={styles.gridContainer}>
          {/* Card Hoje */}
          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => handleSelectDay('Hoje', '6.842 passos', '4.3 km', '241 kcal', false)}
          >
            <View style={styles.gridCardHeader}>
              <Text style={styles.gridCardTag}>HOJE</Text>
              <View style={styles.pulseDot} />
            </View>
            <Text style={styles.gridMetricNumber}>6.842</Text>
            <Text style={styles.gridMetricUnit}>passos</Text>
            <View style={styles.gridCardFooter}>
              <Text style={styles.gridFooterLabel}>Ritmo</Text>
              <Text style={styles.gridFooterValue}>85% meta</Text>
            </View>
          </TouchableOpacity>

          {/* Card Ontem (Meta Batida) */}
          <TouchableOpacity
            style={[styles.gridCard, styles.highlightGridCard]}
            onPress={() => handleSelectDay('Ontem', '8.214 passos', '5.5 km', '310 kcal', true)}
          >
            <View style={styles.gridCardHeader}>
              <Text style={styles.gridCardTag}>ONTEM</Text>
              <View style={styles.goalTag}>
                <Text style={styles.goalTagText}>Meta!</Text>
              </View>
            </View>
            <Text style={styles.gridMetricNumber}>8.214</Text>
            <Text style={styles.gridMetricUnit}>passos</Text>
            <View style={[styles.gridCardFooter, { backgroundColor: '#FCE9EE' }]}>
              <Ionicons name="checkmark-seal" size={14} color="#600126" />
              <Text style={styles.goalHitText}>Meta batida!</Text>
            </View>
          </TouchableOpacity>

          {/* Card Segunda */}
          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => handleSelectDay('Segunda', '7.563 passos', '4.8 km', '264 kcal', false)}
          >
            <View style={styles.gridCardHeader}>
              <Text style={styles.gridCardTag}>SEGUNDA</Text>
              <MaterialCommunityIcons name="walk" size={16} color="#DBC0C3" />
            </View>
            <Text style={styles.gridMetricNumber}>7.563</Text>
            <Text style={styles.gridMetricUnit}>passos</Text>
            <View style={styles.gridCardFooter}>
              <Text style={styles.gridFooterLabel}>Calorias</Text>
              <Text style={[styles.gridFooterValue, { color: '#600126' }]}>264 kcal</Text>
            </View>
          </TouchableOpacity>

          {/* Card Domingo */}
          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => handleSelectDay('Domingo', '5.921 passos', '3.7 km', '198 kcal', false)}
          >
            <View style={styles.gridCardHeader}>
              <Text style={styles.gridCardTag}>DOMINGO</Text>
              <MaterialCommunityIcons name="tree" size={16} color="#DBC0C3" />
            </View>
            <Text style={styles.gridMetricNumber}>5.921</Text>
            <Text style={styles.gridMetricUnit}>passos</Text>
            <View style={styles.gridCardFooter}>
              <Text style={styles.gridFooterLabel}>Calorias</Text>
              <Text style={[styles.gridFooterValue, { color: '#600126' }]}>198 kcal</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Registros Diários Lista */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Registros Diários</Text>
          <Text style={styles.weekLabel}>Semana 12</Text>
        </View>

        {/* Item SEG */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => handleSelectDay('Segunda-feira', '7.563 passos', '4.8 km', '264 kcal', false)}
        >
          <View style={styles.listItemLeft}>
            <View style={styles.dayBadge}>
              <Text style={styles.dayBadgeText}>SEG</Text>
              <Text style={styles.dayBadgeNumber}>24</Text>
            </View>
            <View>
              <Text style={styles.listMetricTitle}>7.563 passos</Text>
              <Text style={styles.listMetricSubtitle}>4.8 km  •  264 kcal</Text>
            </View>
          </View>
          <View style={styles.listItemRight}>
            <View style={styles.percentBadge}>
              <Text style={styles.percentBadgeText}>94%</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#DBC0C3" />
          </View>
        </TouchableOpacity>

        {/* Item TER (Meta Batida) */}
        <TouchableOpacity
          style={[styles.listItem, styles.listItemActive]}
          onPress={() => handleSelectDay('Terça-feira', '8.214 passos', '5.5 km', '310 kcal', true)}
        >
          <View style={styles.listItemLeft}>
            <View style={[styles.dayBadge, styles.activeDayBadge]}>
              <Text style={styles.activeDayBadgeText}>TER</Text>
              <Text style={styles.activeDayBadgeNumber}>25</Text>
            </View>
            <View>
              <View style={styles.titleWithIcon}>
                <Text style={styles.listMetricTitle}>8.214 passos</Text>
                <Ionicons name="checkmark-seal" size={16} color="#A93349" style={{ marginLeft: 4 }} />
              </View>
              <Text style={styles.listMetricSubtitle}>
                5.5 km  •  <Text style={{ color: '#A93349', fontWeight: '600' }}>Meta batida!</Text>
              </Text>
            </View>
          </View>
          <View style={styles.listItemRight}>
            <View style={styles.activePercentBadge}>
              <Text style={styles.activePercentBadgeText}>102%</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#DBC0C3" />
          </View>
        </TouchableOpacity>

        {/* Item QUA */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => handleSelectDay('Quarta-feira', '6.842 passos', '4.3 km', '241 kcal', false)}
        >
          <View style={styles.listItemLeft}>
            <View style={styles.dayBadge}>
              <Text style={styles.dayBadgeText}>QUA</Text>
              <Text style={styles.dayBadgeNumber}>26</Text>
            </View>
            <View>
              <Text style={styles.listMetricTitle}>6.842 passos</Text>
              <Text style={styles.listMetricSubtitle}>4.3 km  •  Em andamento</Text>
            </View>
          </View>
          <View style={styles.listItemRight}>
            <View style={styles.percentBadge}>
              <Text style={styles.percentBadgeText}>85%</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#DBC0C3" />
          </View>
        </TouchableOpacity>

        {/* Card Interativo de Detalhe Selecionado */}
        {selectedDetail && (
          <View style={styles.detailCard}>
            <View style={styles.detailCardLeft}>
              <View style={styles.detailIconCircle}>
                <Ionicons name="analytics" size={20} color="#FFFFFF" />
              </View>
              <View>
                <Text style={styles.detailTitle}>{selectedDetail.dayName}</Text>
                <Text style={styles.detailSubtitle}>{selectedDetail.stats}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.detailCloseButton} onPress={handleDismissDetail}>
              <Ionicons name="close" size={18} color="#554245" />
            </TouchableOpacity>
          </View>
        )}

        {/* Mensagem de Dica no Rodapé */}
        <View style={styles.helpBox}>
          <Ionicons name="finger-print-outline" size={18} color="#A93349" />
          <Text style={styles.helpBoxText}>
            Toque em um dia para ver detalhes.
          </Text>
        </View>
      </ScrollView>

      {/* Menu Inferior Integrado */}
      <MenuInferior irPara={irPara} telaAtual="Historico" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 110,
  },
  headerNarrative: {
    marginBottom: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  pillBadge: {
    backgroundColor: '#F6E4E8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  pillBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A93349',
    letterSpacing: 1,
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateSelectorText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#554245',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#600126',
  },
  subtitle: {
    fontSize: 14,
    color: '#554245',
    marginTop: 2,
  },
  bannerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#554245',
  },
  bannerMetricRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginVertical: 2,
  },
  bannerMetric: {
    fontSize: 32,
    fontWeight: '800',
    color: '#600126',
  },
  bannerUnit: {
    fontSize: 12,
    color: '#554245',
    fontWeight: '500',
  },
  bannerStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  bannerStatusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#7F1D3B',
  },
  bannerIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F6E4E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 3,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#600126',
  },
  chartSubtitle: {
    fontSize: 12,
    color: '#554245',
  },
  chartBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFDADC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
  },
  chartBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A93349',
  },
  chartBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#400010',
  },
  chartArea: {
    height: 180,
    justifyContent: 'flex-end',
    position: 'relative',
    paddingTop: 24,
  },
  guideLineContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  guideLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#FE7488',
    opacity: 0.5,
  },
  guideLineText: {
    fontSize: 10,
    color: '#FE7488',
    marginLeft: 6,
    fontWeight: '700',
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  barFill: {
    width: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  activeBarFill: {
    backgroundColor: '#7F1D3B',
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#554245',
    marginTop: 8,
  },
  activeBarLabel: {
    color: '#600126',
    fontWeight: '700',
  },
  starIcon: {
    marginBottom: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#600126',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#554245',
  },
  weekLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A93349',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  gridCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    justifyContent: 'space-between',
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  highlightGridCard: {
    shadowColor: '#A93349',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  gridCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridCardTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#554245',
    letterSpacing: 0.5,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FE7488',
  },
  goalTag: {
    backgroundColor: '#600126',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  goalTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  gridMetricNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#600126',
    marginTop: 8,
  },
  gridMetricUnit: {
    fontSize: 12,
    color: '#554245',
    fontWeight: '500',
  },
  gridCardFooter: {
    marginTop: 10,
    backgroundColor: '#FFF0F3',
    borderRadius: 8,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridFooterLabel: {
    fontSize: 10,
    color: '#554245',
  },
  gridFooterValue: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A93349',
  },
  goalHitText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#600126',
    marginLeft: 4,
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  listItemActive: {
    shadowOpacity: 0.08,
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dayBadge: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FCE9EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDayBadge: {
    backgroundColor: '#600126',
  },
  dayBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#600126',
  },
  activeDayBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  dayBadgeNumber: {
    fontSize: 11,
    fontWeight: '800',
    color: '#A93349',
  },
  activeDayBadgeNumber: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFB2B9',
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listMetricTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#600126',
  },
  listMetricSubtitle: {
    fontSize: 12,
    color: '#554245',
    marginTop: 2,
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  percentBadge: {
    backgroundColor: '#FFF0F3',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  percentBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A93349',
  },
  activePercentBadge: {
    backgroundColor: '#FFDADC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  activePercentBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#400010',
  },
  detailCard: {
    backgroundColor: '#FCE9EE',
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  detailCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  detailIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#600126',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#600126',
  },
  detailSubtitle: {
    fontSize: 12,
    color: '#554245',
  },
  detailCloseButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FFF0F3',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 8,
  },
  helpBoxText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#554245',
  },
});