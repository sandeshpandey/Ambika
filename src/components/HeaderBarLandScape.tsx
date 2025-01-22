import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from '../assets/Icon';

interface HeaderBarLandScapeProps {
  onPress: () => void;
}

const HeaderBarLandScape: React.FC<HeaderBarLandScapeProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPress}>
          <Icon icon={'arrow-back-ios'} color={'#FB9F03'} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lava Loot - Slot Game</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.button}>
          <Image source={require('../resources/images/GC.png')} style={{height: 25, width: 30}}/>
          <Text style={styles.buttonLabel}>456.92</Text>
        </View>
        <View style={styles.buttonMerge}>
          <Image source={require('../resources/images/FC.png')} style={{height: 25, width: 30}}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2D2833',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText:{
    color: '#FB9F03',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E09400',
    borderRadius: 50,
    width: 120,
    borderWidth: 2,
    borderColor: '#7D5200',
    padding: 5,
    zIndex: 1,
    height: 40,

  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonMerge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    backgroundColor: "#1E1A25",
    position: 'relative',
    left: -10,
    height: 37,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  }
});

export default HeaderBarLandScape;
