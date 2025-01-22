import { StyleSheet, FlatList, View, ScrollView, Text } from 'react-native';
import React from 'react';
import ImageCard from '../../../components/ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useNavigation } from '@react-navigation/native';
import { toggleFavorite } from '../../../store/gameSlice';

const Favorites = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { games, favorites } = useSelector((state: RootState) => state.game);
  const favoriteGames = games.filter(game => favorites.includes(game.id));
    const handleNavigation = () => {
      navigation.navigate('Game');
    };

    const onPressFav = (id: string) => {
      dispatch(toggleFavorite(id));
    };

    const getifFavourite = (id: string) => {
      return favorites?.includes(id);
    };
  return (
    <ScrollView>
    <View style={{ marginHorizontal: 15 }}>
      {
        favorites.length < 1 && <Text style={styles.text}> No Favourite Game </Text>
      }
      <FlatList
        data={favoriteGames}
        renderItem={({ item }) => <ImageCard {...item} onPress={handleNavigation} isActive={getifFavourite(item.id)} onPressFav={() => onPressFav(item.id)} />}
        keyExtractor={item => item.id}
        numColumns={3}
        scrollEnabled={false}
      />
    </View>
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
