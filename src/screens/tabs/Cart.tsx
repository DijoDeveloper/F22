import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import CartItem from '../../components/CartItem';
import EStyleSheet from 'react-native-extended-stylesheet';
import Endpoints from '../../helpers/EndPoints';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');

const CartTab = (props: any) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    fetch(Endpoints.CartListOne.url)
      .then((response) => response.json())
      .then((json) => {
        setDataItem(json);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mycart}>My Cart</Text>
      {dataLoaded && (
        <>
          <View style={{flex: 0.95}}>
            <FlatList
              data={dataItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={true}
              renderItem={({item, index}) => {
                return (
                  <View key={index} style={styles.cartItem}>
                    <CartItem item={item} dataIndex={index} />
                  </View>
                );
              }}
              ListEmptyComponent={() => {
                return (
                  <View style={styles.listEmpty}>
                    <Image
                      resizeMode={'contain'}
                      source={require('../../../assets/images/Cart/empty-cart.png')}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.scrollFooter} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('OrderAccepted');
            }}
            style={styles.checkOut}>
            <Text style={styles.title}>Go to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    // width: widthScreen,
    // minHeight: heightScreen,
    paddingTop: 10,
    backgroundColor: '$whiteColour',
    paddingBottom: 10,
  },
  listEmpty: {
    alignItems: 'center',
  },
  cartItem: {
    marginHorizontal: widthScreen * 0.05,
    marginVertical: heightScreen * 0.01,
  },
  checkOut: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$greenColour',
    paddingHorizontal: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    borderRadius: 15,
  },
  title: {
    color: '$whiteColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
  },
  subtitle: {
    color: '$whiteColour',
    fontFamily: '$gilroyNormal',
    fontSize: '1rem',
    marginLeft: 15,
  },
  mycart: {
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1.25rem',
    alignSelf: 'center',
    paddingVertical: 20,
  },
});

export default {component: CartTab, name: 'Cart'};
