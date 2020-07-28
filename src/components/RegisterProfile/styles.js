import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  imageView: {
    width: '20%',
    height: 75,
    // top: 0,
    // position: 'absolute',
  },
  innerContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileComponentNo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a0a0a0',
    textAlign: 'center',
  },
  termsAndConditions: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#a0a0a0',
    textAlign: 'center',
  },
});

export default styles;
