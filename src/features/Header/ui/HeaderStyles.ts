import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface BasicStyle {
  container: ViewStyle;
  text: TextStyle;
  image: ImageStyle;
}

interface AdditionalStyles {
  backgroundImage: ImageStyle;
  userWrapper: ViewStyle;
}

const styles: Partial<BasicStyle> & AdditionalStyles = StyleSheet.create<
  Partial<BasicStyle> & AdditionalStyles
>({
  container: {
    height: 232,
    backgroundColor: 'white',
  },
  image: {
    marginBottom: -24,
    marginRight: 80,
    backgroundColor: '#e4f0f5',
    borderRadius: 8,
    borderWidth: 3, // Width of the border
    borderColor: '#e8cee7', // Color of the border
    borderStyle: 'solid',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24, //* New Style
    marginRight: 16,
    color: '#f5f5f5', //* New Style
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
