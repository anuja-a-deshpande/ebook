import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import StarRating from '../Components/StarRating'

export default function Categories () {
    return (
        <>
        <LinearGradient
          colors={['blue', 'skyblue']}
          style={{ height: "15%" }}
        >
          <View style={{ flexDirection: 'row', marginTop: '10%',  justifyContent: 'center', }}>
              <Text style={{ fontWeight: "300",fontSize: 38, color: "white" }}>Categories</Text>
          </View>
        </LinearGradient>
  
        <ScrollView>
          <View style={styles.card}>
              <Image
                source={require('../../assets/images/1.png')}
                resizeMode="stretch"
                style={styles.cardImg}
              />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Funny Category</Text>
              {/* <StarRating ratings={4} reviews={99} /> */}
              <Text style={styles.cardDetails}>
                Amazing description for this Category
              </Text>
            </View>
          </View>
          <View style={styles.card}>
              <Image
                source={require('../../assets/images/1.png')}
                resizeMode="stretch"
                style={styles.cardImg}
              />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Drama Category</Text>
              {/* <StarRating ratings={5} reviews={150} /> */}
              <Text style={styles.cardDetails}>
                Amazing description for this Category
              </Text>
            </View>
          </View>
  
          <View style={styles.card}>
              <Image
                source={require('../../assets/images/1.png')}
                resizeMode="stretch"
                style={styles.cardImg}
              />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Romantic Category</Text>
              {/* <StarRating ratings={3} reviews={50} /> */}
              <Text style={styles.cardDetails}>
                Amazing description for this Category
              </Text>
            </View>
          </View>
  
          <View style={styles.card}>
              <Image
                source={require('../../assets/images/1.png')}
                resizeMode="stretch"
                style={styles.cardImg}
              />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Action Category</Text>
              {/* <StarRating ratings={2} reviews={20} /> */}
              <Text style={styles.cardDetails}>
                Amazing description for this Category
              </Text>
            </View>
          </View>
  
          <View style={styles.card}>
              <Image
                source={require('../../assets/images/1.png')}
                resizeMode="stretch"
                style={styles.cardImg}
              />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Horror Category</Text>
              {/* <StarRating ratings={4} reviews={110} /> */}
              <Text style={styles.cardDetails}>
                Amazing description for this Category
              </Text>
            </View>
          </View>
  
          <View style={styles.card}>
              <Image
                source={require('../../assets/images/1.png')}
                resizeMode="stretch"
                style={styles.cardImg}
              />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Science Fiction Category</Text>
              {/* <StarRating ratings={2} reviews={20} /> */}
              <Text style={styles.cardDetails}>
                Amazing description for this Category
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImg: {
      height: '100%',
      width: '20%',
      alignSelf: 'center',
      borderRadius: 8,
      marginRight: 10
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    }
  })