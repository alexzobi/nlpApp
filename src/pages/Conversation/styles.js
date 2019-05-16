import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  messagesContainer: {
    height: Dimensions.get('screen').height - 24,
    width: '100%',
  },
  messages: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});