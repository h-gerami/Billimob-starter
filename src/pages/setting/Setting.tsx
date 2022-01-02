import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, CloadLoading} from '../../common';
import {BLang} from '../../Language';
import {set_lang} from '../../Redux/Actions';
import {CColor, wp} from '../../styles/CustomStyle';
interface SettingType {
  lang: string;
  navigation: any;
  set_lang: (lang: string) => void;
}
const Setting = (props: SettingType) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const {lang, navigation, set_lang} = props;
  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const onLangPress = () => {
    if (lang === 'en') {
      set_lang('fa');
    } else {
      set_lang('en');
    }
  };
  return (
    <View style={styles.container}>
      <Text>Select Your Desire Language:</Text>
      {false && <CloadLoading />}
      <TouchableOpacity style={styles.langButton} onPress={onLangPress}>
        <Text>{lang === 'en' ? 'fa' : 'en'}</Text>
      </TouchableOpacity>
      <Button
        theme={'dark'}
        style={{backgroundColor: CColor.red}}
        title={BLang(lang)?.SignOut!}
        onPress={goHome}
      />
    </View>
  );
};

// Redux
const mapStateToProps = (state: {UserReducer: {lang: string}}) => {
  const {lang} = state.UserReducer;
  return {
    lang,
  };
};
const mapDispatchToProps = {set_lang};
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: CColor.bgColor,
    paddingBottom: 80,
    justifyContent: 'space-around',
  },
  langButton: {
    backgroundColor: CColor.blue,
    width: 100,
    borderRadius: 100,
    height: wp(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
