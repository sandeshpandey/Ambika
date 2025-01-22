import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../../assets/Icon'

const Utils = () => {
  return (
      <View style={styles.iconContainer}>
        <Icon icon={'cog'} color={'#FB9F03'} style={styles.icon} />
        <View style={styles.iconMiddle}>
          <Icon icon={'info-filled'} color={'#FB9F03'} style={styles.icon} />
        </View>
        <Icon icon={'volume-mute-sharp'} color={'#FB9F03'} style={styles.icon} />
      </View>
  )
}

export default Utils

const styles = StyleSheet.create({
  iconContainer:{
    flexDirection: 'row',
    backgroundColor: "#3F3022",
    borderWidth: 1,
    shadowColor: '#000',                
    shadowOffset: { width: 5, height: 5 }, // Moves shadow bottom-right
    shadowOpacity: 0.3,                  
    shadowRadius: 3,                    
    overflow: 'visible', // iOS requires this to display shadows outside the view

    // Android shadow
    elevation: 5,
  },
  icon: {
    width: 30,
     height: 30,
     margin: 10,
     paddingVertical: 10,
     paddingHorizontal: 30
  },
  iconMiddle:{
    borderWidth: 1,
  }
})