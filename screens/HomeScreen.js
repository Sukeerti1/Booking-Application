import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute} from "@react-navigation/native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
//import DatePicker from "react-native-date-ranges";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route=useRoute();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalvisible, setModalVisible] = useState(false);

  console.log("Routes",route.params)
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
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
const searchPlaces=(place)=>{
  if(!route.params || !selectedDates){
  Alert.alert(
    'Invalid details', 
    'Please enter all the details', 
    [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}
if(route.params
 // && selectedDates
  )
{
  navigation.navigate("Places",{
    rooms:rooms,
    adults:adults,
    children:children,
    selectedDates:selectedDates,
    place:place
  })

}

}
  return (
    <>
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
            onPress={()=>navigation.navigate("Search")}
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
              <TextInput placeholder={route.params ? route.params.input : "Enter Your Destination"} />
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
              <TextInput placeholder="Apr25,2018-Apr28,2018" />
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
              onPress={() => setModalVisible(!modalvisible)}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                style={{ width: "100%" }}
                placeholder={` ${rooms} room +  ${adults} adults +  ${children} children `}
              />
            </Pressable>

            {/* Search Button */}
            <Pressable 
            onPress={()=>searchPlaces(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#ffc72c",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More Spend Less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                backgroundColor: "#003580",
                borderRadius: 10,
                marginTop: 10,
                marginLeft: 20,
                padding: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                you are genious level are in our loyalty program
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                backgroundColor: "#E0E0E0",
                borderRadius: 10,
                marginTop: 10,
                marginLeft: 20,
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                backgroundColor: "#E0E0E0",
                borderRadius: 10,
                marginTop: 10,
                marginLeft: 20,
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                10% Discount
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Enjoy Discounts at participating at properties worldwide
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: 'gray',
              width: 400,
              height: 100
            }}
          >
            <Image
              style={{ width: 350, height: 90, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalvisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalvisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms and Guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalvisible)}
        visible={modalvisible}
        onTouchOutside={() => setModalVisible(!modalvisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>{rooms}</Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setRooms((c) => c + 1)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setAdults(Math.max(0, adults - 1))}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>{adults}</Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setAdults((c) => c + 1)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setChildren(Math.max(1, children - 1))}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>{children}</Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
                onPress={() => setChildren((c) => c + 1)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
