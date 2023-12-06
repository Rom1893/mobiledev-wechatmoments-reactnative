import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../../store';
import {TweetList} from './TweetList';

describe('TweetList', () => {
  it('renders correctly', () => {
    const TweetListComponent = render(
      <Provider store={store}>
        <TweetList />
      </Provider>,
    );
    const containerElement = TweetListComponent.root.findByProps({
      testID: 'tweet-container',
    });
    expect(containerElement).toBeTruthy();
  });
});
