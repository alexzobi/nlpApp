import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    maxWidth: '70%',
    borderRadius: 18,
    marginVertical: 12, 
  },
  text: {   
    fontSize: 18,
  },
  userTextContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#20BBFF',
  },
  otherTextContainer: {
    alignSelf: 'flex-start',
    left: 0,
    backgroundColor: '#DEDBD3',
  },
  userText: {
    color: '#fff'
  },
  otherText: {
    color: '#000',
  },
});

const TextBox = ({ text, isUser }) => (
  <View 
    style={[
      styles.container,
      isUser ? styles.userTextContainer : styles.otherTextContainer,
    ]}
  >
    <Text 
      style={[
        styles.text,
        isUser ? styles.userText : styles.otherText,
      ]}
    >
      {text}
    </Text>
  </View>
);

export default TextBox;

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  isUser: PropTypes.bool,
};

TextBox.defaultProps = {
  isUser: false,
};