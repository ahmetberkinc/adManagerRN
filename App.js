import React from 'react';
import {View} from 'react-native';
import {Banner} from 'react-native-ad-manager';

const App = () => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
      <Banner
        onAdLoaded={this.onAdLoaded}
        adSize="banner"
        validAdSizes={['banner']}
        adUnitID={'/6499/example/banner'}
        targeting={{
          customTargeting: {group: 'test'},
          categoryExclusions: ['test'],
          contentURL: 'test',
          publisherProvidedID: 'test',
        }}
      />
    </View>
  );
};

export default App;
