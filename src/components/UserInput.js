import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#DEDBD3',
    borderTopWidth: 1,
  },
  textInput: {
    width: '75%',
    fontSize: 18,
    height: 24,
    borderRadius: 12,
  },
  enterButton: {
    height: 24,
    width: 24,
    backgroundColor: '#20BBFF',
    borderRadius: 12,
  }
});

class UserInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: '',
    }
  }

  handleTextChange = text => this.setState({ userInput: text })

  handleSubmit = () => {
    this.props.onSubmit(this.state.userInput)
    
    this.setState({ userInput: '' })
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.userInput}
          placeholder="enter message"
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity
          style={styles.enterButton}
          onPress={this.handleSubmit}
        />
      </View>
    );
  };
};

export default UserInput;

UserInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};