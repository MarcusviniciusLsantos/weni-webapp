import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ProjectSelect from '@/components/external/ProjectSelect.vue';

import { createStore } from 'vuex';

import { org, project } from '../../../__mocks__';

describe('ProjectSelect.vue', () => {
  let wrapper;
  let getters;
  let state;
  let store;

  beforeEach(() => {
    state = {
      Project: {
        projects: [],
      },
    };
    getters = {
      currentProject() {
        return project;
      },
      org() {
        return org;
      },
    };
    store = createStore({ state, getters });
    wrapper = shallowMount(ProjectSelect, {
      global: {
        plugins: [store],
        stubs: {
          UnnnicAutoComplete: true,
          projectSelect: true,
          UnnnicToolTip: true,
          UnnnicIconSvg: true,
          RouterLink: RouterLinkStub,
          UnnnicLanguageSelect: true,
          UnnnicDropdown: true,
          avatar: true,
          UnnnicSelect: true,
          UnnnicFormElement: true,
          UnnnicInput: true,
        },
      },
      props: {
        org,
      },
    });
  });

  it('renders a snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
