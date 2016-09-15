import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
  },
  row: {
    height: 65,
    backgroundColor: Colors.transparent,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 0.5,
    flex: 1,
    flexDirection: 'row',
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  textsContainer: {
    flex: 1,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
  listContent: {
    
  },
  image: {
    resizeMode: 'contain',
    height: 65,
    width: 65,
  },
  imageView: {
    height: 65,
    width: 65,
  },
});
