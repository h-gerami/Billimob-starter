import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {BInput, Button} from '../../common';
import {BLang} from '../../Language';
import {set_lang, set_user} from '../../Redux/Actions';
import {KeysOfUser, ValuesOsUser} from '../../Redux/Reducers/UserReducer';
import {CColor, wp} from '../../styles/CustomStyle';
import {UserType} from '../../Types/types';
import {isRtl} from '../../Types/utils';

interface LoginType {
  set_user: (key: KeysOfUser, value: ValuesOsUser) => void;
  user: UserType;
  navigation: any;
  lang: string;
  set_lang: (lang: string) => void;
  theme: string;
}

const Login = (props: LoginType) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const {navigation, set_lang, user, lang, set_user, theme} = props;
  const [passWord, setPassword] = useState<string>('');
  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Tabs'}],
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
      <TouchableOpacity onPress={onLangPress}>
        <Text>{lang === 'en' ? 'fa' : 'en'}</Text>
      </TouchableOpacity>

      <View style={styles.imgWrapper}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo-white2.png')}
        />
      </View>
      <View style={styles.footer}>
        <BInput
          icon="account"
          placeHolder={BLang(lang)?.UserName}
          disable={false}
          onChangeText={t => set_user('username', t)}
          value={user.username}
          style={{marginBottom: wp(3)}}
          isRtl={isRtl(lang)}
        />
        <BInput
          secureTextEntry={true}
          icon="lock"
          isRtl={isRtl(lang)}
          placeHolder={BLang(lang)?.Password}
          disable={false}
          onChangeText={t => setPassword(t)}
          value={passWord}
          style={{marginBottom: wp(10)}}
        />
        <Button theme={theme} title={BLang(lang)?.SignIn!} onPress={goHome} />
      </View>
    </View>
  );
};
// Redux
const mapStateToProps = (state: {
  UserReducer: {user: UserType; lang: string; theme: string};
}) => {
  const {user, lang, theme} = state.UserReducer;
  return {
    user,
    lang,
    theme,
  };
};
const mapDispatchToProps = {set_user, set_lang};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    padding: wp(4),
    flex: 1,
    backgroundColor: CColor.bgColor,
  },
  logo: {
    tintColor: CColor.black,
    width: wp(50),
    height: wp(50),
    resizeMode: 'contain',
  },
  footer: {
    height: wp(60),
    justifyContent: 'center',
    // alignItems: '',
  },
  imgWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
