import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, CloadLoading} from '../../common';
import {BLang} from '../../Language';
import {set_lang, set_theme} from '../../Redux/Actions';
import {CColor, wp} from '../../styles/CustomStyle';
interface SettingType {
  lang: string;
  navigation: any;
  set_lang: (lang: string) => void;
  theme: string;
  set_theme: (theme: string) => void;
}
const Setting = (props: SettingType) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const {lang, navigation, set_lang, theme, set_theme} = props;
  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const onChangeThemePressed = () => {
    if (theme === 'light') {
      set_theme('dark');
    } else {
      set_theme('light');
    }
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.langButton} onPress={onLangPress}>
          <Text>{lang === 'en' ? 'fa' : 'en'}</Text>
        </TouchableOpacity>

        <Button
          theme={theme}
          style={styles.langButton}
          title={theme}
          onPress={onChangeThemePressed}
        />
      </View>
      <Button
        theme={theme}
        style={{backgroundColor: CColor.red}}
        title={BLang(lang)?.SignOut!}
        onPress={goHome}
      />
    </View>
  );
};

// Redux
const mapStateToProps = (state: {
  UserReducer: {lang: string; theme: string};
}) => {
  const {lang, theme} = state.UserReducer;
  return {
    lang,
    theme,
  };
};
const mapDispatchToProps = {set_lang, set_theme};
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
