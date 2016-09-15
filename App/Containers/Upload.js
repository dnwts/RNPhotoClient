import React, {PropTypes} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/UploadStyle';
//import ImagePicker from 'react-native-image-crop-picker';
//import TagInput from 'react-native-tag-input';
import Actions from '../Actions/Creators';
import Toast from 'react-native-root-toast';
import NativeImagePicker from 'react-native-image-picker';
import { Actions as NavigationActions } from 'react-native-router-flux';


class UploadScreen extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      uri: '',
      path: '',
      caption: '',
      tags: [],
    };
    this.handleCamera = this.handleCamera.bind(this);
    this.handleLibrary = this.handleLibrary.bind(this);
    this.handleChangeCaption = this.handleChangeCaption.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.onLayoutImageWrapper = this.onLayoutImageWrapper.bind(this);
  }

  onLayoutImageWrapper(e) {
    console.log('onLayout', e.nativeEvent);
    return true;
  }

  shouldComponentUpdate (newProps) {
    console.log('shouldComponentUpdate', this.props.attempting, newProps.attempting, this.props.errorCode, newProps.errorCode);
    if (newProps.errorCode && this.props.errorCode != newProps.errorCode) {
      Toast.show('Oops! ' + newProps.errorCode, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
      this.props.clearUpload();
      return true;
    }
    if (this.props.attempting && !newProps.attempting) {
      const message = newProps.errorCode 
        ? 'Error: ' + newProps.errorCode
        : 'YAY! Upload successful!';
      Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
      if (!newProps.errorCode) {
        //success
        NavigationActions.photosList();
      }
      return true;
    }
    //no message
    return true;
  }

  handleChangeCaption(value) {
    this.setState({
      caption: value,
    });
  }

  handleChangeTags(tags) {
    this.setState({
      tags: tags,
    });
  }

  handleCamera () {
    console.log('CAMERA');
    // ImagePicker.openCamera({
    //   includeBase64: true,
    // }).then(image => {
    //   this.setState({
    //     uri: 'data:image/jpeg;base64,' + image.data,
    //   });
    // });
    NativeImagePicker.launchCamera({
    }, (response)  => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log('Picker response', response);
        this.setState({
          uri: 'data:'+ response.type +';base64,' + response.data,
          path: 'file://' + response.path,
        });
      }
    });
  }

  handleLibrary () {
    console.log('LIBRARY');
    // ImagePicker.openPicker({
    // }).then(image => {
    //   console.log(image);
    //   this.setState({
    //     uri: image.path,
    //   });
    // });
    NativeImagePicker.launchImageLibrary({
    }, (response)  => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log('Picker response', response);
        this.setState({
          uri: 'data:'+ response.type +';base64,' + response.data,
          path: 'file://' + response.path,
        });
      }
    });
  }

  handleUpload() {
    console.log('handleUpload STATE: ', this.state);
    this.props.attemptUpload(this.state);
  }

  render () {
    const { uri, caption, path } = this.state;
    let img = null, form = null;
    if (uri.length) { 
      img = <Image source={{ uri: path, isStatic: true }} style={Styles.image} ref="preview" />;
      //const regex = /\s/gi;
      form = (<View style={Styles.form}>
        <View style={Styles.textInputContainer}>
          <TextInput
              ref="caption"
              style={Styles.textInput}
              value={caption}
              onChangeText={this.handleChangeCaption}
              underlineColorAndroid="transparent"
              placeholder={'Name (required!)'} />
        </View>
        {/*<TagInput
          value={this.state.tags}
          inputProps={{style: Styles.textInput, underlineColorAndroid: 'transparent'}}
          regex={regex}
          onChange={this.handleChangeTags} />*/}
        <TouchableOpacity style={[Styles.button, Styles.submit]} onPress={this.handleUpload}>
            <Text style={Styles.buttonText}>{'Upload'}</Text>
        </TouchableOpacity>   
      </View>);
    }
    return (
      <View style={Styles.container}>
          <View style={Styles.imageContainer} onLayout={this.onLayoutImageWrapper}>
            {img}
          </View>
          <View style={Styles.buttonsContainer}>
            <TouchableOpacity style={Styles.button} onPress={this.handleCamera}>
                <Text style={Styles.buttonText}>{'Camera'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button} onPress={this.handleLibrary}>
                <Text style={Styles.buttonText}>{'Library'}</Text>
            </TouchableOpacity>
          </View>
          {form}
      </View>
    );
  }

}

UploadScreen.propTypes = {
  // dispatch: PropTypes.func,
  attemptUpload: PropTypes.func,
  attempting: PropTypes.bool,
  clearUpload: PropTypes.func,
  errorCode: PropTypes.string,
  // close: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    attempting: state.upload.attempting,
    errorCode: state.upload.errorCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // close: NavigationActions.photosList,
    attemptUpload: (data) => dispatch(Actions.attemptUpload(data)),
    clearUpload: () => dispatch(Actions.clearUpload()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadScreen);
