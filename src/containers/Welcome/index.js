/* jshint esversion: 6 */ /* jshint node: true */
// Checked by Matthew (Aug 10)

import React from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';
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
    padding: 20,
  },
  textInput: {
    color: colors.black,
    fontSize: getFontSize(24),
    paddingVertical: dySize(5),
    paddingHorizontal: dySize(20),
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    marginTop: dySize(50),
  },
  label: {
    fontSize: getFontSize(20),
    color: colors.blue,
    marginBottom: 5,
  },
  loadingText: {
    fontSize: getFontSize(16),
    color: colors.red,
    marginTop: 15,
    textAlign: 'center',
  },
});

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    if (email.length * password.length === 0) {
      return;
    }
    const param = {email, password};
    this.props.register(param);
    // this.props.checkNebzyData();
  };

  render() {
    const {email, password} = this.state;
    return (
      <Container style={styles.container}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          onChangeText={this._onChangeInput('email')}
          style={styles.textInput}
          placeholder="Email Address"
          value={email}
          maxLength={40}
          keyboardType="email-address"
          autoCorrect={false}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={this._onChangeInput('password')}
          style={styles.textInput}
          placeholder="Password"
          value={password}
          maxLength={40}
          autoCorrect={false}
        />
        <Button text="John Us" onPress={this.register} style={styles.button} />
        {this.props.loading && (
          <Text style={styles.loadingText}>Loading...</Text>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.routerReducer.isLoading,
});

const mapDispatchToProps = {
  passWelcome: userActions.passWelcome,
  register: userActions.register,
  checkNebzyData: userActions.checkNebzyData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScreen);
