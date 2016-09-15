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
    //marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    borderBottomColor: Colors.separator,
    borderBottomWidth: 0.5,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
  listContent: {
    //flex: 1,
    //marginTop: Metrics.baseMargin,
  },
});
