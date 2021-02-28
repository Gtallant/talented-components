import React from 'react';
import { shallow } from 'enzyme';
import Text from './index';

describe('Text', () => {
  it('should display the provided text', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Text>{testContent}</Text>);
    expect(wrapper.text()).toEqual(testContent);
  });
});
