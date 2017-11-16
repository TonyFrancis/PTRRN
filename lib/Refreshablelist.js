import React, { Component } from 'react';
import {
  ListView,
  RefreshControl,
  Text,
} from 'react-native';
export default class RefreshableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.displayList = this.displayList.bind(this);
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  displayList() {
    return [1,2,3,4].map((elem, index) => {
      return <Text key={index}>{elem}</Text>
    })
  }
  render() {
    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
      {this.displayList()}
      </ListView>
    );
  }
}
