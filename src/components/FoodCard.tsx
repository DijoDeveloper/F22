import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import PlusIcon from '../../assets/icons/commons/plus.svg';
import React from 'react';

const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');
interface FoodCardProps {
  title: string;
  desc: string;
  price: string;
  imageUrl: string;
}

const FoodCard = (props: FoodCardProps) => {
  const {title, desc, price, imageUrl} = props;
  return (
    <TouchableOpacity onPress={() => null} style={styles.card}>
      <View style={styles.imageBox}>
        <Image source={{uri: imageUrl}} style={styles.img} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{desc}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>$ {price}</Text>
        <TouchableOpacity onPress={() => null} style={styles.button}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  card: {
    width: widthScreen * 0.42,
    maxHeight: heightScreen * 0.28,
    borderWidth: 1.0,
    borderColor: '$lightGreyColour',
    borderRadius: 10.0,
    padding: 15.0,
    flexDirection: 'column',
    marginRight: 15.0,
  },
  imageBox: {
    height: heightScreen * 0.11,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
  },
  subtitle: {
    color: '$darkGreyColour',
    fontFamily: '$gilroyMedium',
    fontSize: '0.825rem',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightScreen * 0.02,
  },
  price: {
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1.125rem',
  },
  button: {
    backgroundColor: '$greenColour',
    borderRadius: 15.0,
    padding: 12.0,
  },
  img: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
});

export default FoodCard;
