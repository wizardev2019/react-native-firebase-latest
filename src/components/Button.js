/* jshint esversion: 6 */ /* jshint node: true */
// Checked by Matthew (Aug 08)
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Ripple from 'react-native-material-ripple';
import {colors} from '../theme/colors';
import {getFontSize, dySize} from '../libs/responsive';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: dySize(20),
  },
  buttonView: {
    paddingVertical: dySize(5),
    paddingHorizontal: dySize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Button component used in app
export default class Button extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.number,
    textColor: PropTypes.string,
    textAlign: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    backgroundColor: colors.green,
    fontSize: getFontSize(20),
    textColor: colors.lightgray,
    textAlign: 'left',
    style: {},
  };

  render() {
    const {
      backgroundColor,
      fontSize,
      text,
      onPress,
      textColor,
      textAlign,
      style,
      disabled,
    } = this.props;
    return (
      <View style={[styles.buttonContainer, style]}>
        <Ripple
          disabled={disabled}
          onPress={onPress}
          rippleDuration={400}
          rippleCentered
          rippleColor={colors.white}>
          <View style={{...styles.buttonView, backgroundColor}}>
            <Text
              style={{
                fontSize,
                color: textColor,
                textAlign,
              }}>
              {text}
            </Text>
          </View>
        </Ripple>
      </View>
    );
  }
}
