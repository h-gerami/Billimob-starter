/* eslint-disable @typescript-eslint/no-shadow */
import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import services from '../../global/Services';
import {set_err} from '../../Redux/Actions';
import {CCFont, CColor, wp} from '../../styles/CustomStyle';

export interface HomePageType {
  loading: boolean;
  err: string;
  set_err: (err: string) => void;
}

function Home(props: HomePageType) {
  const {err, set_err} = props;
  // const fetchPosts = () => {
  //   services.
  // }
  useEffect(() => {
    if (err) {
      Alert.alert('Error', err, [
        {
          text: 'OK',
          onPress: () => set_err(''),
          style: 'cancel',
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [err]);
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
    </View>
  );
}

// Redux
const mapStateToProps = (state: {
  UserReducer: {
    loading: boolean;
    err: string;
  };
}) => {
  const {loading, err} = state.UserReducer;
  return {
    loading,
    err,
  };
};
const mapDispatchToProps = {
  set_err,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: CColor.bgColor,
    paddingBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontFamily: CCFont.bold,
    fontSize: wp(5),
  },
});
