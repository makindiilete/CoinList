import React, {FC} from 'react';
import {StyleProp, Text, TextStyle, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';

type AppTextProps = {
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  numberOfLines?: number;
  title?: boolean;
  size?: 'lg' | 'md' | 'sm';
  children: React.ReactNode;
};

export const AppText: FC<AppTextProps> = ({
  style,
  onPress,
  numberOfLines,
  title,
  size = 'md',
  children,
}) => {
  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return widthPercentageToDP(3);
      case 'md':
        return 16;
      case 'lg':
        return 32;
      default:
        return 16;
    }
  };
  return (
    <Text
      style={[
        title ? styles.title : styles.text,
        style,
        {fontSize: getFontSize()},
      ]}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'font-bold',
    fontSize: 30,
    color: Colors.colorBlack,
    maxWidth: '100%',
  },
  text: {
    fontFamily: 'font-regular',
    fontSize: 16,
    color: Colors.colorBlack,
    maxWidth: '100%',
  },
});
