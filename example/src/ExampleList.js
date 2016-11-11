/* @flow */

import React, {
  Component,
  PropTypes,
 } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Colors, TouchableRipple } from 'react-native-paper';
import RippleExample from './RippleExample';
import PaperExample from './PaperExample';
import TextExample from './TextExample';
import ButtonsExample from './ButtonsExample';

export const examples = {
  ripple: RippleExample,
  paper: PaperExample,
  text: TextExample,
  button: ButtonsExample,
};

export default class ExampleList extends Component {

  static route = {
    navigationBar: {
      title: 'Examples',
    },
  };

  static propTypes = {
    navigator: PropTypes.object,
  };

  render() {
    return (
      <View style={styles.list}>
        {Object.keys(examples).map(id => (
          <TouchableRipple
            key={id}
            style={styles.item}
            onPress={() => this.props.navigator.push(id)}
          >
            <Text style={styles.text}>{examples[id].title}</Text>
          </TouchableRipple>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomColor: Colors.grey300,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});