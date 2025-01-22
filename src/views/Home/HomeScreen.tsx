import * as React from 'react';
import { Dimensions, StyleSheet, ScrollView, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import FeatureBanner from './components/FeatureBanner';
import HeaderBar from '../../components/HeaderBar';
import NavigationTabs from '../../components/NavigationTabs';
import { useState } from 'react';
import AllGames from './components/AllGames';
import Favorites from './components/Favorites';
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFavorites } from '../../store/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const data = [...new Array(3).keys()];
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function HomeScreens() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Lock the orientation to landscape when the screen mounts
    Orientation.lockToPortrait();

    return () => {
      // Unlock all orientations when leaving this screen
      Orientation.unlockAllOrientations();
    };
  }, []);

  React.useEffect(() => {
    // Load favorites from AsyncStorage
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          dispatch(setFavorites(JSON.parse(storedFavorites)));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };

    loadFavorites();
  }, [dispatch]);

  const [isFavouritesTabActive, setActiveTabNumber] = useState(false);

  const onPresshandlerNavTab = () => {
    setActiveTabNumber(prev => !prev);
  };
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <ScrollView style={{backgroundColor: '#16111C'}}>
    <View style={styles.container}>
      <HeaderBar />
      <View>
        <Carousel
          ref={ref}
          vertical={false}
          width={windowWidth}
          height={windowHeight / 2}
          data={data}
          pagingEnabled
          snapEnabled
          onProgressChange={progress}
          renderItem={() => (
            <View style={[styles.itemView]}>
              <FeatureBanner />
            </View>

          )}
        />
        <Pagination.Basic
          progress={progress}
          data={data}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={styles.paginationContainer}
          onPress={onPressPagination}
        />
      </View>
    </View>
    <NavigationTabs isFavouritesTabActive={isFavouritesTabActive} onPress={onPresshandlerNavTab} />
    {!isFavouritesTabActive ? <AllGames /> : <Favorites />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemView: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
  },
  paginationContainer: {
    top: -20,
    gap: 5,
  },
  activeDotStyle : {
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  dotStyle : {
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default HomeScreens;

