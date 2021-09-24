/* eslint-disable no-undef */
import {Dimensions, Image, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Banner from '../../../../assets/images/home_screen/banner.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import FoodCard from '../../../components/FoodCard';
import LogoColour from '../../../../assets/images/logo-colour.png';
import SearchBar from '../../../components/SearchBar';
import SectionTitle from './SectionTitle';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');

const Home = () => {
  let initialDataSet = [
    {
      sectionTitle: '',
      sectionId: '',
      sectionItems: [
        {
          id: '',
          title: '',
          desc: '',
          price: '',
          image: '',
          imageUrl: '',
        },
      ],
    },
  ];

  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataItem, setDataItem] = useState(initialDataSet);

  useEffect(() => {
    getDetails();
  }, []);

  /**
   * #TASK FEEDBACK :
   * for second endpoint the second category has no item to loop i have not restricted that as there is no requirement.
   */

  const getDetails = () => {
    fetch(
      'https://jsonblob.com/api/jsonBlob/bc938c99-cf7d-11eb-a671-3b544f13a561',
    )
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
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={LogoColour} style={styles.logo} />
        </View>
        <View style={[styles.localBox, styles.searchBox]}>
          <SearchBar />
        </View>
        <View style={styles.localBox}>
          <Image style={styles.banner} source={Banner} />
        </View>
        {dataLoaded && (
          <>
            {dataItem.map((item, index) => {
              return (
                <>
                  <View key={index} style={styles.localBox}>
                    <SectionTitle title={item.sectionTitle} />
                  </View>
                  <ScrollView style={styles.horizontalScroll} horizontal={true}>
                    {item.sectionItems.map((foodItem, num) => {
                      return (
                        <View key={num}>
                          <FoodCard
                            title={foodItem.title}
                            desc={foodItem.desc}
                            price={foodItem.price}
                            imageUrl={foodItem.image || foodItem.imageUrl}
                          />
                        </View>
                      );
                    })}
                  </ScrollView>
                </>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = EStyleSheet.create({
  localBox: {
    paddingHorizontal: 25.0,
  },
  container: {
    // flex: 1,
    // paddingTop: 35.0,
    backgroundColor: '$whiteColour',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 36.48,
    height: 40.0,
  },
  searchBox: {
    marginTop: 20.0,
  },
  banner: {
    marginTop: 20.0,
    width: widthScreen * 0.87,
    resizeMode: 'contain',
  },
  horizontalScroll: {
    paddingLeft: 20.0,
    paddingBottom: 10.0,
  },
  scrollFooter: {
    marginBottom: heightScreen * 0.2,
    backgroundColor: 'red',
  },
});

export default {component: Home, name: 'Home'};
