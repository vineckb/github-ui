import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button', () => {
  it('rendering text prop correctly', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        text: 'Button text'
      }
    });

    expect(wrapper.text()).toMatch('Button text');
  });
});
