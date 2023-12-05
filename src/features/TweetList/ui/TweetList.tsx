import React, {ReactElement, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

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

  useEffect(() => {
    dispatch(fetchUserTweets('jsmith'));
    //! Jsmith Not necessary as we are already importing a tweets.json
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={tweets}
        renderItem={tweet => <Tweet tweet={tweet.item} />}
      />
    </View>
  );
}

const mapStateToProps = (state: RootState) =>
  ({
    tweets: state.tweets.data,
  } as ITweetListProps);

export const TweetList = connect(mapStateToProps)(TweetListComponent);

const styles: Partial<BasicStyle> = StyleSheet.create<Partial<BasicStyle>>({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
