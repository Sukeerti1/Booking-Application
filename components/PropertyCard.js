import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 250 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 180 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6cb4ee",
                paddingVertical: 3,
                borderRadius: 5,
                width: 95,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 10 }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 200,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text style={{color: 'red', fontSize: 18, textDecorationLine: "line-through" }}>Rs {property.oldPrice * adults}</Text>
            <Text style={{ fontSize: 18,  }}>Rs {property.newPrice * adults}</Text>
          </View>

          <View style={{marginTop: 6}}>
            <Text style={{fontSize: 13, color: 'gray'}}>Deluxe Room</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>Hotel Room : 1 bed</Text>
          </View>

          <View style={{
            backgroundColor: '#6082b6',
            paddingVertical: 2,
            borderRadius: 5,
            marginTop: 2,
            width: 150,
            paddingHorizontal: 3
          }}>
            <Text style={{textAlign: 'center', color: 'white', }}>Limited Time Deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
