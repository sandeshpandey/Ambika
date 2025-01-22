// LandscapeScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ToastAndroid } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import HeaderBarLandScape from '../../components/HeaderBarLandScape';
import { Dimensions } from 'react-native';
import Icon from '../../assets/Icon';
import Utils from './components/Utils';
import { Button } from 'react-native-paper';
import Total from './components/Total';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const GameScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Lock the orientation to landscape when the screen mounts
    Orientation.lockToLandscape();

    return () => {
      // Unlock all orientations when leaving this screen
      Orientation.unlockAllOrientations();
    };
  }, []);

  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const handleBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#19121C', '#321B1C']} // Example colors
      style={styles.gradientContainer}
      start={{ x: 0, y: 0 }}   // Optional: controls the gradient start position
      end={{ x: 1, y: 1 }}     // Optional: controls the gradient end position
    >
    <View style={styles.container}>
      <HeaderBarLandScape onPress={handleBackNavigation} />
      <View style={styles.imageContainer}>
        <Image resizeMode="cover" source={require('../../resources/images/game.png')} style={styles.image} />
        <Image resizeMode="cover" source={require('../../resources/images/game.png')} style={styles.image} />
        <Image resizeMode="cover" source={require('../../resources/images/game.png')} style={styles.image} />
      </View>
      <View style={styles.wrapper}>
        <Utils />
        <Button
          mode="elevated"
          buttonColor="##3F3022"
          style={styles.button}
          onPress={showToast}
          labelStyle={styles.buttonLabel}>
          Start!
        </Button>
        <Total />
      </View>
      <View style={styles.spacer} />
    </View>
    </LinearGradient>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    height: height - 100,
    backgroundColor: '#2D2833',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F3022',
  },
  buttonLabel: {
    color: '#FFF48D',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom : 20,
    left: 0,
    right: 0,
  },
  spacer:{
    height: 30,
  },
});
