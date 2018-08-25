import React from 'react';
import { mount } from 'enzyme';
import BaseButton from './button';

const clickSimulated = () => {};

describe('<BaseButton />', () => {
  it('should be have same name ', () => {
    const wrapper = mount(<BaseButton name="named test" click={clickSimulated} />);
    expect(wrapper.props().name).toEqual('named test');
  })
})