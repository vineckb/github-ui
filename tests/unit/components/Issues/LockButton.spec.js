import { shallowMount } from '@vue/test-utils';
import LockButton from '@/components/Issues/LockButton';
import store from '../../store/.mock';
import { actions } from '../../store/.mock/issues';

describe('Lock button', () => {
  let wrapper = null;
  let options = {
    store,
    stubs: ['vue-material-icon'],
    propsData: {
      repository: 'test',
      issue: {
        locked: false,
        number: 1
      }
    }
  };

  beforeEach(() => {
    wrapper = shallowMount(LockButton, options);
  });

  it('click call unlock when is locked', () => {
    const { number } = options.propsData.issue;
    const { repository } = options.propsData;

    options.propsData.issue.locked = true;
    wrapper = shallowMount(LockButton, options);

    wrapper.trigger('click');

    expect(actions.unlock).toHaveBeenCalled();
  });
})
