/* jshint esversion: 6 */ /* jshint node: true */
// Checked by Matthew (Aug 10)

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Container} from 'native-base';
import {colors} from '../../theme/colors';
import {userActions} from '../../redux/actions';
import {Button} from '../../components';
import {getFontSize, dySize} from '../../libs/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    alignItems: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: getFontSize(24),
    paddingVertical: dySize(5),
    paddingRight: dySize(20),
  },
  button: {
    marginTop: dySize(50),
  },
});

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'matthew.sadler.9@gmail.com',
      password: 'Matt!@3',
    };
  }

  componentDidMount() {
    this.props.passWelcome();
  }

  _onChangeInput = key => value => {
    this.setState({[key]: value});
  };

  register = () => {
    const {email, password} = this.state;
    const param = {email, password};
    this.props.register(param);
  };

  render() {
    const {email, password} = this.state;
    return (
      <Container style={styles.container}>
        <TextInput
          textAlign="center"
          onChangeText={this._onChangeInput('email')}
          style={styles.textInput}
          placeholder="Email Address"
          value={email}
          maxLength={40}
          keyboardType="email-address"
          autoCorrect={false}
        />
        <TextInput
          textAlign="center"
          onChangeText={this._onChangeInput('password')}
          style={styles.textInput}
          placeholder="Password"
          value={password}
          maxLength={40}
          autoCorrect={false}
        />
        <Button text="Sign Up" onPress={this.register} style={styles.button} />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  passWelcome: userActions.passWelcome,
  register: userActions.register,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(WelcomeScreen);
