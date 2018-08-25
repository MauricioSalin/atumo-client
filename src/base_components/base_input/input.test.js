import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import BaseInput from './input';

const textChange = () => {};

const testForm = (
  <div>
    <BaseInput type="text" onTextChange={textChange} placeholder="test" />
  </div>
);

describe('<BaseInput />', () => {
  it('should be have same type', () => {
    const wrapper = mount(<BaseInput type="text" onTextChange={textChange} placeholder="test"/>);
    expect(wrapper.props().type).toEqual('text');
  }),

  it('should be have same placeholder', () => {
    const wrapper = mount(<BaseInput type="text" onTextChange={textChange} placeholder="test"/>);
    expect(wrapper.props().placeholder).toEqual('test');
  })
});