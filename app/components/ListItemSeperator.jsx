import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default class ListItemSeperator extends Component {
  render() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});
