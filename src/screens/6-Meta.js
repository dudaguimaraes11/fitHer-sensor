import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Animated,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import {
  Footprints,
  Flame,
  Minus,
  Plus,
  Sparkles,
  Check,
  CheckCircle,
  Heart,
  Zap,
} from 'lucide-react-native';

const TOTAL_CIRCUMFERENCE = 578; // 2 * PI * 92

export default function ActivityGoalScreen() {
  const [currentSteps, setCurrentSteps] = useState(8000);
  const [toastVisible, setToastVisible] = useState(false);

  // Cálculos de Estimativa
  const estimatedCalories = Math.round(currentSteps * 0.0425);
  const estimatedKm = (currentSteps * 0.00076).toFixed(1).replace('.', ',');

  // Atualização do Arco Progressivo
  const ratio = Math.min(Math.max((currentSteps - 1000) / 14000, 0.1), 1);
  const strokeDashoffset = TOTAL_CIRCUMFERENCE - TOTAL_CIRCUMFERENCE * ratio * 0.85;

  const handleIncrement = () => {
    if (currentSteps + 500 <= 25000) {
      setCurrentSteps((prev) => prev + 500);
    }
  };

  const handleDecrement = () => {
    if (currentSteps - 500 >= 2000) {
      setCurrentSteps((prev) => prev - 500);
    }
  };

  const handleSave = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff8f8" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>FitHer</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerTitle}>Atividade</Text>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Título & Boas-Vindas */}
        <View style={styles.welcomeSection}>
          <View style={styles.badge}>
            <Sparkles size={14} color="#7F1D3B" />
            <Text style={styles.badgeText}>Ritmo & Autocuidado</Text>
          </View>
          <Text style={styles.mainTitle}>Sua meta diária</Text>
          <Text style={styles.subtitle}>Escolha uma meta que faça sentido para sua rotina.</Text>
        </View>

        {/* Mostrador Central / Anel de Progresso */}
        <View style={styles.gaugeCard}>
          <View style={styles.svgContainer}>
            <Svg width="220" height="220" viewBox="0 0 220 220" style={{ transform: [{ rotate: '-90deg' }] }}>
              <Defs>
                <LinearGradient id="roseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor="#FE7488" />
                  <Stop offset="100%" stopColor="#7F1D3B" />
                </LinearGradient>
              </Defs>
              {/* Trilha do Fundo */}
              <Circle
                cx="110"
                cy="110"
                r="92"
                stroke="#f6e4e8"
                strokeWidth="12"
                fill="none"
              />
              {/* Arco Ativo */}
              <Circle
                cx="110"
                cy="110"
                r="92"
                stroke="url(#roseGlow)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={TOTAL_CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </Svg>

            {/* Conteúdo Dentro do Anel */}
            <View style={styles.gaugeInnerContent}>
              <View style={styles.iconCircle}>
                <Footprints size={20} color="#7F1D3B" />
              </View>
              <Text style={styles.stepsText}>{currentSteps.toLocaleString('pt-BR')}</Text>
              <Text style={styles.stepsUnit}>PASSOS</Text>

              <View style={styles.estimatesContainer}>
                <Flame size={14} color="#A93349" />
                <Text style={styles.estimateText}>~{estimatedCalories} kcal</Text>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.estimateText}>~{estimatedKm} km</Text>
              </View>
            </View>
          </View>

          {/* Botões - / + */}
          <View style={styles.controlsRow}>
            <TouchableOpacity style={styles.controlBtn} onPress={handleDecrement} activeOpacity={0.7}>
              <Minus size={22} color="#600126" />
            </TouchableOpacity>
            <Text style={styles.controlLabel}>Ajuste de 500 em 500</Text>
            <TouchableOpacity style={styles.controlBtn} onPress={handleIncrement} activeOpacity={0.7}>
              <Plus size={22} color="#600126" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sugestões de Ritmo (Presets) */}
        <View style={styles.presetsSection}>
          <View style={styles.presetsHeader}>
            <Text style={styles.presetsTitle}>Sugestões de ritmo</Text>
            <Text style={styles.presetsSubtitle}>Toque para definir</Text>
          </View>

          {/* Preset: 5.000 */}
          <PresetCard
            steps={5000}
            title="5.000 passos"
            tag="Leve"
            description="Ideal para manter o movimento suave e sem pressa."
            icon={<Sparkles size={20} color={currentSteps === 5000 ? '#ffffff' : '#7F1D3B'} />}
            isSelected={currentSteps === 5000}
            onSelect={() => setCurrentSteps(5000)}
          />

          {/* Preset: 8.000 (Recomendado) */}
          <PresetCard
            steps={8000}
            title="8.000 passos"
            tag="Recomendado"
            description="Equilíbrio perfeito de vitalidade e bem-estar diário."
            icon={<Heart size={20} color={currentSteps === 8000 ? '#ffffff' : '#7F1D3B'} />}
            isSelected={currentSteps === 8000}
            onSelect={() => setCurrentSteps(8000)}
          />

          {/* Preset: 10.000 */}
          <PresetCard
            steps={10000}
            title="10.000 passos"
            tag="Ativo"
            description="Para dias com energia máxima e ritmo acelerado."
            icon={<Zap size={20} color={currentSteps === 10000 ? '#ffffff' : '#7F1D3B'} />}
            isSelected={currentSteps === 10000}
            onSelect={() => setCurrentSteps(10000)}
          />
        </View>

        {/* Card Inspirador */}
        <View style={styles.bannerCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&auto=format&fit=crop&q=80',
            }}
            style={styles.bannerImage}
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Celebre cada passo</Text>
            <Text style={styles.bannerDescription}>
              Pequenas caminhadas ao longo do dia renovam a mente e recarregam sua energia.
            </Text>
          </View>
        </View>

        {/* Botão de Salvar Meta */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave} activeOpacity={0.85}>
          <CheckCircle size={20} color="#ffffff" />
          <Text style={styles.saveButtonText}>Salvar meta</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Toast Flutuante */}
      {toastVisible && (
        <View style={styles.toast}>
          <CheckCircle size={20} color="#ff8fa7" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.toastTitle}>Meta atualizada!</Text>
            <Text style={styles.toastSubtitle}>Retornando para o Início...</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

// Componente Auxiliar dos Presets
function PresetCard({ title, tag, description, icon, isSelected, onSelect }) {
  return (
    <TouchableOpacity
      style={[styles.presetCard, isSelected && styles.presetCardActive]}
      onPress={onSelect}
      activeOpacity={0.9}
    >
      <View style={styles.presetLeft}>
        <View style={[styles.presetIconBox, isSelected && styles.presetIconBoxActive]}>
          {icon}
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.presetTitleRow}>
            <Text style={[styles.presetTitle, isSelected && styles.textWhite]}>{title}</Text>
            <View style={[styles.presetTag, isSelected && styles.presetTagActive]}>
              <Text style={[styles.presetTagText, isSelected && styles.presetTagTextActive]}>
                {tag}
              </Text>
            </View>
          </View>
          <Text style={[styles.presetDesc, isSelected && styles.textSoftRose]}>
            {description}
          </Text>
        </View>
      </View>

      <View style={[styles.presetCheck, isSelected && styles.presetCheckActive]}>
        {isSelected && <Check size={14} color="#600126" />}
      </View>
    </TouchableOpacity>
  );
}

