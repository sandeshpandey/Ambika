import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LoveIcon from './LoveIcon';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const ImageSize = windowWidth/ 3 -20

interface ImageCardProps {
  isActive: boolean;
  image: string;
  onPress: () => void;
  onPressFav: () => void;
}

const ImageCard = ({isActive, image, onPress, onPressFav}: ImageCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <LoveIcon customStyles={styles.iconStyles} isActive={isActive} onPress={onPressFav} />
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container : {
    height: ImageSize,
    width: ImageSize,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },

  image: {
    height: '100%',
    width: '100%',
  },

  iconStyles: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
});
