const placeholderBaseUrl = 'https://via.placeholder.com/';

export default {
  altText: 'Lorem ipsum',
  src: `${placeholderBaseUrl}150`,
  srcArray: [
    { src: `${placeholderBaseUrl}300`, breakpoint: 1025 },
    { src: `${placeholderBaseUrl}250`, breakpoint: 769 },
    { src: `${placeholderBaseUrl}200`, breakpoint: 481 },
    { src: `${placeholderBaseUrl}150` },
  ],
  srcArraySorted: [
    { src: `${placeholderBaseUrl}200`, breakpoint: 481 },
    { src: `${placeholderBaseUrl}250`, breakpoint: 769 },
    { src: `${placeholderBaseUrl}300`, breakpoint: 1025 },
  ],
};
