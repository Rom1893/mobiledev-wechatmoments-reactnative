import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from '../../../components/molecules/TopBar';
import {Header} from '../../Header/ui/Header';
import {TweetList} from '../../TweetList/ui/TweetList';

const Home = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <Header />
      <TweetList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
