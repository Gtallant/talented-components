import React from 'react';
import { shallow } from 'enzyme';
import Link from './index';

describe('Link', () => {
  it('should display the provided text', () => {
    const testContent = 'Lorem ipsum';
    const wrapper = shallow(<Link href="/#">{testContent}</Link>);
    expect(wrapper.text()).toEqual(testContent);
  });
  it('should link to the provided URL', () => {
    const testContent = {
      text: 'Lorem ipsum',
      href: '/#',
    };
    const wrapper = shallow(<Link href={testContent.href}>{testContent.text}</Link>);
    expect(wrapper.find('.link').at(0).props().href).toEqual(testContent.href);
  });
  it('should add an accessibility element if and only if accessibility text is provided', () => {
    const testContent = {
      text: 'Lorem ipsum',
      href: '/#',
      accessibilityText: 'dolor sit amet',
    };
    const withoutAccessibilityText = shallow(
      <Link href={testContent.href}>{testContent.text}</Link>,
    );
    const withAccessibilityText = shallow(
      <Link href={testContent.href} accessibilityText={testContent.accessibilityText}>
        {testContent.text}
      </Link>,
    );
    expect(withoutAccessibilityText.find('.link__accessibility-text')).toHaveLength(0);
    expect(withAccessibilityText.find('.link__accessibility-text')).toHaveLength(1);
  });
});
