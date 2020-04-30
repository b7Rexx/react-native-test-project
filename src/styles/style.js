import { StyleSheet } from 'react-native';
import { colors } from './color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    backgroundColor: colors.primaryColor,
  },
  headerText: {
    color: colors.primaryText,
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

  // card
  card: {
    marginBottom: 20,
  },
  cardHeader: {
    backgroundColor: 'transparent'
  },
  cardHeaderText: {
    color: colors.primaryText,
    fontWeight: 'bold',
    fontSize: 32,
  },
  cardBody: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    elevation: 10,
    height: 240,
  },
  cardBodyImage: {
    height: '100%',
    borderRadius: 10,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -35,
    height: 70,
    elevation: 10,
  },
  cardFooterTitle: {
    color: colors.primaryText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardFooterText: {
    color: colors.secondaryText,
    marginTop: 5,
  },
  cardFooterIcon: {
    alignSelf: 'center',
    backgroundColor: colors.lightPrimaryColor,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 32,
    borderRadius: 50,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.primaryColor,
    color: colors.primaryText,
    padding: 20,
    borderRadius: 50
  },
  listButtonView: {
    marginTop: 20,
  },
  listButton: {
    backgroundColor: colors.primaryColor,
    padding: 5,
    borderRadius: 50,
    width: 90,
    height: 30,
    fontSize: 12,
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 20,
    elevation: 10,
  },
  listButtonText: {
    color: colors.primaryText,
  },
  icon: {
    color: colors.textIcons,
    fontSize: 20
  },
  text: {
    color: colors.secondaryText,
    fontSize: 20
  },

  searchBar: {
    margin: 5,
    backgroundColor: colors.white,
    elevation: 10,
  },
  listSearchView: {
    padding: 10,
  },
  // house card
  houseCard: {
    backgroundColor: 'transparent',
    height: 200,
    marginBottom: 20,
  },
  houseCardTitle: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
    elevation: 5
  },
  houseCardText: {
    color: colors.primaryText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  houseCardBody: {
    height: 160,
    width: '100%',
  },
  houseCardImage: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  houseCardIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: colors.white
  },
  houseCardIconFav: {
    color: colors.accentColor
  }
});
