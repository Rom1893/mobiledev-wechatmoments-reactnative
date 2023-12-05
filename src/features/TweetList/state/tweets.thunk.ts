import {createAsyncThunk} from '@reduxjs/toolkit';

import {AxiosError} from 'axios';
import {getRequest} from '../../../network/Network';
import {ITweet} from '../../../types';

export const fetchUserTweets = createAsyncThunk(
  'userTweets',
  async (username: string, thunkAPI) => {
    try {
      const response = await getRequest('tweets.json');
      //const response = await getRequest(`user/${username}/tweets`);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`),
        );
      }
      /**
       * *Logic to filter out tweets without any content
       */
      const validTweets = response.data.filter(
        (tweet: ITweet) =>
          tweet.content ||
          (tweet.images && tweet.images.length > 0) ||
          (tweet.comments && tweet.comments.length > 0),
      );
      return validTweets as Array<ITweet>;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
