import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import Styles from './Styles/NavigationContainerStyle';
import NavigationDrawer from './NavigationDrawer';
import NavItems from './NavItems';

// screens identified by the router
// import PresentationScreen from '../Containers/PresentationScreen';
// import AllComponentsScreen from '../Containers/AllComponentsScreen';
// import UsageExamplesScreen from '../Containers/UsageExamplesScreen';
import LoginScreen from '../Containers/LoginScreen';
import PhotosList from '../Containers/PhotosList';
import Upload from '../Containers/Upload';
//import ListviewExample from '../Containers/ListviewExample';
// import ListviewGridExample from '../Containers/ListviewGridExample';
// import MapviewExample from '../Containers/MapviewExample';
// import APITestingScreen from '../Containers/APITestingScreen';
// import ThemeScreen from '../Containers/ThemeScreen';
// import DeviceInfoScreen from '../Containers/DeviceInfoScreen';

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router> 
        <Scene key="drawer" component={NavigationDrawer}>
          <Scene key="drawerChildrenWrapper" navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key="login" component={LoginScreen} title="Login" hideNavBar />
            <Scene key="photosList" component={PhotosList} title="Photos" renderLeftButton={NavItems.hamburgerButton} type={ActionConst.REPLACE} hideNavBar={false} />
            <Scene key="upload" component={Upload} title="Upload" renderLeftButton={NavItems.hamburgerButton} type={ActionConst.REPLACE} />
            {/*<Scene key="presentationScreen" component={PresentationScreen} title="Ignite" />
            <Scene key="componentExamples" component={AllComponentsScreen} title="Components" />
            <Scene key="usageExamples" component={UsageExamplesScreen} title="Usage" rightTitle="Example" onRight={() => window.alert('Example Pressed')} />
            <Scene key="listviewGridExample" component={ListviewGridExample} title="Listview Grid" />
            <Scene key="mapviewExample" component={MapviewExample} title="Mapview Example" />
            <Scene key="apiTesting" component={APITestingScreen} title="API Testing" />
            <Scene key="theme" component={ThemeScreen} title="Theme" />
            <Scene key="deviceInfo" component={DeviceInfoScreen} title="Device Info" />*/}
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
