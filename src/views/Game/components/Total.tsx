import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../../assets/Icon';

const Total = () => {
  return (
      <View style={styles.iconContainer}>
        <Icon icon={'minus'} color={'#FB9F03'} style={styles.icon} />
        <View style={styles.iconMiddle}>
          <Text style={styles.pointText}>50.00 GC </Text>
        </View>
        <Icon icon={'plus'} color={'#FB9F03'} style={styles.icon} />
      </View>
  );
};

export default Total;

const styles = StyleSheet.create({
  
  iconContainer:{
    flexDirection: 'row',
    backgroundColor: '#3F3022',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 }, // Moves shadow bottom-right
    shadowOpacity: 0.3,
    shadowRadius: 3,
    overflow: 'visible',
    elevation: 5,
  },
  icon: {
    width: 30,
     height: 30,
     margin: 10,
     paddingVertical: 10,
     paddingHorizontal: 30,
  },
  iconMiddle:{
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointText :{
    textAlign: 'center',
    color: '#FFEB75',
    paddingHorizontal: 10,
    fontSize: 16,
  },
});