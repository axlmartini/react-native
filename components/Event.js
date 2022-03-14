import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Event = (props) => {
  return (
    <View style={props.item.isComplete ? [styles.item, styles.itemComplete] : styles.item}>
      <View style={styles.itemLeft}>
        <View style={props.item.isComplete ? [styles.square, styles.squareComplete] : styles.square}>
          {props.item.isComplete &&
            <Image
              style={styles.tinyLogo}
              source={require('../assets/check.png')}
            />
          }
        </View>
        <Text style={props.item.isComplete ? [styles.itemText, styles.itemTextComplete] : styles.itemText}>{props.item.text}</Text>
      </View>
      <View style={props.item.isComplete ? [styles.circular, styles.circularComplete] : styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemComplete: {
    backgroundColor: 'green',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  squareComplete: {
    backgroundColor: '#fff',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    maxWidth: '80%',
  },
  itemTextComplete: {
    color: '#fff',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  circularComplete: {
    borderColor: '#fff',
  },
  tinyLogo: {
    width: 10,
    height: 10,
  }
});

export default Event;