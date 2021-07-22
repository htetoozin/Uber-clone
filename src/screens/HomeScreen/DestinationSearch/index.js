import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  useEffect(() => {
    console.warn('use Effect');
    if (originPlace && destinationPlace) {
      console.warn('called');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            // console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDcEtdXnTcROfb2gobArGzP-Br4uXkinEM',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDcEtdXnTcROfb2gobArGzP-Br4uXkinEM',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
