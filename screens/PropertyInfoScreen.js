import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const PropertyInfoScreen = () => {
    const route = useRoute()
    //console.log(route.params)
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: `${route.params.name}`,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerTitleStyle: {
            backgroundColor: "#003580",
            height: 110,
            width: "100%",
            borderBottomColor: "transparent",
            shadowColor: "transparent",
          },
        });
      }, []);
  return (
    <SafeAreaView>

    </SafeAreaView>
  )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})