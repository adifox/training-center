import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './';

describe('<Header />', () => {
  it('should be a <header> tag', () => {
    const wrapper = shallow(
      <Header/>
    );
    expect(wrapper.type()).to.equal('header');
  });
});