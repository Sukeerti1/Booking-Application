import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
//import DatePicker from "react-native-date-ranges";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
        <Button
        onPress={onConfirm} 
        style = {{
            container: {width: "80%", marginHorizontal: "3%"},
            text: {fontSize: 20}
        }}
        primary
        title="Submit"
        />
    )
  }

  return (
    <View>
      {/*  render Header Component here        */}
      <Header />

      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#ffc72c",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          {/* Destination */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#ffc72c",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Enter your Destination" />
          </Pressable>

          {/* Selected Dates */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#ffc72c",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Feather name="calendar" size={24} color="black" />
            {/* <DatePicker
                  style={{
                    width: 350,
                    height: 30,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "transparent",
                  }}
                  customStyles={{
                    placeholderText: {
                      fontSize: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                    headerStyle: {
                      backgroundColor: "#003580",
                    },
                    contentText: {
                      fontSize: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                  }}
                  selectedBgColor="#0047AB"
                  customButton={(onConfirm) => customButton(onConfirm)}
                  onConfirm={(startDate, endDate) =>
                    setSelectedDates(startDate, endDate)
                  }
                  allowFontScaling={false}
                  placeholder={"Select Your Dates"}
                  mode={"range"}
                /> */}
                <TextInput placeholder="Apr25,2018-Apr28,2018"/>
          </Pressable>

          {/* Rooms and Guests */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#ffc72c",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Ionicons name="person-outline" size={24} color="black" />
            <TextInput placeholder="1rm+2adults+0children " />
          </Pressable>

          {/* Search Button */}
          <Pressable
            style={{
              paddingHorizontal: 10,
              borderColor: "#ffc72c",
              borderWidth: 2,
              paddingVertical: 15,
              backgroundColor: "#2a52be"
            }}
          >
            <Text style={{textAlign: "center", fontSize: 15, fontWeight: "500", color: "white"}}>Search</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
