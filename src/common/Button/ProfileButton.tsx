import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CColor} from '../../styles/CustomStyle';
export interface ProfileButtonType {
  style?: object;
}
const ProfileButton = (props: ProfileButtonType) => {
  const {style} = props;
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/hossein.jpg')}
        />
      </View>
      <View style={styles.dot} />
    </TouchableOpacity>
  );
};
export {ProfileButton};
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    backgroundColor: CColor.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 25,
    height: 25,
    borderRadius: 100,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 100,
    backgroundColor: CColor.black,
    position: 'absolute',
    right: -1,
    top: -1,
    borderWidth: 2,
    borderColor: CColor.white,
  },
});
