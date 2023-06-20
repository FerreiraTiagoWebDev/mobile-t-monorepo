/**
 * @format
 */

import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import App from '@mobileTapp/App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
