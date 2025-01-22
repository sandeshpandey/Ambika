import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LoveIcon from './LoveIcon';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const ImageSize = windowWidth/ 2 -20

const images = {
  0: require('../resources/images/1.png'),
  1: require('../resources/images/2.png'),
}

interface ImageNumberCardProp {
  image: string;
  index: number;
  onPress: () => void;
  onPressFav: () => void;
  isActive: boolean;
}
const ImageNumberCard = ({image, index, onPress, onPressFav, isActive}: ImageNumberCardProp) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={images[index]} resizeMode="cover" />
      <Image source={{uri: image}} style={styles.image2} resizeMode="cover" />
      <LoveIcon customStyles={styles.iconStyles} isActive={isActive}  onPress={onPressFav} /> 
    </TouchableOpacity>
  );
};

export default ImageNumberCard;

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    height: 250,
    width: 250,
    // backgroundColor: 'red',
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },

  image: {
    height: 200,
    width: 80,
    // backgroundColor: "red",
  },
  image2:{
    height: 200,
    width: 150,
    // backgroundColor: "blue",
  },

  iconStyles: {
    position: 'absolute',
    top: 10,
    right: 30,
  }
});
