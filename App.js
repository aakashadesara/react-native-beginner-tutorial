import React, { Component } from "react";
import { StyleSheet, View, TextInput, ScrollView, Text } from "react-native";
import { NewsItem } from "./NewsItem.js";

const FAKE_NEWS_CONTENT = [
  {
    title: "Aliens Invade Earth",
    description:
      "4,300 space ships enter Earths ozone layer and invade the planet.",
    image:
      "https://images.unsplash.com/photo-1495726569656-8b8886143e6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2514&q=80",
    url: "www.google.com",
  },
  {
    title: "Apple Buys Microsoft",
    description:
      "Largest company in the world buys second largest company for $3",
    image:
      "https://images.unsplash.com/photo-1552255349-450c59a5ec8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80",
    url: "www.google.com",
  },
  {
    title: "Elon Musk Invents New Species",
    description:
      "Genius philanthropist Elon Musk creates a new species of humanoid creatures",
    image:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2555&q=80",
    url: "www.google.com",
  },
];

export default class App extends Component {
  /*
    We are overriding our App Component's 'constructor'. In our case, 
    we want the constructor to do what it used to do before (so we call
    super(props) which tells our class to do what it used to do by default).

    But, after doing its default behavior, we also tell the app to set 
    the state to an empty 'news' array so when the component renders, it can
    loop through an empty array rather than a null value. We also set our default search 
    value to be an empty string.
  */
  constructor(props) {
    super(props);

    this.state = {
      news: FAKE_NEWS_CONTENT, // this is sample data, un-comment if you want to see
      // news: [],
      search: "",
    };
  }

  /* 
    componentDidMount is a LifeCycle Method in React which executes only after 
    the first render on the client (which in our case, is our React Native app).

    Basically, the first time we load this component, this method will run. 

    In our case, when our component "mounts", we want to run the lil.api News API
    to fetch News data and set our component's state so it knows what to render.
  */
  componentDidMount() {
    // fetch("https://api.lil.software/news")
    //   .then((j) => {
    //     return j.json();
    //   })
    //   .then((res) => {
    //     this.setState({ news: res["articles"] });
    //   });
  }

  /*
    updateSearch is a helper method that our input box will call every time the 
    input box is updated. Whatever text is in the input box will be saved in the 
    'search' state of our component.
  */
  updateSearch = (text) => {
    this.setState({
      search: text,
    });
  };

  /*
    The render() method is the "painter" function for React. This tells the Class
    Component exactly what to paint to the screen.

    In our case, we are painting a "View" which is a box and that box contains
    a TextInput (our search bar) and a ScrollView (which is a scrollable box).

    In side the ScrollView, we are looping through our map of data (which is stored
    in the 'news' state of this component) and for every article, we are rendering 
    NewsItem which was created in NewsItem.js file.
  */
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Put your query here"
          onChangeText={(text) => this.updateSearch(text)}
          style={{ fontSize: 20, marginBottom: 24 }}
        />

        <ScrollView style={styles.newsContainer}>
          {this.state.news.map((data) => {
            return <Text>{data.title}</Text>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 80,
  },
  newsContainer: {
    width: "100%",
    backgroundColor: "#EEE",
  },
});
