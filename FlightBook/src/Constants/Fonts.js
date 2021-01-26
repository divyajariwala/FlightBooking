import {StyleSheet, Platform} from 'react-native';
import colors from './colors';
import FontFamily from '../Constants/FontFamily';
import {totalSize} from 'react-native-dimension';

export const styles = StyleSheet.create({
  H1: {
    fontSize: normalize(21),
    color: colors.titleColor,
    fontFamily: fonts.roboto.bold,
  },
  H2: {
    fontSize: normalize(17),
    color: colors.titleColor,
    fontFamily: fonts.roboto.bold,
    letterSpacing: normalize(-0.32, false),
  },
  H3: {
    fontSize: normalize(20),
    color: colors.titleColor,
    fontFamily: fonts.roboto.bold,
  },
  H4: {
    fontSize: normalize(18),
    color: colors.titleColor,
    fontFamily: fonts.roboto.bold,
  },
  H5: {
    fontSize: normalize(16),
    color: colors.titleColor,
    fontFamily: fonts.roboto.bold,
  },
  H6: {
    fontSize: normalize(14),
    color: colors.titleColor,
    fontFamily: fonts.roboto.bold,
  },
  P: {
    fontSize: 14,
    color: colors.lightGrey,
    fontFamily: fonts.roboto.regular,
  },
  lS22: {
    letterSpacing: normalize(-0.22, false),
  },
  lS29: {
    letterSpacing: normalize(-0.29, false),
  },
  lS32: {
    letterSpacing: normalize(-0.32, false),
  },
  lS4: {
    letterSpacing: normalize(-0.4, false),
  },
  fs10: {
    fontSize: normalize(10),
  },
  fs11: {
    fontSize: normalize(11),
  },
  fs12: {
    fontSize: FORTAB ? normalize(10) : normalize(12),
  },
  fs13: {
    fontSize: normalize(13),
  },
  fs14: {
    fontSize: FORTAB ? normalize(12) : normalize(14),
  },
  fs15: {
    fontSize: normalize(15),
  },
  fs16: {
    fontSize: normalize(16),
  },
  fs17: {
    fontSize: normalize(17),
  },
  fs18: {
    fontSize: normalize(18),
  },
  fs20: {
    fontSize: normalize(20),
  },
  lh18: {
    lineHeight: normalize(18),
  },
  lh25: {
    lineHeight: normalize(25),
  },
  subTxt: {
    fontSize: 12,
    color: colors.parColor,
    fontFamily: fonts.roboto.regular,
  },
  semiBold: {
    fontFamily: IOS ? fonts.roboto.bold : fonts.roboto.semiBold,
  },
  fontLight: {
    fontFamily: fonts.roboto.light,
  },
  bold: {
    fontFamily: fonts.roboto.bold,
  },
  exBold: {
    fontFamily: fonts.roboto.exbold,
  },
  brandBackground: {
    backgroundColor: colors.blue,
  },
  primary: {
    color: colors.primary,
  },
  white: {
    color: colors.white,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MT10: {
    marginTop: 10,
  },
  P10: {
    padding: 10,
  },
  PH10: {
    paddingHorizontal: 10,
  },
  txtCenter: {
    textAlign: 'center',
  },
  headertitleView: {
    color: colors.black,
    fontFamily: FontFamily.Bold,
    fontSize:totalSize(3)
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  MT0: {
    marginTop: 0,
  },
  H4SemiBold: {
    fontSize: 18,
    color: colors.titleColor,
    fontFamily:
      Platform.OS === 'ios' ? fonts.roboto.bold : fonts.roboto.semiBold,
  },
  H6SemiBold: {
    fontSize: 14,
    color: colors.titleColor,
    fontFamily:
      Platform.OS === 'ios' ? fonts.roboto.bold : fonts.roboto.semiBold,
  },
  rightIconButtonStyle: {
    fontSize: normalize(13),
    paddingRight: normalize(10),
    letterSpacing: normalize(1.5, false),
    fontWeight: '700',
    fontFamily: fonts.roboto.bold,
  },
  leftIconButtonStyle: {
    fontSize: normalize(13),
    paddingLeft: normalize(10),
    letterSpacing: normalize(1.5, false),
    fontWeight: '700',
    fontFamily: fonts.roboto.bold,
  },
  headerStyle: {
    color: colors.lightGrey,
    marginBottom: normalize(15),
  },
  rightIconStyle: {
    width: normalize(18),
    resizeMode: Platform.OS === 'ios' ? 'contain' : 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    color: '#000000',
    fontFamily: fonts.roboto.bold,
    fontSize: FORTAB ? normalize(13) : normalize(IOS ? 17 : 14),
  },
  shadowStyle: {
    shadowColor: 'rgba(66, 133, 244, 0.2)',
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Platform.OS === 'ios' ? '#0000' : '#ffffff',
  },
  shadowStyleCPlanLIst: {
    shadowColor: 'rgba(66, 133, 244, 0.2)',
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 6,
    shadowOpacity: 1,
    borderRadius: 5,
    borderColor: '#bac3d204',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomWidth: 0,
    elevation: 10,
    backgroundColor: Platform.OS === 'ios' ? '#0000' : '#ffffff',
    marginBottom: normalize(15),
  },
  TopBarRightText: {
    color: colors.primary,
    fontFamily: fonts.roboto.bold,
    fontSize: normalize(15),
  },
  OppsStyle: {
    fontSize: normalize(25),
    fontFamily: fonts.roboto.regular,
    fontWeight: '700',
    paddingBottom: normalize(10),
  },
  NodataStyle: {
    fontSize: normalize(20),
    fontFamily: fonts.roboto.regular,
    fontWeight: '500',
  },
});

export Fonts