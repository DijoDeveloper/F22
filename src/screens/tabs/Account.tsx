import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

import {AccountIcons} from '../../helpers/Icons';
import AccountListItem from '../../components/AccountListItem';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import EStyleSheet from 'react-native-extended-stylesheet';
import Onboarding from '../Onboarding';
import ProfileImage from '../../../assets/images/profile.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

interface AccountProps {
  navigation: any;
}

const AccountTab = ({navigation}: AccountProps) => {
  const [imageUrl, setImageUrl] = useState('');

  const itemList = [
    {
      label: 'My Details',
      icon: (
        <AccountIcons.PersonalCardIcon style={styles.icon} color={'#181725'} />
      ),
    },
    {
      label: 'Orders',
      icon: <AccountIcons.OrdersIcon style={styles.icon} color={'#181725'} />,
    },
    {
      label: 'Delivery Address',
      icon: <AccountIcons.PinIcon style={styles.icon} color={'#181725'} />,
    },
    {
      label: 'Payment Methods',
      icon: <AccountIcons.PaymentIcon color={'#181725'} />,
    },
    {
      label: 'Notifications',
      icon: <AccountIcons.BellIcon color={'#181725'} />,
    },
    {
      label: 'About',
      icon: <AccountIcons.AboutIcon color={'#181725'} />,
    },
  ];

  const goToOnboarding = () => {
    navigation.navigate(Onboarding.name);
  };

  const openPicker = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setImageUrl(results[0].fileCopyUri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the selection');
      } else {
        throw err;
      }
    }
  };

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => openPicker()}>
            <Image
              style={styles.headerImage}
              source={imageUrl ? {uri: imageUrl} : ProfileImage}
            />
          </TouchableOpacity>
          <View style={styles.textBox}>
            <View style={styles.headerTitleBox}>
              <Text style={styles.headerTitle}>F22Labs</Text>
            </View>
            <Text style={styles.headerSubtitle}>test@f22labs.com</Text>
          </View>
        </View>
        <View style={styles.list}>
          {itemList.map((item, index) => {
            return (
              <AccountListItem
                key={index}
                label={item.label}
                children={item.icon}
              />
            );
          })}
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={goToOnboarding}
            text="Log Out"
            bgColour="#F2F3F2"
            txtColour="#53B175"
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = EStyleSheet.create({
  scrollContainer: {
    backgroundColor: '$whiteColour',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.06,
    paddingTop: screenHeight * 0.1,
    paddingBottom: screenHeight * 0.033,
    borderBottomWidth: 1.0,
    borderBottomColor: '$lightGreyColour',
  },
  headerImage: {
    width: screenHeight * 0.171,
    height: screenHeight * 0.171,
    borderRadius: screenHeight * 0.171,
  },
  textBox: {
    marginLeft: screenWidth * 0.05,
  },
  headerTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: '1.125rem',
    color: '$blackColour',
    marginRight: screenWidth * 0.024,
  },
  headerSubtitle: {
    fontFamily: '$gilroyNormal',
    fontSize: '0.875rem',
    color: '$darkGreyColour',
  },
  headerIcon: {
    color: '$greenColour',
  },
  list: {
    paddingBottom: screenHeight * 0.058,
  },
  buttonBox: {
    paddingBottom: screenHeight * 0.027,
    paddingHorizontal: screenWidth * 0.06,
  },
  icon: {
    color: '#181725',
  },
});

export default {component: AccountTab, name: 'Account'};
