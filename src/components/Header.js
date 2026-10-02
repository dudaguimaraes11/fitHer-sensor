import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>

      <View style={styles.logoArea}>

        <View style={styles.logoIcon}>
          <MaterialCommunityIcons
            name="heart-pulse"
            size={18}
            color="#600126"
          />
        </View>

        <Text style={styles.logoText}>
          FitHer
        </Text>

      </View>

      <View style={styles.headerRight}>

        <Text style={styles.inicio}>
          início
        </Text>

        <TouchableOpacity style={styles.profile}>
          <Ionicons
            name="person"
            size={15}
            color="#7F1D3B"
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF8F8',
    borderBottomWidth: 1,
    borderBottomColor: '#F7E9EC',
    elevation: 2,
    zIndex: 10,
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F7E6EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  logoText: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 18,
    color: '#600126',
    letterSpacing: -0.45,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inicio: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 18,
    color: '#7F1D3B',
    marginRight: 16,
  },

  profile: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F7E6EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});