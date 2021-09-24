import {Image, Text, TouchableOpacity, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CloseIcon from '../../assets/icons/commons/close.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';

const CartItem = (props) => {
  return (
    <View style={styles.container}>
      {(props.item.imageUrl || props.item.image) && (
        <Image
          resizeMode={'contain'}
          source={{uri: props.item.imageUrl || props.item.image}}
          style={{height: 65, width: 65, marginRight: 25}}
        />
      )}
      <TouchableOpacity style={styles.closeIconView}>
        <Image source={CloseIcon} style={styles.closeIcon} />
      </TouchableOpacity>
      <View>
        <View style={styles.containerV1}>
          <View>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.subtitle}>
              {props.item.desc} * {props.item.quantitySelected}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.plusMinus,
            {marginTop: 12, justifyContent: 'space-between'},
          ]}>
          <View style={styles.plusMinus}>
            <TouchableOpacity
              style={[
                styles.button,
                {borderColor: '#C1C1C1', backgroundColor: null},
              ]}>
              <AntDesign name={'minus'} size={22} color={'#C1C1C1'} />
            </TouchableOpacity>
            <Text style={[styles.title, {marginHorizontal: 10}]}>
              {props.item.quantitySelected}
            </Text>
            <TouchableOpacity style={styles.button}>
              <AntDesign name={'plus'} size={22} color={'white'} />
            </TouchableOpacity>
          </View>
          {/* <Text>$4.99</Text> */}
        </View>
      </View>
      <TouchableOpacity style={[styles.closeIconView, {bottom: 25, top: null}]}>
        <Text style={styles.title}>
          $
          {parseFloat(props.item.price) * parseInt(props.item.quantitySelected)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 25,
    borderBottomWidth: 0.6,
    borderColor: '$lightGreyColour',
    // borderWidth: 1,
  },
  containerV1: {
    flexDirection: 'row',
    // alignItems: '',
  },
  plusMinus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 7.0,
    padding: 4.0,
    borderWidth: 1,
    borderColor: '$greenColour',
    backgroundColor: '$greenColour',
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
  closeIcon: {
    height: 15,
    width: 15,
  },
  closeIconView: {
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 10,
  },
});

export default CartItem;
