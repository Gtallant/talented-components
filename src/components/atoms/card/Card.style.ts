import styled from 'styled-components';

export default styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  transition: all 2s;

  &.--elevation-0 {
    -webkit-box-shadow: none; 
    box-shadow: none;
  }
  &.--elevation-1 {
    box-shadow:
      0 1px 1.1px rgba(0, 0, 0, 0.01),
      0 2.4px 2.7px rgba(0, 0, 0, 0.007),
      0 4.5px 5px rgba(0, 0, 0, 0.006),
      0 8px 8.9px rgba(0, 0, 0, 0.005),
      0 15px 16.7px rgba(0, 0, 0, 0.004),
      0 36px 40px rgba(0, 0, 0, 0.003)
    ;
  }
  &.--elevation-2 {
    box-shadow:
      0 1px 1.1px rgba(0, 0, 0, 0.02),
      0 2.4px 2.7px rgba(0, 0, 0, 0.014),
      0 4.5px 5px rgba(0, 0, 0, 0.012),
      0 8px 8.9px rgba(0, 0, 0, 0.01),
      0 15px 16.7px rgba(0, 0, 0, 0.008),
      0 36px 40px rgba(0, 0, 0, 0.006)
    ;
  }
  &.--elevation-3 {
    box-shadow:
      0 1px 1.1px rgba(0, 0, 0, 0.03),
      0 2.4px 2.7px rgba(0, 0, 0, 0.022),
      0 4.5px 5px rgba(0, 0, 0, 0.018),
      0 8px 8.9px rgba(0, 0, 0, 0.015),
      0 15px 16.7px rgba(0, 0, 0, 0.012),
      0 36px 40px rgba(0, 0, 0, 0.008)
    ;
  }
  &.--elevation-4 {
    box-shadow:
      0 1.1px 1.1px rgba(0, 0, 0, 0.04),
      0 2.7px 2.7px rgba(0, 0, 0, 0.029),
      0 5px 5px rgba(0, 0, 0, 0.024),
      0 8.9px 8.9px rgba(0, 0, 0, 0.02),
      0 16.7px 16.7px rgba(0, 0, 0, 0.016),
      0 40px 40px rgba(0, 0, 0, 0.011)
    ;
  }
  &.--elevation-6 {
    box-shadow:
      0 1.1px 1.1px rgba(0, 0, 0, 0.06),
      0 2.7px 2.7px rgba(0, 0, 0, 0.043),
      0 5px 5px rgba(0, 0, 0, 0.036),
      0 8.9px 8.9px rgba(0, 0, 0, 0.03),
      0 16.7px 16.7px rgba(0, 0, 0, 0.024),
      0 40px 40px rgba(0, 0, 0, 0.017)
    ;
  }
  &.--elevation-8 {
    box-shadow:
      0 1.1px 1.1px rgba(0, 0, 0, 0.08),
      0 2.7px 2.7px rgba(0, 0, 0, 0.058),
      0 5px 5px rgba(0, 0, 0, 0.048),
      0 8.9px 8.9px rgba(0, 0, 0, 0.04),
      0 16.7px 16.7px rgba(0, 0, 0, 0.032),
      0 40px 40px rgba(0, 0, 0, 0.022)
    ;
  }
  &.--elevation-9 {
    box-shadow:
      0 1.1px 1.1px rgba(0, 0, 0, 0.09),
      0 2.7px 2.7px rgba(0, 0, 0, 0.065),
      0 5px 5px rgba(0, 0, 0, 0.054),
      0 8.9px 8.9px rgba(0, 0, 0, 0.045),
      0 16.7px 16.7px rgba(0, 0, 0, 0.036),
      0 40px 40px rgba(0, 0, 0, 0.025)
    ;
  }
  &.--elevation-12 {
    box-shadow:
      0 1.1px 1.1px rgba(0, 0, 0, 0.12),
      0 2.7px 2.7px rgba(0, 0, 0, 0.086),
      0 5px 5px rgba(0, 0, 0, 0.072),
      0 8.9px 8.9px rgba(0, 0, 0, 0.06),
      0 16.7px 16.7px rgba(0, 0, 0, 0.048),
      0 40px 40px rgba(0, 0, 0, 0.034)
    ;
  }
  &.--elevation-16 {
    box-shadow:
      0 1.1px 1.1px rgba(0, 0, 0, 0.16),
      0 2.7px 2.7px rgba(0, 0, 0, 0.115),
      0 5px 5px rgba(0, 0, 0, 0.095),
      0 8.9px 8.9px rgba(0, 0, 0, 0.08),
      0 16.7px 16.7px rgba(0, 0, 0, 0.065),
      0 40px 40px rgba(0, 0, 0, 0.045)
    ;
  }
  &.--elevation-24 {
    box-shadow:
      0 1.1px 1.4px rgba(0, 0, 0, 0.2),
      0 2.7px 3.3px rgba(0, 0, 0, 0.144),
      0 5px 6.3px rgba(0, 0, 0, 0.119),
      0 8.9px 11.2px rgba(0, 0, 0, 0.1),
      0 16.7px 20.9px rgba(0, 0, 0, 0.081),
      0 40px 50px rgba(0, 0, 0, 0.056)
    ;
  }
`;
