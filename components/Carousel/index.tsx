import React from 'react';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/Colors';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Carousel = () => {
  const swiperMarker = () => {
    return (
      <View
        style={{
          backgroundColor: Colors.colorGrey,
          width: 10,
          height: 10,
          borderRadius: 5,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    );
  };

  const swiperMarkerActive = () => {
    return (
      <View
        style={{
          backgroundColor: Colors.colorPrimary,
          width: 10,
          height: 10,
          borderRadius: 5,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    );
  };

  return (
    <View style={{height: hp('49.5%'), width: wp('100%')}}>
      <Swiper
        autoplay
        height={hp('49.5%')}
        width={wp('100%')}
        dot={swiperMarker()}
        activeDot={swiperMarkerActive()}
        autoplayTimeout={3}>
        <View>
          <Image
            source={require('../../assets/images/carousel_one.png')}
            style={{
              resizeMode: 'contain',
              height: hp('25%'),
              width: wp('100%'),
            }}
          />
          <View style={{height: hp('2%'), width: wp('100%')}} />

          <View style={{height: hp('18%'), width: wp('100%')}}>
            <Text
              style={[
                styles.swiperTitle,
                {
                  color: Colors.colorPrimary,
                  fontFamily: 'Inter-Bold',
                  fontSize: 14,
                },
              ]}>
              Bitcoin
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/carousel_two.png')}
            style={{
              resizeMode: 'contain',
              height: hp('25%'),
              width: wp('100%'),
            }}
          />
          <View style={{height: hp('2%'), width: wp('100%')}} />

          <View style={{height: hp('18%'), width: wp('100%')}}>
            <Text
              style={[
                styles.swiperTitle,
                {
                  color: Colors.colorPrimary,
                  fontFamily: 'Inter-Bold',
                  fontSize: 14,
                },
              ]}>
              Ethereum
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require('../../assets/images/carousel_three.png')}
            style={{
              resizeMode: 'contain',
              height: hp('25%'),
              width: wp('100%'),
            }}
          />
          <View style={{height: hp('2%'), width: wp('100%')}} />

          <View style={{height: hp('18%'), width: wp('100%')}}>
            <Text
              style={[
                styles.swiperTitle,
                {
                  color: Colors.colorPrimary,
                  fontFamily: 'Inter-Bold',
                  fontSize: 14,
                },
              ]}>
              Dodge Coin
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require('../../assets/images/carousel_four.png')}
            style={{
              resizeMode: 'contain',
              height: hp('25%'),
              width: wp('100%'),
            }}
          />
          <View style={{height: hp('2%'), width: wp('100%')}} />

          <View style={{height: hp('18%'), width: wp('100%')}}>
            <Text
              style={[
                styles.swiperTitle,
                {
                  color: Colors.colorPrimary,
                  fontFamily: 'Inter-Bold',
                  fontSize: 14,
                },
              ]}>
              United State Dollar
            </Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  swiperTitle: {
    fontSize: hp('4%'),
    color: Colors.colorSecondary,
    textAlign: 'center',
  },
});
