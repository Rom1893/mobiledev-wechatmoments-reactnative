import React, {ReactElement} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {connect} from 'react-redux';
import {IUser, RootState} from './../../../types';
import styles from './HeaderStyles';

interface IHeaderProps {
  user: IUser;
}

export function HeaderComponent({user}: IHeaderProps): ReactElement {
  return (
    <View style={styles.container} testID="header-container">
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: user['profile-image'],
        }}>
        <View style={styles.userWrapper}>
          <Text testID="header-username" style={styles.text}>
            {user.nick}
          </Text>
          <Image
            style={styles.image}
            source={{
              width: 64,
              height: 64,
              uri: user.avatar,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = (state: RootState) =>
  ({
    user: state.user.data,
  } as IHeaderProps);

export const Header = connect(mapStateToProps)(HeaderComponent);
