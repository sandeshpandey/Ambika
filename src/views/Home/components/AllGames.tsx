import { StyleSheet, View, FlatList, Image } from 'react-native';
import React from 'react';
import Label from '../../../components/Label';
import ImageCard from '../../../components/ImageCard';
import ImageNumberCard from '../../../components/ImageNumberCard';
import { useNavigation } from '@react-navigation/native';
import { Game } from '../../../types/games';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../store/gameSlice';
import { RootState } from '../../../store/store';


const AllGames = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { games, favorites } = useSelector((state: RootState) => state.game);
  const forYou = games.filter(game => game.popularity > 90);
  const top = games.filter(game => game.region === 'US');
  const playAgain = games.filter(game => game.playerCount > 50);

  const handleNavigation = () => {
    navigation.navigate('Game');
  };

  const onPressFav = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  const getifFavourite = (id: string) => {
    return favorites?.includes(id);
  }

  return (
    <View style={styles.container}>
      <Label text="For you" icon="thumbs-up-filled" iconColor="#19ECDF" />

      <FlatList
      horizontal
      data={forYou}
      renderItem={({ item }) => { 
        return (<ImageCard {...item} onPress={handleNavigation} isActive={getifFavourite(item.id)} onPressFav={() => onPressFav(item.id)} />)}}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      />

  <Label text="Top 10 games in your home state"  image={<Image source={require('../../../resources/images/flag.png')} />} />

  <FlatList
    horizontal
    data={top}
    renderItem={({ item, index }) => <ImageNumberCard {...item} index={index} onPress={handleNavigation} isActive={getifFavourite(item.id)} onPressFav={() => onPressFav(item.id)} />}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    />


    <Label text="PLAY AGAIN" icon="play-filled-alt" iconColor="#56DB04" />

    <FlatList
      horizontal
      data={playAgain}
      renderItem={({ item }) => <ImageCard {...item} onPress={handleNavigation} isActive={getifFavourite(item.id)} onPressFav={() => onPressFav(item.id)} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default AllGames;
