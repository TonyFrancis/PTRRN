import React, { Component } from 'react';
import {
  View,
  ListView,
  RefreshControl,
  Text,
} from 'react-native';
export default class RefreshableList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      count: 2,
    };
    this.displayList = this.displayList.bind(this);
  }

  _onRefresh() {
    this.setState({refreshing: true});
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let { count } = this.state;
    let data = [];
    for (let i=0; i<=count; i++) {
      data.push(`row ${i}`);
    }
    count++;
    console.log(count, "new count")
    this.setState({
      dataSource: ds.cloneWithRows(data),
      count,
      refreshing: false,
    });
  }
  displayList() {
    return [1,2,3,4].map((elem, index) => {
      return <Text key={index}>{elem}</Text>
    })
  }
  render() {
    return (
      <View>
      <Text> asdkajshdkjahskdhkh kh</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
      </ListView>
      </View>
    );
  }
}
