import Reactotron from 'reactotron';
import {Platform} from 'react-native';

Reactotron.connect({
  enabled: __DEV__,
  name: 'ignite App',
  userAgent: Platform.OS,
  port: 3334,
});

if (__DEV__) {
  console.tron = Reactotron;
} else {
  console.tron = () => false;
}
