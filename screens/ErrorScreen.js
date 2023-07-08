import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color, Border, FontSize} from '../GlobalStyles';

const ErrorScreen = () => {
  return (
    <LinearGradient colors={['#FDFFF4', '#BBC1AD']} style={styles.container}>
      <View style={styles.error1}>
        <Text style={[styles.preformly, styles.errorPosition]}>PREFORMLY</Text>
        <Text style={[styles.error, styles.errorPosition]}>404 ERROR</Text>
        <Image
          style={styles.error1Child}
          resizeMode="cover"
          source={require('../assets/group-1000004371.png')}
        />

        <View style={[styles.error1Item, styles.capacityBg]} />
        <View style={styles.fluentadd12Filled} />
        <Text style={styles.thePageYou}>
          The page you were looking for does’t exist
        </Text>

        <TouchableOpacity onPress={() => console.log('Try again ')}>
          <Text style={[styles.tryAgain, styles.oopsTypo]}>Try Again</Text>
        </TouchableOpacity>

        <Text style={[styles.oops, styles.oopsTypo]}>Oops!</Text>
        <View style={[styles.error1Inner, styles.groupViewLayout]}>
          <View style={styles.backgroundParent}>
            <View style={[styles.background, styles.backgroundPosition]} />

            <TouchableOpacity onPress={() => console.log('Button pressed')}>
              <Text style={[styles.contactUs, styles.contactUsPosition]}>
                Contact us
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.backgroundParent}>
            <View style={[styles.background1, styles.backgroundPosition]} />

            <TouchableOpacity onPress={() => console.log('Report a problem ')}>
              <Text style={[styles.reportAProblem, styles.contactUsPosition]}>
                Report a problem
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={[styles.errorWithPeopleHoldingThe, styles.errorPosition]}
          resizeMode="cover"
          source={require('../assets/error404.png')}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error1: {
    borderRadius: 30,
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  preformly: {
    marginLeft: -81,
    top: 45,
    fontSize: 30,
    lineHeight: 33.36,
    color: '#1B1561',
    textAlign: 'center',
  },

  errorPosition: {
    left: '50%',
    position: 'absolute',
  },

  error: {
    marginLeft: -57,
    top: 92,
    fontSize: 18,
    letterSpacing: 2.8,
    lineHeight: 20,
    fontWeight: '500',

    textAlign: 'center',
    color: Color.black,
  },

  capacityBg: {
    backgroundColor: Color.black,
    position: 'absolute',
  },

  oopsTypo: {
    fontWeight: '700',
    color: Color.midnightblue,
    textAlign: 'center',
    position: 'absolute',
  },
  groupViewLayout: {
    height: 55,
    width: 259,
    left: '50%',
    position: 'absolute',
    bottom: 200, // Adjust this value as needed to push the buttons upward
  },

  backgroundPosition: {
    borderRadius: Border.br_xl,
    marginLeft: -129.5,
    height: 55,
    width: 259,
    left: '50%',
    top: 0,
    position: 'absolute',
  },

  contactUsPosition: {
    letterSpacing: 3.1,
    top: 17,
    fontSize: FontSize.size_xl,

    lineHeight: 22,
    left: '50%',
    textAlign: 'center',
    position: 'absolute',
  },
  text: {
    letterSpacing: 0,
  },

  error1Child: {
    top: 80,
    left: 14,
    width: 48,
    height: 48,
    position: 'absolute',
  },
  error1Item: {
    top: 818,
    left: 133,
    borderRadius: 17,
    width: 124,
    height: 6,
  },
  fluentadd12Filled: {
    top: 781,
    left: 61,
    width: 12,
    height: 12,
    position: 'absolute',
    overflow: 'hidden',
  },
  thePageYou: {
    marginLeft: -113,
    top: 437,
    fontSize: 17,
    width: 225,
    height: 20,

    lineHeight: 22,
    left: '50%',
    textAlign: 'center',
    color: Color.black,
    position: 'absolute',
  },
  tryAgain: {
    top: 507,
    left: 72,
    lineHeight: 25,
    width: 252,
    fontSize: FontSize.size_xl,
    fontWeight: '700',
    height: 20,
  },

  oops: {
    top: 389,
    left: 156,
    fontSize: 25,
    letterSpacing: 3.9,
    lineHeight: 28,
  },
  background: {
    backgroundColor: Color.midnightblue,
  },
  contactUs: {
    marginLeft: -58.5,
    color: '#fff',
  },
  backgroundParent: {
    marginLeft: -129.5,
    height: 55,
    width: 259,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  error1Inner: {
    marginLeft: -134,
    top: 655,
  },
  background1: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: '#1b1561',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  reportAProblem: {
    marginLeft: -96.5,
    color: Color.midnightblue,
  },
  groupView: {
    marginLeft: -131,
    top: 718,
  },
  errorWithPeopleHoldingThe: {
    marginLeft: -150,
    top: 90,
    width: 299,
    height: 299,
    overflow: 'hidden',
  },
});

export default ErrorScreen;
