import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './Styles/DrawerContentStyle';
import { Images } from '../Themes';
import DrawerButton from '../Components/DrawerButton';
import { Actions as NavigationActions } from 'react-native-router-flux';
import usageStyles from './Styles/UsageExamplesScreenStyle';
import I18n from '../I18n/I18n.js';


class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle();
  }

  handlePress(target) {
    return (() => {
      this.context.drawer.toggle();
      NavigationActions[target]();
    }).bind(this);
  }

  renderHeader (title) {
    return (
      <View style={usageStyles.componentLabelContainer}>
        <Text style={usageStyles.componentLabel}>{title}</Text>
      </View>
    );
  }

  render () {
    return ( 
      <ScrollView style={styles.container}> 
        {this.renderHeader(I18n.t('drawerPhotos'))}
        <DrawerButton text="Photos List" onPress={this.handlePress('listviewExample')} />
        {/*<DrawerButton text="Usage Examples" onPress={this.handlePress('usageExamples')} />
        <DrawerButton text="API Testing" onPress={this.handlePress('apiTesting')} />
        <DrawerButton text="Themes" onPress={this.handlePress('theme')} />
        <DrawerButton text="Device Info" onPress={this.handlePress('deviceInfo')} />*/}
      </ScrollView>
    );
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object,
};

export default DrawerContent;
