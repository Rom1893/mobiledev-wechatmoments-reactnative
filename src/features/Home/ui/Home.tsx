import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from '../../../components/molecules/TopBar';
import {TweetList} from '../../TweetList/ui/TweetList';

const Home = () => {
  return (
    <View style={styles.bigContainer}>
      <TopBar />
      <View style={styles.container}>
        <TweetList />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigContainer: {
    flex: 1,
  },
});
