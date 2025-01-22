/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import {Button, Text} from 'react-native-paper';

export default function FeatureBanner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../resources/images/FloatingElements.png')}
        style={styles.banner}
        resizeMode="contain">
        <ImageBackground
          source={require('../../../resources/images/Rays.png')}
          style={styles.overlayImage}
          resizeMode="cover">
          <Image
            source={require('../../../resources/images/Elf.png')}
            style={styles.elfImage}
          />
          <View style={styles.content}>
            <Text variant="headlineMedium" style={styles.title}>
              Choose FUNZ For A Next-Level Gaming Experience!
            </Text>
            <View style={styles.pointsContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('../../../resources/images/GC.png')} />
                <Text style={styles.points}>1,500,999</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Image source={require('../../../resources/images/FC.png')} />
                <Text style={styles.subPoints}>85.00</Text>
              </View>
            </View>
            <Button
              mode="elevated"
              buttonColor="#FFAB17"
              style={styles.button}
              icon={'play'}
              labelStyle={styles.buttonLabel}>
              Play Now!
            </Button>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A27E4',
  },
  banner: {
    flex: 1,
    backgroundColor: '#7E57C2',
  },
  bannerImage: {
    flex: 1,
    resizeMode: 'cover', // Or 'stretch', depending on your needs
    justifyContent: 'center',
  },
  overlayImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginTop: 40,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  pointsContainer: {
    marginBottom: 16,
  },
  points: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 8,
  },
  subPoints: {
    color: '#fff',
    textAlign: 'center',
    marginLeft: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  buttonLabel: {
    color: '#000',
    fontWeight: 'bold',
  },
  elfImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 200,
    height: 200,
  },
});
