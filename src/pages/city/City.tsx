import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {CCFont, CColor} from '../../styles/CustomStyle';
const City = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageName}>My favorite Cities :)</Text>
    </View>
  );
};
// Redux
const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(City);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageName: {
    fontFamily: CCFont.medium,
    fontSize: 15,
    color: CColor.black,
  },
});
