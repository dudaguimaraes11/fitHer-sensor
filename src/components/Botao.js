
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function Botao({ texto, onPress }) {

  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={styles.texto}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  botao: {
    width: '100%',
    height: 46,
    borderRadius: 25,
    backgroundColor: '#8B1D3D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFFFFF',
    fontSize: 9,
  },

});