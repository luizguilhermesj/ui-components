import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { default as Grid } from './index.js'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Grid', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Grid/>);

    expect(wrapper.html()).toEqual('<div></div>');
    wrapper.unmount();
  });

  it('should render correctly with children', () => {
    const wrapper = mount(<Grid>test</Grid>);

    expect(wrapper.html()).toEqual('<div>test</div>');
    wrapper.unmount();
  });
});