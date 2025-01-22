/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from '../assets/Icon';

interface LoveIconProps {
  isActive: boolean;
  customStyles?: object;
  onPress: () => void;
}

const LoveIcon: React.FC<LoveIconProps> = ({ isActive = false, customStyles, onPress }) => {
  return (
    <View style={[styles.main, customStyles]}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon icon={isActive ? 'favorite-filled' : 'favorite'} style={{width: 30, height: 30}} color={isActive ? '#D91319' : '#4B4356'} />
      </TouchableOpacity>
    </View>
  );
};

export default LoveIcon;

const styles = StyleSheet.create({
  main:{
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    borderRadius: 50,
    backgroundColor: '#EADEF5',
    padding: 8,

  },
});
