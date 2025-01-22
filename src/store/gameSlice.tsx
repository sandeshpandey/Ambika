import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesState } from '../types/games';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: GamesState = {
  games: [
    {
      id: '1',
      image: 'https://s3-alpha-sig.figma.com/img/b3cc/ac06/76dbe67c63eab029b53e590af2c6e3d6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HxBWjLhV~QUoZzmf6GmmMvzV2aclCP0qGX9yIIUlsRvT8pv869unGgFPxtkJg3i6pJFaYHd~Brn4NMG1uvpmBIbStqWM7w9HV6rMS8mXOlRxzMmABVDgA3m3j1Am8islIgnbA8nvk3ywQgQsUbC5h7FIbRZDNWFOHW94cfGue7sgxmdsVi45qnMPCha~mq8HrasksxrXxqWvnXzqPN8b8YZF4XGgCU3jOH8-Xknp1boFkzSkH3ATfnYopqYRibynROPDLXcuawv-NFKzZvCA7RxRoIUvtJtsP9R6wxP77OblseGpHOOMV8CP1dHk1c-eYgMfLX~XB-iuPa7sBRVUQw__',
      popularity: 95,
      region: 'Global',
      playerCount: 0,
    },
    {
      id: '2',
      image: 'https://s3-alpha-sig.figma.com/img/2629/6652/44db9b179b1ef1da80fc5bf21ed20b0d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bdn-I4xF7gwdUFnAnLBS5DDboYNbttieO2fAbhJ4gj6h5m1iTOUThVZIYCUMXWRXrU~QBFjcF3IIVTBoF~mBaBzAX4X-JK9HV87n7k52XZ-gwGOvqbUoLCnN958SS8VZaq-2oL3LVctR6Iudxqfj5bVt4HniTE7KnYk3UlirQBSBHidQWoP3kRd3MLnNACIWHj1kgltdnMe~IMgmW5Rvde15WJ4BtCY-P2jJ9A9AIS8mvyD-Wk9pCqevhjsltauschKqDkaJVwlKhp6aPy-R1B0vct9S74NqMnCxwCDEPGnkTXZyKPCOAfz-wx54Fp9c3W6algvONhG2quTUnNSATg__',
      popularity: 95,
      region: 'US',
      playerCount: 0,
    },
    {
      id: '3',
      image: 'https://s3-alpha-sig.figma.com/img/5713/078e/e74f9517be0255efdeec45cfed58b869?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBRpcpT6cD0I7dWJid1P4UxN5PVT82WE82jb-QN5ZGkd8CeGpKiLw-9ltF1SolhcM3kHzyQPCD87s15BddO9JFam1wHCrdJsVwYtp2OaWLq7HlkijKZu5lx7ZGDXkYl~Vz6x26XK4aY-G-Ji1PfUY~6YZUgolKhnpocEOT59La5sEOYpqmdG7Z93LjHezVgeF1a2Fgy1nPsk4OdOe6YnRgZO6Sm~gSEszcDVF9MmCaDtncbHi0z85zZsYGDd6UO4vRaIfw5Y7IPjJTTw6LjNsbmmYA6dJ22pDNoNBckPKz~6Oe9kxcWbs2r62PFS72aH117tUPDImYKobOxpxBBNqg__',
      popularity: 95,
      region: 'Global',
      playerCount: 0,
    },
    {
      id: '4',
      image: 'https://s3-alpha-sig.figma.com/img/508a/31fe/af114c64b14adbb977e00263812f0c44?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9KR2ZPXcKaBxzHMqU0NT92AwHYznwn-OlaSH1ENXTuRBo7qkrXIJOZl437YQOft2TP4kEIOyXdVQzKCHtSEgqk3G1SolUkupG7cIsuPnalXxtM8fO7~agzhf~Mc6XUr2kJQ5QrZ~-HmFvYu7CYeqtqBeuZygbTbZTzbv1KWeWHuIALyqg362j2-YzTThPsHuUKzngaXCxZbw0E2ilRnq9kRly5PLosehaFulJCFYsjSvciQ47y2VxwJsn3VBlONEvhS2gSuRWx8MJJ8KHgm9vZhI2rKoJhORV62yaszX2ai-PPhaTIw6V2eM~qp3U0eOepCbdUmsnmXoOufEfXtzw__',
      popularity: 95,
      region: 'US',
      playerCount: 0,
    },
    {
      id: '5',
      image: 'https://s3-alpha-sig.figma.com/img/e072/ef7d/b99ed949fafec6718174a126ef9ad0fd?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPX0l313HfCLTTgHjjof5fKEr792XRM-bHBZagXir2TuNnTKyA4ZaP8TztiA7EzMxs5MvQbMgbQJfqJVw8ow0-OI3qqsgyvCY1kD2e1xylAJ9IxQ1uIXzC37wCd-tU4WTwFg2Kz~Nr0zgCM4dRlyHdb561IH-ZHi1Nm7qS1ahYpxFaGfSqUn~6CiavhygbxPACt~8VmHytO-LTAkdrSnm5k9cI3q4~CgtnlHrbRQKsDUH4z15kv~dsEDbjfFnzwm94FxlHI1CocRk3weN1rzf2xxL2Mp12~sAgP3peRwUuuND2ilIr9NgXCyRDwYZ8pd8P7FMoBvsj4tE~4g4FUazA__',
      popularity: 20,
      region: 'Global',
      playerCount: 100,
    },
    {
      id: '6',
      image: 'https://s3-alpha-sig.figma.com/img/e4b2/484f/9603bd404f67d27f5c9a8eea7bf5daa8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GbT~vL7GFLNwbGAIX~QKZ9-c29-XniqyrJJpn79Cfzp~SEgIElLasf5YgrAtvBSNBaDvESaNgKv2pIX-3RwnENHOB6aUPX55KXr8wqH-UxLmS5ytxyKcwQABKQyAFzRkz5LD2xh1Ot5MJwFGPCnvcK6lbcYi0xzarE6iJQYW-7Hcdv2hZwNkoYSWvk1u2cLnnGd3KoTRCZgCl0aG8Lxn1Mdx0bjDxz4lTY9BOYchHmz-Ssl4TOAk3~xLHkP3j0KJU3plQLBsPVENrKc8wPeDkkguvF3CuxY6WhZlZos9JlQbfMHEboeGV8Qgxzfu5TCExVyQVUgmYnzYHcldHf3WWQ__',
      popularity: 30,
      region: 'Global',
      playerCount: 100,
    },
    {
      id: '7',
      image: 'https://s3-alpha-sig.figma.com/img/f466/fcc3/a760f87108cfd71003f9d69e9bb14b80?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i6oiz1ePttieWiE0d9rFa8E0iL5vYBhpyiHhHXxqwUiHMtabATB0UUY2L8ETuS9zeTc5n5l3ofSTIrnKZqJEUuT~G5PqNXogObrg2HnR7JxucMZVw8X5Oevtio0wNp9FkJOWVYvXSttfAVGKJP4-kdcfMykIXHNnGk9oSLHYD5fjQf~H63Mc2Tvo4FJJNE0BIck5FfrTz72k02NsInlCHcmzRw~6i6ixQipb6yUaPAKqDv8LcQpfphk294JN6ZfHsZPmmd5mhyStiZRPNRBTgQGb8NXt2EBGj15nbpWtzPKcgVuGsqRXdARW7CE3oEEIco~70EJ8i-yQTXXJYxg4dw__',
      popularity: 44,
      region: 'Global',
      playerCount: 100,
    },
    {
      id: '8',
      image: 'https://s3-alpha-sig.figma.com/img/57f6/6c13/03756763aa89dbb70bd4ff0c8685e8cf?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XAiXTdNnXUrzJZ3yQLkEvkPHf5VJ2cobJLvNOF47EhaVbjU2Uo1CVIFK87Xsxi0kj670lrrfj3kNgyiYStc2Sf4M-uQaNyHz3cEuN8cJ60zqNRL8Ove-QNR0WfeRJUG0~TTGtt22IOgdgHkJIu6eWhBSjri6Zo5ojGiTOo7WHfpzXe7nO~OZGotNQ8rx6L6DdaTRYEgSin~8qgLbizq7CrxaZfocz1uQymYWDelNPHUo6PTfothO53U6nocU4glUuUlLknz7Jv5nvzk-~rmmK2zPhNz0pw22lQMFehR-V6mzrPDCZF6RclmAMXBckm2rMIxupVzYEjXoyZZxe2Krmg__',
      popularity: 50,
      region: 'Global',
      playerCount: 100,
    },
  ],
  favorites: [],
  loading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const gameId = action.payload;
      const index = state.favorites.indexOf(gameId);
      console.log('inde====>', index, state);

      if (index === -1) {
        state.favorites.push(gameId);
      } else {
        console.log('state.favorites', state.favorites);
        state.favorites.splice(index, 1);
      }

      // Update AsyncStorage
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },

  },
});

export const { toggleFavorite, setFavorites } = gamesSlice.actions;
export default gamesSlice.reducer;

