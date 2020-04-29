import { StyleSheet } from 'react-native';
import { colors } from './color';

export const layouts = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPrimaryColor,
    flex: 1
  },
  header: {
    backgroundColor: colors.primaryColor,
  },
  headerText: {
    color: colors.lightPrimaryColor,
  },
  content: {
    backgroundColor: colors.white,
    padding: 20,
  },
  footer: {
    backgroundColor: colors.primaryColor,
    height: 70
  },
  footerTab: {
    backgroundColor: colors.primaryColor,
  },
  footerText: {
    color: colors.lightPrimaryColor,
    fontSize: 16
  },
});
