import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card', () => {
  it('should display the provided text', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Card>{testContent}</Card>);
    expect(wrapper.text()).toEqual(testContent);
  });
  it('should default to elevation 4 when none is provided', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Card>{testContent}</Card>);
    const card = wrapper.debug();
    expect(card).not.toBeFalsy();
    expect(card.indexOf('--elevation-4')).not.toBe(-1);
  });
  it('should add the correct elevation class when one is provided', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Card elevation={6}>{testContent}</Card>);
    const card = wrapper.debug();
    expect(card).not.toBeFalsy();
    expect(card.indexOf('--elevation-6')).not.toBe(-1);
  });
});
