import React, {ReactElement, useCallback, useEffect, useState} from 'react';
import {RefreshControl, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {fetchUser} from '../../Header/state/user.thunk';
import {Header} from '../../Header/ui/Header';
import {Tweet} from './../../../features/Tweet/ui/Tweet';
import {fetchUserTweets} from './../../../features/TweetList/state/tweets.thunk';
import {useAppDispatch} from './../../../hooks';
import {BasicStyle, ITweet, RootState} from './../../../types';

interface ITweetListProps {
  tweets: Array<ITweet>;
}

function TweetListComponent({tweets}: ITweetListProps): ReactElement {
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    //* Dispatch actions to refresh tweets and user data
    Promise.all([dispatch(fetchUserTweets('')), dispatch(fetchUser(''))])
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  }, [dispatch]);

  useEffect(() => {
    onRefresh(); //* Call onRefresh for initial data loading
  }, [onRefresh]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={tweets}
        renderItem={tweet => <Tweet tweet={tweet.item} />}
        keyExtractor={(item, index) => `tweet-${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
  tweets: state.tweets.data,
  user: state.user.data,
});

export const TweetList = connect(mapStateToProps)(TweetListComponent);

const styles: Partial<BasicStyle> = StyleSheet.create<Partial<BasicStyle>>({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
