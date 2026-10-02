import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

export default function Perfil({ irPara }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleSwitch = () => setNotificationsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8F8" />

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.title}>Meu perfil</Text>
            <Text style={styles.subtitle}>Gerencie seu ritmo e bem-estar</Text>
          </View>
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={() => {}}
          >
            <Ionicons name="create-outline" size={20} color="#7F1D3B" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileCard}>
          {/* Círculos Decorativos de Fundo */}
          <View style={styles.bgBlobTopRight} />
          <View style={styles.bgBlobBottomLeft} />

          <View style={styles.avatarContainer}>
            <View style={styles.avatarRing}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW4ImbRT5iZb7zolzNfnzPlrKdfzPHUCYSCasNJ1Sv3ZS8JNuyVl-6LZZaoJZxyFC1sxfmUkUqZiejjoxEcD4OsvGKyZ3Fr_VwFY_5lYVc9F_RVHCOFKyP_97xOG7KpSTk5V97HIFOtFrhtNksxj49lKP09gOqXA7-jwrpy_ZkK88IX4GCms6MXCpu9dCmu6pYCepWaFGsz7oaJzvVjuK0U2UUXug_G00sSh_PGBrjp7Z3XxcHY_M',
                }}
                style={styles.avatarImage}
              />
            </View>
            <View style={styles.avatarBadge}>
              <MaterialCommunityIcons name="flower-outline" size={15} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.userName}>Maria</Text>
          <Text style={styles.userMemberSince}>Membro desde março de 2024</Text>

          <View style={styles.wellnessBox}>
            <View style={styles.wellnessHeader}>
              <View style={styles.wellnessTitleRow}>
                <Ionicons name="heart" size={18} color="#A93349" />
                <Text style={styles.wellnessTitle}>Nível de Bem-Estar</Text>
              </View>
              <View style={styles.harmonyBadge}>
                <Text style={styles.harmonyBadgeText}>Harmonia Vital</Text>
              </View>
            </View>

            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: '78%' }]} />
            </View>

            <View style={styles.wellnessFooter}>
              <Text style={styles.wellnessFooterText}>Fase de Florescer</Text>
              <Text style={styles.wellnessFooterHighlight}>78% de consistência</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryIconCircle}>
              <MaterialCommunityIcons name="fire" size={20} color="#600126" />
            </View>
            <View style={styles.summaryTextContainer}>
              <Text style={styles.summaryLabel}>Sequência</Text>
              <Text style={styles.summaryValue}>12 dias</Text>
            </View>
          </View>

          <View style={styles.summaryCard}>
            <View style={styles.summaryIconCircle}>
              <Ionicons name="water" size={20} color="#600126" />
            </View>
            <View style={styles.summaryTextContainer}>
              <Text style={styles.summaryLabel}>Hidratação diária</Text>
              <Text style={styles.summaryValue}>2.1 L</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Preferências</Text>
            <Text style={styles.sectionSubtitle}>Geral & Metas</Text>
          </View>

          <View style={styles.groupCard}>
            <TouchableOpacity style={styles.highlightRow} activeOpacity={0.7}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCirclePrimary}>
                  <MaterialCommunityIcons name="walk" size={22} color="#FFFFFF" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitlePrimary}>Meta diária</Text>
                  <Text style={styles.itemSubtitle}>8.000 passos sugeridos</Text>
                </View>
              </View>
              <View style={styles.itemRight}>
                <Text style={styles.metaValueText}>8.000</Text>
                <Ionicons name="chevron-forward" size={18} color="#887175" />
              </View>
            </TouchableOpacity>

            <View style={styles.itemRow}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircleDefault}>
                  <Ionicons name="notifications-outline" size={20} color="#600126" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Notificações</Text>
                  <Text style={styles.itemSubtitle}>Lembretes suaves e carinhosos</Text>
                </View>
              </View>
              <Switch
                trackColor={{ false: '#F0DEE3', true: '#7F1D3B' }}
                thumbColor="#FFFFFF"
                ios_backgroundColor="#F0DEE3"
                onValueChange={toggleSwitch}
                value={notificationsEnabled}
              />
            </View>

            <View style={styles.itemRow}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircleDefault}>
                  <MaterialCommunityIcons name="radar" size={20} color="#600126" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Permissão de atividade</Text>
                  <Text style={styles.itemSubtitle}>Acesso aos sensores corporais</Text>
                </View>
              </View>
              <View style={styles.grantedBadge}>
                <View style={styles.pulseDot} />
                <Text style={styles.grantedBadgeText}>Concedido</Text>
              </View>
            </View>

            {/* Item: Configurações */}
            <TouchableOpacity style={styles.itemRowNoBorder} activeOpacity={0.7}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircleDefault}>
                  <Ionicons name="options-outline" size={20} color="#600126" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Configurações</Text>
                  <Text style={styles.itemSubtitle}>Unidades, fuso e sincronização</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#887175" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Institucional & Segurança</Text>
          </View>

          <View style={styles.groupCard}>
            <TouchableOpacity style={styles.itemRow} activeOpacity={0.7}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircleDefault}>
                  <MaterialCommunityIcons name="sparkles" size={20} color="#600126" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Sobre o FitHer</Text>
                  <Text style={styles.itemSubtitle}>Nossa missão, versão v2.4.1</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#887175" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRowNoBorder} activeOpacity={0.7}>
              <View style={styles.itemLeft}>
                <View style={styles.iconCircleDefault}>
                  <Ionicons name="shield-checkmark-outline" size={20} color="#600126" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Privacidade e dados</Text>
                  <Text style={styles.itemSubtitle}>Criptografia e controle pessoal</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#887175" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
            <Ionicons name="log-out-outline" size={18} color="#A93349" />
            <Text style={styles.logoutButtonText}>Encerrar sessão com segurança</Text>
          </TouchableOpacity>

          <Text style={styles.brandFooterText}>
            FitHer • Movimente-se no seu próprio ritmo
          </Text>
        </View>
      </ScrollView>

      {/* Menu Inferior Integrado */}
      <MenuInferior irPara={irPara} telaAtual="Perfil" />
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
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#600126',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    color: '#554245',
    marginTop: 2,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FCE9EE',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  profileCard: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 16,
  },
  bgBlobTopRight: {
    position: 'absolute',
    top: -48,
    right: -48,
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: '#FFF0F3',
    opacity: 0.7,
  },
  bgBlobBottomLeft: {
    position: 'absolute',
    bottom: -40,
    left: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#FFD9DD',
    opacity: 0.3,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatarRing: {
    width: 96,
    height: 96,
    borderRadius: 48,
    padding: 4,
    backgroundColor: '#FE7488',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 44,
    backgroundColor: '#FCE9EE',
  },
  avatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#7F1D3B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#600126',
  },
  userMemberSince: {
    fontSize: 12,
    color: '#887175',
    marginBottom: 12,
  },
  wellnessBox: {
    width: '100%',
    backgroundColor: '#FFF0F3',
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
  },
  wellnessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wellnessTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  wellnessTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#600126',
  },
  harmonyBadge: {
    backgroundColor: '#F0DEE3',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  harmonyBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#7F1D3B',
  },
  progressBarTrack: {
    width: '100%',
    height: 8,
    backgroundColor: '#F0DEE3',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#7F1D3B',
    borderRadius: 4,
  },
  wellnessFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  wellnessFooterText: {
    fontSize: 12,
    color: '#554245',
    fontWeight: '600',
  },
  wellnessFooterHighlight: {
    fontSize: 12,
    fontWeight: '700',
    color: '#600126',
  },
  summaryGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  summaryIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FCE9EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryTextContainer: {
    flex: 1,
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#887175',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#600126',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#600126',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#887175',
    fontWeight: '600',
  },
  groupCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
    shadowColor: '#6B112D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  highlightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 240, 243, 0.7)',
    marginBottom: 4,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
  },
  itemRowNoBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconCirclePrimary: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#7F1D3B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7F1D3B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircleDefault: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FCE9EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitlePrimary: {
    fontSize: 18,
    fontWeight: '600',
    color: '#600126',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#22191C',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#554245',
    marginTop: 1,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaValueText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#600126',
  },
  grantedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCE9EE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FE7488',
  },
  grantedBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#600126',
  },
  logoutSection: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 16,
    gap: 8,
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    backgroundColor: '#FFF0F3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  logoutButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A93349',
  },
  brandFooterText: {
    fontSize: 12,
    color: '#887175',
    textAlign: 'center',
  },
});