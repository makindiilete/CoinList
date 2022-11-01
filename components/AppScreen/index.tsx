import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Colors from '../../constants/Colors';
import {AppStatusBar} from '../AppStatusBar';
import {AppFullSizedBox} from '../AppFullSizedBox';

type AppScreenProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  transparent?: boolean;
};
export function AppScreen({children, style, transparent}: AppScreenProps) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: transparent ? 'transparent' : Colors.colorWhite,
        flex: 1,
      }}>
      {Platform.OS === 'ios' ? (
        <AppStatusBar barStyle="dark-content" />
      ) : (
        <AppStatusBar
          barStyle="dark-content"
          backgroundColor={Colors.colorWhite}
        />
      )}

      <View
        style={[
          style,
          {
            flex: 1,
            backgroundColor: transparent ? 'transparent' : Colors.colorWhite,
          },
        ]}>
        {children}
        <AppFullSizedBox />
      </View>
    </SafeAreaView>
  );
}
