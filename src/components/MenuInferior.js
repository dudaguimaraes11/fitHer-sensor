import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/4-Home';
import Atividade from '../screens/5-Atividade';
import Historico from '../screens/7-Historico';
import Perfil from '../screens/8-Perfil';

const tabs = [
  {
    key: 'Inicio',
    label: 'Início',
    icon: 'home-outline',
    selectedIcon: 'home',
    component: Home,
  },
  {
    key: 'Atividade',
    label: 'Atividade',
    icon: 'footsteps-outline',
    selectedIcon: 'footsteps',
    component: Atividade,
  },
  {
    key: 'Historico',
    label: 'Histórico',
    icon: 'time-outline',
    selectedIcon: 'time',
    component: Historico,
  },
  {
    key: 'Perfil',
    label: 'Perfil',
    icon: 'person-outline',
    selectedIcon: 'person',
    component: Perfil,
  },
];

export default function MenuInferior() {
  const [activeTab, setActiveTab] = useState('Inicio');

  const ActiveScreen = tabs.find((tab) => tab.key === activeTab)?.component ?? Home;

  return (
    <View style={styles.wrapper}>
      <View style={styles.screenContent}>
        <ActiveScreen />
      </View>

      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          const iconName = isActive ? tab.selectedIcon : tab.icon;

          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabButton}
              onPress={() => setActiveTab(tab.key)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={iconName}
                size={22}
                color={isActive ? '#7F1D3B' : '#554245'}
              />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF8F8',
  },
  screenContent: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#FCE9EE',
    paddingBottom: 8,
    paddingTop: 8,
    minHeight: 62,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 10,
    color: '#554245',
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  tabLabelActive: {
    color: '#7F1D3B',
  },
});