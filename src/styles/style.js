import { StyleSheet } from 'react-native';
import { colors } from './color';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    color: colors.primaryText,
    padding: 20,
    borderRadius: 50
  },
  icon:{
    color: colors.textIcons,
    fontSize: 20
  },
  text: {
    color: colors.primaryText,
    fontSize: 20
  }
});
