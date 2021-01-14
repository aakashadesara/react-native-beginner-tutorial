import React from "react";
import { Text, View, Image, Button, Linking } from "react-native";

/*
    The NewsItem component is a 'functional' component which has exactly one job,
    to render one News article in our feed. 

    This component is used in the ScrollView in App.js file.
*/
export function NewsItem(props) {
  const title = props.title;
  const description = props.description;
  const image = props.image;
  const url = props.url;

  return (
    <>
      <View style={{ padding: 16 }}>
        <Image source={{ uri: image }} style={{ height: 200 }}></Image>
        <Text style={{ paddingTop: 16, fontSize: 24, fontWeight: "bold" }}>
          {title}
        </Text>
        <Text>{description}</Text>
        <Button
          title={"Read the article"}
          onClick={() => {
            // Linking is a React Native module which opens up a url in the
            //      user's default browser
            Linking.openURL(url);
          }}
        ></Button>
        <View
          style={{
            height: 1,
            backgroundColor: "#CCC",
            marginTop: 24,
            marginBottom: 24,
          }}
        ></View>
      </View>
    </>
  );
}
