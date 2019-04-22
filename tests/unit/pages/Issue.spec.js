import { shallowMount } from '@vue/test-utils';
import IssuePage from '@/pages/Issue';
import store from '../store/.mock';
import LockButton from '@/components/Issues/LockButton';

describe('Issue Page', () => {
  let wrapper = null;
  const $route = {
    params: {
      repository: 'repo-name',
      number: '1'
    }
  };

  beforeEach(() => {
    wrapper = shallowMount(IssuePage, {
      store,
      mocks: { $route },
      stubs: {
        'vue-material-icon': true,
        'vue-simple-markdown': '<div class="stubed-simple-markdown" />'
      }
    });
  });


  it('has title', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('has lock/unlock button', () => {
    expect(wrapper.find(LockButton).exists()).toBe(true);
  });

  it('has content block', () => {
    expect(wrapper.find('.stubed-simple-markdown').exists()).toBe(true);
  });
});
