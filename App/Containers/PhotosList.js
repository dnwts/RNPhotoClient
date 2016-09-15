import React from 'react';
import { View, Text, ListView, Image } from 'react-native';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent';

// Styles
import styles from './Styles/PhotosListStyle';

class ListviewExample extends React.Component {

  constructor (props) {
    super(props);
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    // let dataObjects = [
    //   //{title: 'First One', tags: ['cute', 'pink'], url: 'http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211812866.png'},
    //   //{title: 'Second Cutie', tags: ['pufosenie', 'pink'], url: 'http://orig01.deviantart.net/6ce0/f/2012/182/c/9/cute_cloud_button_by_nerdy_neko-d55meva.png'},
    //   {title: 'General HTF', tags: ['green', 'psycho', 'happytreefriends'], url: 'http://orig07.deviantart.net/f08b/f/2011/315/a/2/profile_picture_by_ask_flippy-d4fssdz.jpg'},
    //   {title: 'Whacked HTF', tags: ['gore', 'yellow', 'happytreefriends'], url: 'https://lh4.ggpht.com/CIUni2BdzPuVw8hVLDafTXDliCaWc5Z4MzlUc5KscaL-9azfSfznBcFd0T0bRb3kScyY=w300'},
    //   //{title: '...she wrote', tags: ['gore', 'eye', 'happytreefriends'], url: 'http://orig02.deviantart.net/a4cb/f/2007/254/2/d/happy_tree_friend__giggles_by_thirteen_autumns.jpg'},
    //   //{title: 'Nutty', tags: ['gore', 'brain', 'happytreefriends'], url: 'http://vignette4.wikia.nocookie.net/happytreefriends/images/b/b0/Nutty_Dead_(Swelter_Skelter).jpg/revision/latest?cb=20121227155401'},
    // ];
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);//1024
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);
    // dataObjects = dataObjects.concat(dataObjects);//8192
    // dataObjects = dataObjects.concat(dataObjects);

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged});

    // Datasource is always in state
    this.state = {
      list: ds.cloneWithRows(this.props.list), 
    };

    this._renderRow = this._renderRow.bind(this);
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderTags (tags) {
    return null;
    // return (<View style={styles.tagList}>
    //   {tags.map((t, i) => <View style={styles.tagView} key={i}><Text style={styles.tagText}>{t}</Text></View>)}
    // </View>);
  }
  _renderRow (rowData) {
    const url = 'http://' + (rowData && rowData.path);
    return (
      <View style={styles.row}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{uri: url}} />
        </View>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        {this._renderTags(rowData.tags)}
      </View>
    );
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/
  componentWillReceiveProps (newProps) {
      if (newProps.list) {
        this.setState({
          list: this.state.list.cloneWithRows(newProps.list),
        });
      }
    }

  componentWillMount() {
    this.props.loadPhotosList();
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.list.getRowCount() === 0;
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title="Nothing to See Here, Move Along" show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          style={{}}
          dataSource={this.state.list}
          renderRow={this._renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.photosList.list,
    loading: state.photosList.loading,
    error: state.photosList.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPhotosList: () => dispatch(Actions.loadPhotosList()),
    clearPhotosList: () => dispatch(Actions.clearPhotosList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListviewExample);
