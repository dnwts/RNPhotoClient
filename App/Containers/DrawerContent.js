import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './Styles/DrawerContentStyle';
import { Images, ApplicationStyles } from '../Themes';
import DrawerButton from '../Components/DrawerButton';
import { Actions as NavigationActions } from 'react-native-router-flux';
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
      <View style={ApplicationStyles.darkLabelContainer}>
        <Text style={ApplicationStyles.darkLabel}>{title}</Text>
      </View>
    );
  }

  render () {
    return ( 
      <ScrollView style={styles.container}> 
        {this.renderHeader(I18n.t('drawerPhotos'))}
        <DrawerButton text="Photos List" onPress={this.handlePress('photosList')} />
        <DrawerButton text="Upload" onPress={this.handlePress('upload')} />
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
