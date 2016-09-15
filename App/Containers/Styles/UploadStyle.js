import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    marginTop: Metrics.navBarHeight,
    alignItems: 'stretch',
  },
  buttonsContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingVertical: 10,
    paddingRight: 10,
  },
  button: {
    borderRadius: 4,
    backgroundColor: Colors.fire,
    padding: 6,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  submit: {
    backgroundColor: Colors.green,
    marginLeft: 0,
    marginBottom: 10,
    height: 40,
  },
  buttonText: {
    alignSelf: 'center',
    color: Colors.silver,
  },
  imageContainer: { 
    flex: 1, 
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
    alignSelf: 'stretch',
  },
  form: {
    paddingHorizontal: 10,
  },
  textInputContainer: {
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    backgroundColor: Colors.snow,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    color: Colors.charcoal,
  },
});
