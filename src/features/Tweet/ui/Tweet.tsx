import React, {ReactElement, useState} from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  UIManager,
  View,
  ViewStyle,
} from 'react-native';

import CommentSvg from '../../../Assets/svgs/CommentSvg';
import {BasicStyle, ITweet} from '../../../types';

interface ITweetProps {
  tweet: ITweet;
}

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Tweet({tweet}: ITweetProps): ReactElement {
  const [showComments, setShowComments] = useState(false);
  const isSingleImage = tweet?.images?.length === 1;

  const toggleComments = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowComments(!showComments);
  };

  if (!tweet.sender) {
    return <></>;
  }
  return (
    <View testID="tweet-wrapper" style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: tweet?.sender?.avatar || '',
          width: 40,
          height: 40,
        }}
      />
      <View style={styles.tweetContainer}>
        <View>
          <Text style={styles.sender}>
            {tweet?.sender?.nick || tweet?.sender?.username}
          </Text>
          {tweet?.content && (
            <Text testID="tweet-content" style={styles.text}>
              {tweet.content}
            </Text>
          )}
        </View>
        {tweet?.images?.length && (
          <View testID="tweet-images-wrapper" style={styles.imagesWrapper}>
            {tweet.images.map((image, index) => (
              <Image
                testID="tweet-image"
                key={`${index}-${image?.url}`}
                style={styles.image}
                source={{
                  uri: image?.url || '',
                  width: isSingleImage ? 150 : 64,
                  height: isSingleImage ? 150 : 64,
                }}
              />
            ))}
          </View>
        )}
        {tweet.comments && (
          <TouchableOpacity onPress={toggleComments} style={styles.commentIcon}>
            <CommentSvg />
          </TouchableOpacity>
        )}
        {showComments && tweet.comments && (
          <View testID="tweet-comments-wrapper" style={styles.commentsWrapper}>
            {tweet.comments.map((comment, index) => (
              <Text
                key={`${index}-${comment.sender.username}`}
                style={styles.comment}>
                <Text style={styles.commentSender}>
                  {comment.sender.nick || comment.sender.username}:
                </Text>{' '}
                {comment.content}
              </Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

interface AdditionalStyle {
  imagesWrapper: ViewStyle;
  tweetContainer: ViewStyle;
  sender: TextStyle;
}

const styles: Partial<BasicStyle> & AdditionalStyle = StyleSheet.create<
  Partial<BasicStyle> & AdditionalStyle
>({
  container: {
    flex: 1,
    alignContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 8,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginLeft: 8,
  },
  avatar: {
    marginRight: 16,
    borderRadius: 10,
  },
  image: {
    marginRight: 16,
    borderRadius: 10,
    marginTop: 8,
  },
  imagesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 8,
  },
  tweetContainer: {
    flexShrink: 1,
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 1,
    color: '#a1a1a1',
    paddingRight: 16,
    textAlign: 'justify',
  },
  sender: {
    color: '#4152c9',
    fontWeight: '600',
  },
  commentsWrapper: {
    paddingTop: 8,
  },
  comment: {
    color: '#333',
    marginBottom: 4,
  },
  commentSender: {
    fontWeight: 'bold',
  },
  commentIcon: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
});
