import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';
import {CColor, CCFont, wp} from '../../styles/CustomStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface BInputType {
  placeHolder?: string;
  disable?: boolean;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  style?: object;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  onPress?: () => void;
  icon?: string;
  onblur?: () => void;
  clickableIcon?: boolean;
  isRtl?: boolean;
}
const BInput = (props: BInputType) => {
  const {
    placeHolder,
    disable,
    onChangeText,
    secureTextEntry,
    style,
    value,
    keyboardType,
    onPress,
    icon,
    onblur,
    clickableIcon,
    isRtl,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        textContentType={secureTextEntry ? 'oneTimeCode' : 'none'}
        style={[
          styles.textInput,
          isRtl ? {textAlign: 'right'} : {textAlign: 'left'},
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={CColor.gray}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        editable={!disable}
        onBlur={onblur}
      />
      {icon ? (
        <TouchableOpacity
          disabled={clickableIcon || true}
          onPress={onPress}
          style={[styles.iconWrapper, isRtl ? {left: 0} : {right: 0}]}>
          <Icon name={icon} size={wp(6)} color={CColor.white} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export {BInput};
const styles = StyleSheet.create({
  container: {
    backgroundColor: CColor.white,
    // flex: 1,
    alignSelf: 'stretch',
    height: wp(10),
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    backgroundColor: CColor.blue,
    height: wp(10),
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  textInput: {
    fontFamily: CCFont.medium,
    color: CColor.black,
    fontSize: wp(4),
    flex: 1,
    marginHorizontal: wp(2),
  },
});
