import React from 'react';
import renderer from 'react-test-renderer';

import {IUser} from '../../../types';
import {HeaderComponent} from './Header';

describe.skip('Header', () => {
  const user: IUser = {
    nick: 'john smith',
    username: 'john',
    avatar: 'avatar.url',
    profileImage: 'profile-image.url',
  };

  it('should render component', () => {
    const component = renderer.create(<HeaderComponent user={user} />);
    const containerElement = component.root.findByProps({
      testID: 'header-container',
    });
    expect(containerElement).toBeTruthy();
  });

  it('should render the correct name', () => {
    const component = renderer.create(<HeaderComponent user={user} />);
    const containerElement = component.root.findByProps({
      testID: 'header-username',
    });
    expect(containerElement).toBeTruthy();
  });
});
