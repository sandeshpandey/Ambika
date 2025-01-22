import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Button } from 'react-native-paper';

interface NavigationTabsProps {
  isFavouritesTabActive: boolean;
  onPress: (index: number) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ isFavouritesTabActive, onPress = () => {} }) => {

  return (
    <View style={styles.container}>
      <Button
        icon="grid"
        mode="text"
        style={[styles.button, !isFavouritesTabActive ? styles.active : null]}
        textColor="#E9DFEF"
        onPress={() => onPress(0)}
      >
        See All Games
      </Button>
      <Button
        icon="heart"
        mode="text"
        textColor='#E9DFEF'
        style={[styles.button, isFavouritesTabActive ? styles.active : null]}
        onPress={() => onPress(1)}
      >
        Favorites
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2D2833',
    paddingBottom: 1,
    borderRadius: 10,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    borderBottomWidth: 2,
    padding: 8,
  },
  active: {
    borderColor: "#fff",
    borderRadius: 0,
  },
});


export default NavigationTabs;
