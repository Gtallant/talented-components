import React from 'react';
import { shallow } from 'enzyme';
import Picture from './index';
import { getDefaultUrl, sortSourcesByBreakpoint } from './Picture.utils';
import TEST_DATA from './Picture.constants';

describe('Picture Utils : getDefaultUrl', () => {
  it('should recognize a single source', () => {
    expect(getDefaultUrl(TEST_DATA.src)).toBe(TEST_DATA.src);
  });
  it('should return the last url from an array of sources', () => {
    const arr = TEST_DATA.srcArray;
    const expectedResult = arr[arr.length - 1].src;
    expect(getDefaultUrl(arr)).toBe(expectedResult);
  });
});

describe('Picture Utils: sortSourcesByBreakpoint', () => {
  it('should correctly sort the sources', () => {
    expect(getDefaultUrl(TEST_DATA.src)).toBe(TEST_DATA.src);
  });
});

describe('Picture', () => {
  it('should render the image with the src and alt text', () => {
    const wrapper = shallow(<Picture src={TEST_DATA.src} alt={TEST_DATA.altText} />);
    const imgTag = wrapper.find('img');
    expect(imgTag).not.toBeFalsy();
    expect(imgTag.prop('src')).toEqual(TEST_DATA.src);
    expect(imgTag.prop('alt')).toEqual(TEST_DATA.altText);
  });
  it('should render the image with the src and alt text', () => {
    const wrapper = shallow(<Picture src={TEST_DATA.srcArray} alt={TEST_DATA.altText} />);
    const imgTag = wrapper.find('img');
    const sourceTags = wrapper.find('source');
    expect(imgTag).not.toBeFalsy();
    expect(imgTag.prop('src')).toEqual(TEST_DATA.srcArray[3].src);
    expect(imgTag.prop('alt')).toEqual(TEST_DATA.altText);
    expect(sourceTags).toHaveLength(TEST_DATA.srcArray.length - 1);
    const sortedSources = sortSourcesByBreakpoint(TEST_DATA.srcArray);
    sortedSources.slice(0, TEST_DATA.srcArray.length - 2).forEach((data, index) => {
      const item = sourceTags.get(index);
      expect(item).not.toBeFalsy();
      expect(item.props.media).toBe(`(min-width:${data.breakpoint}px)`);
    });
  });
});
