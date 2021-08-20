import React from 'react';
import { shallow } from 'enzyme';
import Section from './index';
import { COLORS } from '../../../config/base';

describe('Section', () => {
  it('should display the provided text', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Section>{testContent}</Section>);
    expect(wrapper.text()).toEqual(testContent);
  });
  it('should default to elevation 4 when none is provided', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Section>{testContent}</Section>);
    const card = wrapper.debug();
    expect(card).not.toBeFalsy();
    expect(card.indexOf('--elevation-4')).not.toBe(-1);
  });
});
