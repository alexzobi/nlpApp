import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";

import TextBox from '../../components/TextBox';
import UserInput from '../../components/UserInput';

import styles from './styles';

class Conversation extends Component {
  constructor(props){
    super(props)

    this.state = {
      messages: [],
    }
  }

  addMessage = message => {    
    this.setState( state => {
      const { messages } = state;

      messages.push({
        text: message,
        isUser: true,
      })

      return { messages };
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={styles.messages}
        >
        {
          this.state.messages.map(( message, idx ) => (
            <TextBox
              text={message.text}
              isUser={message.isUser}
              key={`Message__${idx}`}
            />
          ))
        }
        </ScrollView>
        <UserInput
          value={this.state.userText}
          onSubmit={this.addMessage}
        />
      </View>
    );
  };
};

export default Conversation;

Conversation.propTypes = {
  
};

Conversation.defaultProps = {

};