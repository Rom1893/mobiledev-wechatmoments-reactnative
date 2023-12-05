import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {store} from '../../../store';

import {IUser} from '../../../types';
import {HeaderComponent} from './Header';

describe('Header', () => {
  const user: IUser = {
    nick: 'john smith',
    username: 'john',
    avatar: 'avatar.url',
    'profile-image': 'profile-image.url',
  };

  it('should render component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <HeaderComponent user={user} />
      </Provider>,
    );
    const containerElement = component.root.findByProps({
      testID: 'header-container',
    });
    expect(containerElement).toBeTruthy();
  });

  it('should render the correct name', () => {
    const component = renderer.create(
      <Provider store={store}>
        <HeaderComponent user={user} />
      </Provider>,
    );
    const containerElement = component.root.findByProps({
      testID: 'header-username',
    });
    expect(containerElement).toBeTruthy();
  });
});
