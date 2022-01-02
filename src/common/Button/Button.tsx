import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CCFont, CColor, wp} from '../../styles/CustomStyle';
interface ButtonType {
  title: string;
  onPress?: () => void;
  style?: object;
  theme?: string;
}
const Button = (props: ButtonType) => {
  const {title, style, onPress, theme} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          style,
          theme === 'dark'
            ? {backgroundColor: CColor.black}
            : {backgroundColor: CColor.white},
        ]}>
        <Text
          style={[
            styles.title,
            theme === 'dark' ? {color: CColor.white} : {color: CColor.black},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export {Button};
const styles = StyleSheet.create({
  container: {
    backgroundColor: CColor.blue,
    height: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: CCFont.bold,
    fontSize: wp(4),
    lineHeight: wp(4),
    color: CColor.white,
  },
});
