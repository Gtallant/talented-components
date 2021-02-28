import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';

describe('Title', () => {
  it('should display the provided title', () => {
    const testTitle = 'Lorem ipsum';
    const wrapper = shallow(<Title text={testTitle} level="HEADING_1" />);
    expect(wrapper.text()).toEqual(testTitle);
  });
  it('should render the correct style', () => {
    const testTitle = 'Lorem ipsum';
    const wrapper1 = shallow(<Title text={testTitle} level="HEADING_1" />);
    expect(wrapper1.find('.HEADING_1')).toHaveLength(1);
    const wrapper2 = shallow(<Title text={testTitle} level="HEADING_2" />);
    expect(wrapper2.find('.HEADING_2')).toHaveLength(1);
    const wrapper3 = shallow(<Title text={testTitle} level="HEADING_3" />);
    expect(wrapper3.find('.HEADING_3')).toHaveLength(1);
    const wrapper4 = shallow(<Title text={testTitle} level="HEADING_4" />);
    expect(wrapper4.find('.HEADING_4')).toHaveLength(1);
    const wrapper5 = shallow(<Title text={testTitle} level="HEADING_5" />);
    expect(wrapper5.find('.HEADING_5')).toHaveLength(1);
    const wrapper6 = shallow(<Title text={testTitle} level="HEADING_6" />);
    expect(wrapper6.find('.HEADING_6')).toHaveLength(1);
  });
  it('should render the correct h tag when none is specified', () => {
    const testTitle = 'Lorem ipsum';
    const wrapper1 = shallow(<Title text={testTitle} level="HEADING_1" />);
    expect(wrapper1.html()).toContain('h1');
    const wrapper2 = shallow(<Title text={testTitle} level="HEADING_2" />);
    expect(wrapper2.html()).toContain('h2');
    const wrapper3 = shallow(<Title text={testTitle} level="HEADING_3" />);
    expect(wrapper3.html()).toContain('h3');
    const wrapper4 = shallow(<Title text={testTitle} level="HEADING_4" />);
    expect(wrapper4.html()).toContain('h4');
    const wrapper5 = shallow(<Title text={testTitle} level="HEADING_5" />);
    expect(wrapper5.html()).toContain('h5');
    const wrapper6 = shallow(<Title text={testTitle} level="HEADING_6" />);
    expect(wrapper6.html()).toContain('h6');
  });

  it('should render the correct style and h tag when both are specified', () => {
    const testTitle = 'Lorem ipsum';
    const wrapper1 = shallow(<Title text={testTitle} level="HEADING_1" markupLevel="HEADING_2" />);
    expect(wrapper1.find('.HEADING_1')).toHaveLength(1);
    expect(wrapper1.html()).toContain('h2');
    const wrapper2 = shallow(<Title text={testTitle} level="HEADING_2" markupLevel="HEADING_1" />);
    expect(wrapper2.find('.HEADING_2')).toHaveLength(1);
    expect(wrapper2.html()).toContain('h1');
    const wrapper3 = shallow(<Title text={testTitle} level="HEADING_3" markupLevel="HEADING_1" />);
    expect(wrapper3.find('.HEADING_3')).toHaveLength(1);
    expect(wrapper3.html()).toContain('h1');
    const wrapper4 = shallow(<Title text={testTitle} level="HEADING_4" markupLevel="HEADING_1" />);
    expect(wrapper4.find('.HEADING_4')).toHaveLength(1);
    expect(wrapper4.html()).toContain('h1');
    const wrapper5 = shallow(<Title text={testTitle} level="HEADING_5" markupLevel="HEADING_1" />);
    expect(wrapper5.find('.HEADING_5')).toHaveLength(1);
    expect(wrapper5.html()).toContain('h1');
    const wrapper6 = shallow(<Title text={testTitle} level="HEADING_6" markupLevel="HEADING_1" />);
    expect(wrapper6.find('.HEADING_6')).toHaveLength(1);
    expect(wrapper6.html()).toContain('h1');
  });
});
