import React from 'react'
import { View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

export function AppHalfSizedBox () {
  return (
    <View
      style={{
        height: hp('1%'),
        width: wp('100%')
      }}
    />
  )
}
