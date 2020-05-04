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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  houseCardDetail: {
    color: colors.secondaryText,
    fontSize: 12,
  },
  houseCardBody: {
    height: 140,
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
  },


  // house detail Stack
  houseDetailImage: {
    height: 300,
    width: '100%',
    opacity: 0.8,
  },
  houseDetailButtonOverlay: {
    position: 'absolute',
    top: 10,
  },
  houseDetailButtonBack: { left: 20 },
  houseDetailButtonFav: { right: 50 },
  houseDetailButtonEllipse: { right: 20 },
  houseDetailIconOverlay: {
    fontSize: 28,
    elevation: 10,
    color: colors.primaryText,
  },
  houseDetailTitle: {
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    elevation: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  houseDetailPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.primaryText
  },
  houseDetailLocation: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.primaryText,
    marginTop: 5,
  },
  TitleTransportIcon: {
    color: 'purple',
    fontSize: 30,
    position: 'absolute',
    right: 120,
    top: 10
  },
  TitleTransportText: {
    color: colors.primaryText,
    fontSize: 14,
    position: 'absolute',
    right: 122,
    top: 42
  },
  TitleSafetyIcon: {
    color: '#f0fc',
    fontSize: 30,
    position: 'absolute',
    right: 70,
    top: 10
  },
  TitleSafetyText: {
    color: colors.primaryText,
    fontSize: 14,
    position: 'absolute',
    right: 72,
    top: 42
  },
  TitleEcologyIcon: {
    color: 'lightblue',
    fontSize: 30,
    position: 'absolute',
    right: 20,
    top: 10
  },
  TitleEcologyText: {
    color: colors.primaryText,
    fontSize: 14,
    position: 'absolute',
    right: 22,
    top: 42
  },
  circularIcon: {
    backgroundColor: 'white',
    paddingTop: 15,
    paddingLeft: 20,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 4,
  },
  lightIcon: {
    color: colors.secondaryText,
    fontSize: 14,
  },
  iconText: {
    color: colors.secondaryText,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  houseDetailInfo: {
    padding: 10,
    color: colors.secondaryText,
    fontSize: 16,
    lineHeight: 22,
  },
  houseDetailFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },
  circularButtonText: {
    fontWeight: 'bold',
    letterSpacing: 4,
    fontSize: 20,
    textAlign: 'center',
    width: 140,
    height: 35,
    padding: 5,
    elevation: 10,
  },

  sliderTitle: {
    position: 'absolute',
    width: '100%',
    bottom: 70,
  },
  indicator: {
    marginTop: 50,
    color: colors.primaryText
  },

  searchFilterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: -30
  },
  searchFilter: {
    padding: 10,
  },
  searchFilterTitle: {
    color: colors.primaryText,
    fontWeight: 'bold',
    fontSize: 24,

  },
  searchFilterValue: {
    color: colors.accentColor,
    fontSize: 16,
  },
  searchFilterTags:{
    padding:10,
    alignSelf:'flex-start'
  }
});
