import * as Yup from 'yup';

import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';

import Button from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Formik} from 'formik';
/* eslint-disable no-lone-blocks */
import React from 'react';
import SignScaffold from '../components/SignScaffold';
import Tabs from './Tabs';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const logo = require('../../assets/images/logo-colour.png');

interface SignUpProps {
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .label('Username')
      .matches(
        /(?=.*[a-z]{2})(?=.*[A-Z]){2}(?=.*\d{2})[\S]{6,}$/,
        'Must Contain 6 Characters, Two Uppercase, Two Lowercase, Two Number.',
      ),
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required')
      .label('Email'),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .label('Password'),
  });

  return (
    <SignScaffold>
      <Image style={styles.logo} source={logo} />
      <View style={styles.form}>
        <View>
          <Text style={styles.headerTitle}>Sign up</Text>
          <Text style={styles.headerSubtitle}>
            Enter your credentials to continue
          </Text>
        </View>
        <KeyboardAvoidingView behavior={behavior}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={() => navigation.navigate(Tabs.name)}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <TextInput
                  placeholder="Username"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={styles.input}
                />
                <Text style={[styles.input, {color: 'red'}]}>
                  {errors.name}
                </Text>
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                />
                <Text style={[styles.input, {color: 'red'}]}>
                  {errors.email}
                </Text>
                <TextInput
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={styles.input}
                  secureTextEntry
                />
                <Text style={[styles.input, {color: 'red'}]}>
                  {errors.password}
                </Text>

                {/* <Button onPress={handleSubmit} title="Submit" /> */}
                <View style={styles.termsBox}>
                  <Text style={styles.infoText}>
                    By continuing you agree to our{' '}
                    <Text style={[styles.infoText, styles.greenInfoText]}>
                      Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={[styles.infoText, styles.greenInfoText]}>
                      Privacy Policy
                    </Text>
                    .
                  </Text>
                </View>
                <Button
                  onPress={handleSubmit}
                  bgColour="#53B175"
                  txtColour="#FFF"
                  text="Sign up"
                />
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </SignScaffold>
  );
};

const styles = EStyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: heightScreen * 0.032,
    marginBottom: heightScreen * 0.112,
  },
  form: {
    paddingHorizontal: widthScreen * 0.06,
  },
  headerTitle: {
    fontSize: '1.625rem',
    lineHeight: '1.625rem',
    height: '1.625rem',
    fontFamily: '$gilroyNormal600',
    marginBottom: heightScreen * 0.017,
    color: '$blackColour',
  },
  headerSubtitle: {
    fontSize: '1rem',
    lineHeight: '1rem',
    height: '1rem',
    fontFamily: '$gilroyMedium',
    marginBottom: heightScreen * 0.045,
    color: '$darkGreyColour',
  },
  termsBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: heightScreen * 0.033,
    marginTop: 30,
  },
  infoText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: '0.875rem',
    color: '$blackColour',
    letterSpacing: '0.05rem',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightScreen * 0.028,
  },
  greenInfoText: {
    color: '$greenColour',
    marginLeft: 5.0,
  },
  input: {
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: '1rem',
    color: '$blackColour',
    letterSpacing: '0.05rem',
    marginTop: 5,
  },
});

export default {component: SignUp, name: 'SignUp'};
