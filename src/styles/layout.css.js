import { StyleSheet } from 'react-native';
import { colors } from './color.css';

export const layouts = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPrimaryColor,
    flex: 1
  },
  header: {
    backgroundColor: colors.primaryColor,
    height: 56,
    paddingTop: 10
  },
  headerText: {
    color: colors.primaryColor,
    fontSize: 18,
    fontWeight: '600'
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
  }
});
