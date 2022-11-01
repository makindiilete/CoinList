import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  RefreshControl,
  Animated,
  Dimensions,
  Pressable,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {AppScreen} from '../../components/AppScreen';
import {AppContainer} from '../../components/AppContainer';
import {AppFullSizedBox} from '../../components/AppFullSizedBox';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const {height} = Dimensions.get('screen');

export function CoinsScreen() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [coins, setCoins] = useState<{[item: string]: any}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  const [text, setText] = useState('');

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 2 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 2 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 2000,
    }).start();
  };

  const fetchCoins = async (refreshing: boolean) => {
    if (refreshing) {
      setRefreshing(true);
    } else {
      setIsLoading(true);
    }
    try {
      const response = await axios.get(
        'https://staging-biz.coinprofile.co/v3/currency/rate',
      );
      setCoins(response.data?.data?.rates);
    } catch (error) {
      Alert.alert('Oops', 'Something went wrong', [
        {
          text: 'Ok',
        },
        {
          text: 'Try Again',
          onPress: () => fetchCoins(false),
        },
      ]);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCoins(false);
  }, []);

  useEffect(() => {
    let matchedCoin: {[coinsKey: string]: any} = {};
    let searchString = text;
    if (searchString !== '') {
      for (const coinsKey in coins) {
        if (coinsKey?.includes(searchString?.toUpperCase())) {
          matchedCoin[coinsKey] = coins[coinsKey];
          setCoins(matchedCoin);
        }
      }
    } else {
      fetchCoins(false);
    }
  }, [text]);

  return (
    <AppScreen>
      <AppContainer>
        <AppFullSizedBox />
        <TextInput
          style={styles.input}
          onChangeText={val => setText(val)}
          value={text}
          placeholder="Search Coins"
          placeholderTextColor={Colors.colorGrey}
        />
        <AppFullSizedBox />
        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={Colors.colorPrimary} />
          </View>
        ) : (
          <>
            <Animated.FlatList
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: true},
              )}
              contentContainerStyle={{paddingBottom: heightPercentageToDP(13)}}
              data={Object.keys(coins)}
              keyExtractor={item => item?.toString()}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => {
                    fetchCoins(true);
                  }}
                />
              }
              renderItem={({item, index}) => {
                //Normal Animation
                const inputRange = [
                  -1,
                  0,
                  (height * 0.1 + 15) * index,
                  (height * 0.1 + 15) * (index + 3),
                ];
                const scale = 1;
                const opacity = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0],
                });
                const Offset = scrollY.interpolate({
                  inputRange,
                  outputRange: [0, 0, 0, 500],
                });
                // @ts-ignore
                return (
                  <>
                    <Pressable>
                      <Animated.View
                        style={[
                          styles.card,
                          {
                            transform: [{scale: scale}, {translateX: Offset}],
                            opacity: opacity,
                          },
                        ]}>
                        <View style={styles.cardContent}>
                          <Text style={styles.text}>{item}</Text>
                          {selectedCoin === item ? (
                            <Text
                              style={styles.text}
                              onPress={() => {
                                fadeOut();
                                setSelectedCoin('');
                              }}>
                              Close
                            </Text>
                          ) : (
                            <Text
                              style={styles.text}
                              onPress={() => {
                                fadeIn();
                                setSelectedCoin(item);
                              }}>
                              View
                            </Text>
                          )}
                        </View>
                        {selectedCoin === item && (
                          <Animated.View
                            style={[
                              {
                                // Bind opacity to animated value
                                opacity: fadeAnim,
                              },
                            ]}>
                            <Text style={styles.rate}>
                              Rate: {Number(coins[item].rate).toFixed(2)}
                            </Text>
                          </Animated.View>
                        )}
                      </Animated.View>

                      <AppFullSizedBox />
                    </Pressable>
                  </>
                );
              }}
            />
          </>
        )}
      </AppContainer>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: heightPercentageToDP(10),
    width: '100%',
    backgroundColor: Colors.colorWhite,
    borderRadius: 10,
    borderColor: Colors.colorGreyLight,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rate: {
    color: Colors.colorPrimary,
    fontFamily: 'Inter-Medium',
    marginTop: heightPercentageToDP(2),
  },
  text: {
    color: Colors.colorBlack,
    fontFamily: 'Inter-Bold',
  },
  icon: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(2),
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP(80),
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.colorPrimary,
    padding: 10,
    color: Colors.colorBlack,
  },
});
