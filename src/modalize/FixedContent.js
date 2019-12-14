import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import faker from 'faker';
import styles from './FixedContent.style';
import Modalize from 'react-native-modalize';

export class FixedContent extends React.PureComponent {
  modal = React.createRef();

  renderContent = () => {
    return (
      <View style={styles.content}>
        <Text style={styles.content__subheading}>
          {'Last step'.toUpperCase()}
        </Text>
        <Text style={styles.content__heading}>Send the message?</Text>
        <Text style={styles.content__description}>
          {faker.lorem.paragraph()}
        </Text>
        <TextInput
          style={styles.content__input}
          placeholder="Type your username"
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.closeModal}
          style={styles.content__button}>
          <Text style={styles.content__buttonText}>{'Send'.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  onClosed = () => {
    const {onClosed} = this.props;

    if (onClosed) {
      onClosed();
    }
  };

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  render() {
    return (
      <Modalize ref={this.modal} onClosed={this.onClosed} adjustToContentHeight>
        {this.renderContent()}
      </Modalize>
    );
  }
}
