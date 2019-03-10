import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Jumbotron } from 'reactstrap';
import VideoPlayer from './';

const video = {
  id: '1234'
}

describe('<VideoPlayer />', () => {
  it('should have a Jumbotron as a wrapper', () => {
    const wrapper = shallow(
      <VideoPlayer/>
    );
    expect(wrapper.type()).to.equal(Jumbotron);
  });

  it('should return a <h3> tag as the first child if no video prop pased', () => {
    const wrapper = shallow(
      <VideoPlayer/>
    );
    expect(wrapper.children().at(0).type()).to.equal('h3');
  });

  it('should have an iframe as first child', () => {
    const wrapper = shallow(
      <VideoPlayer
        video={ video }
      />
    );
    expect(wrapper.children().at(0).type()).to.equal('iframe');
  });
});