import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import ProjectSelect from '@/components/external/ProjectSelect.vue';
import i18n from '@/utils/plugins/i18n';

import Vuex from 'vuex';

import { org, project } from '../../../__mocks__';

const localVue = createLocalVue();
localVue.use(Vuex);

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
    store = new Vuex.Store({ state, getters });
    wrapper = shallowMount(ProjectSelect, {
      localVue,
      i18n,
      propsData: {
        org,
      },
      store,
      mocks: {
        $t: () => 'some specific text',
      },
      stubs: {
        unnnicAutoComplete: true,
        projectSelect: true,
        unnnicToolTip: true,
        unnnicIconSvg: true,
        RouterLink: RouterLinkStub,
        unnnicLanguageSelect: true,
        unnnicDropdown: true,
        avatar: true,
        unnnicSelect: true,
      },
    });
  });

  it('renders a snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