// Estilos Formatados do Material/Tailwind Original
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f8',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,248,248,0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(127,29,59,0.05)',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#600126',
    fontFamily: 'Playfair Display',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7f1d3b',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: '#f6e4e8',
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#600126',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#600126',
  },
  subtitle: {
    fontSize: 14,
    color: '#554245',
    textAlign: 'center',
    marginTop: 4,
  },
  gaugeCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    shadowColor: '#7F1D3B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
    marginBottom: 24,
  },
  svgContainer: {
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gaugeInnerContent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff0f3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  stepsText: {
    fontSize: 34,
    fontWeight: '800',
    color: '#600126',
  },
  stepsUnit: {
    fontSize: 12,
    fontWeight: '700',
    color: '#a93349',
    letterSpacing: 1,
  },
  estimatesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  estimateText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#554245',
  },
  bullet: {
    color: '#dbc0c3',
    marginHorizontal: 2,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  controlBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f6e4e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#554245',
  },
  presetsSection: {
    marginBottom: 20,
  },
  presetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  presetsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#22191c',
  },
  presetsSubtitle: {
    fontSize: 12,
    color: '#a93349',
    fontWeight: '600',
  },
  presetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  presetCardActive: {
    backgroundColor: '#7f1d3b',
  },
  presetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  presetIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#fce9ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  presetIconBoxActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  presetTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  presetTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22191c',
  },
  textWhite: {
    color: '#ffffff',
  },
  textSoftRose: {
    color: '#ff8fa7',
  },
  presetTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: '#f6e4e8',
  },
  presetTagActive: {
    backgroundColor: '#fe7488',
  },
  presetTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#554245',
  },
  presetTagTextActive: {
    color: '#ffffff',
  },
  presetDesc: {
    fontSize: 12,
    color: '#554245',
    marginTop: 2,
  },
  presetCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fce9ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  presetCheckActive: {
    backgroundColor: '#ffffff',
  },
  bannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff0f3',
    padding: 16,
    borderRadius: 20,
    gap: 12,
    marginBottom: 20,
  },
  bannerImage: {
    width: 60,
    height: 60,
    borderRadius: 14,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#600126',
  },
  bannerDescription: {
    fontSize: 12,
    color: '#554245',
    marginTop: 2,
  },
  saveButton: {
    height: 56,
    borderRadius: 28,
    backgroundColor: '#7f1d3b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#7f1d3b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  toast: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#600126',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  toastTitle: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  toastSubtitle: {
    color: '#ffb1c0',
    fontSize: 12,
  },
});