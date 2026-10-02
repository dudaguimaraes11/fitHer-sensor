import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Splash({ irPara }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8F8" />

      <TouchableOpacity 
        activeOpacity={0.9} 
        style={styles.container} 
        onPress={() => irPara('onboarding')}
      >
        {/* Glows de fundo */}
        <View style={styles.glowTopLeft} />
        <View style={styles.glowBottomRight} />

        {/* Top Crest */}
        <View style={styles.headerCrest}>
          <View style={styles.crestBadge}>
            <View style={styles.pulseDot} />
            <Text style={styles.crestText}>WELLNESS SANCTUARY</Text>
          </View>
        </View>

        {/* Centro */}
        <View style={styles.centerStage}>
          <View style={styles.outerRingContainer}>
            <View style={styles.middleHalo}>
              <View style={styles.innerPearlBase}>
                <View style={styles.coreIconContainer}>
                  <Text style={{ fontSize: 24 }}>🌼</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.textGroup}>
            <Text style={styles.brandTitle}>FitHer</Text>
            <Text style={styles.brandMantra}>Move. Track. Feel good.</Text>
          </View>
        </View>

        {/* Rodapé */}
        <View style={styles.bottomCadence}>
          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={[styles.dot, styles.midDot]} />
            <View style={[styles.dot, styles.inactiveDot]} />
          </View>
          <Text style={styles.footerText}>DAILY VITALITY • MINDFUL MOTION</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: 
    '#FFF8F8' 
  },
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 36, 
    position: 'relative' 
  },
  glowTopLeft: { 
    position: 'absolute', 
    top: -80, 
    left: -80, 
    width: 320, 
    height: 320, 
    borderRadius: 160, 
    backgroundColor: 
    'rgba(246, 228, 232, 0.5)' 
  },
  glowBottomRight: { 
    position: 'absolute', 
    bottom: -90, 
    right: -60, 
    width: 350, 
    height: 350, 
    borderRadius: 175, 
    backgroundColor: 
    'rgba(255, 218, 220, 0.6)' 
  },
  headerCrest: { 
    zIndex: 10, 
    marginTop: 12 
  },
  crestBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 
    'rgba(252, 233, 238, 0.7)', 
    paddingHorizontal: 16, 
    paddingVertical: 6, 
    borderRadius: 20, 
    gap: 6 
  },
  pulseDot: { 
    width: 6, 
    height: 6, 
    borderRadius: 3, 
    backgroundColor: 
    '#600126' 
  },
  crestText: { 
    color: '#600126', 
    fontSize: 10, 
    fontWeight: '700', 
    letterSpacing: 1.5 
  },
  centerStage: { 
    zIndex: 10, 
    alignItems: 'center', 
    width: '100%'
   },
  outerRingContainer: { 
    width: 200, 
    height: 200, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 24 
  },

  middleHalo: { 
    width: 180, 
    height: 180, 
    borderRadius: 90, 
    backgroundColor: '#FCE9EE', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  innerPearlBase: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    backgroundColor: '#FFFFFF', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  coreIconContainer: { 
    width: 56, 
    height: 56, 
    borderRadius: 28, 
    backgroundColor: '#7F1D3B', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  textGroup: { 
    alignItems: 'center'
  },

  brandTitle: { 
    fontSize: 36, 
    fontWeight: '700', 
    color: '#7F1D3B' 
  },

  brandMantra: { 
    marginTop: 6, 
    fontSize: 14, 
    fontWeight: '500', 
    color: '#A93349' 
  },

  bottomCadence: { 
    zIndex: 10, 
    alignItems: 'center', 
    gap: 12 
  },

  dotsRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8 
  },

  dot: { 
    width: 6, 
    height: 6,
    borderRadius: 3 
  },

  activeDot: { 
    backgroundColor: '#7F1D3B'
   },

  midDot: { 
    backgroundColor: '#FFB2B9' 
  },

  inactiveDot: { 
    backgroundColor: '#F0DEE3'
   },

  footerText: { 
    fontSize: 10, 
    fontWeight: '700', 
    color: '#887175', 
    letterSpacing: 1.2 
  },
});