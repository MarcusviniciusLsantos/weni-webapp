import projects from '../../api/projects';

export default {
  getCurrentProject() {
    const object = window.localStorage.getItem('project');
    if (object) return JSON.parse(object);
    return null;
  },

  getProject(store, { uuid }) {
    return projects.getProject({ uuid });
  },

  getProjects(store, { orgId, page = 1, limit = 20, ordering }) {
    const offset = limit * (page - 1);
    return projects.list(orgId, offset, limit, ordering);
  },

  async loadProjects({ state }, { orgUuid, ordering }) {
    let projectsByOrg = state.projects.find(
      (projects) => projects.orgUuid === orgUuid,
    );

    if (!projectsByOrg) {
      projectsByOrg = {
        orgUuid,
        status: null,
        next: null,
        data: [],
      };

      state.projects.push(projectsByOrg);
    }

    if (['complete', 'loading'].includes(projectsByOrg.status)) {
      return;
    }

    projectsByOrg.status = 'loading';

    const { data } = await projects.v2List({
      params: projectsByOrg.next
        ? Object.fromEntries(new URL(projectsByOrg.next).searchParams)
        : {
            organization: orgUuid,
            offset: 0,
            limit: 12,
            ordering,
          },
    });

    projectsByOrg.status = null;
    projectsByOrg.next = data.next;

    if (projectsByOrg.next === null) {
      projectsByOrg.status = 'complete';
    }

    data.results.forEach((project) => {
      projectsByOrg.data.push(project);
    });

    const projectIndex = state.projects.findIndex(project => project.orgUuid === projectsByOrg.orgUuid)

    state.projects[projectIndex] = { ...projectsByOrg }

    return data;
  },

  async changeReadyMadeProjectProperties(
    { getters, commit },
    { projectUuid, first_access },
  ) {
    const { data } = await projects.changeReadyMadeProjectProperties({
      projectUuid,
      first_access,
    });

    commit('setCurrentProject', {
      ...getters.currentProject,
      first_access: data.first_access,
    });
  },

  editProject(
    store,
    { name, organization, projectUuid, timezone, description },
  ) {
    return projects.editProject(
      name,
      organization,
      projectUuid,
      timezone,
      description,
    );
  },

  deleteProject(store, { uuid }) {
    return projects.deleteProject(uuid);
  },

  setCurrentProject(
    { commit },
    {
      uuid,
      name,
      description,
      timezone,
      menu = {
        chat: [],
        flows: '',
        inteligence: '',
      },
      organization = {
        uuid: '',
      },
      flow_organization = {
        uuid: '',
        id: '',
      },
      first_access,
      flow_uuid,
      flow_count,
      project_type,
      authorization,
      created_at,
    } = {},
  ) {
    commit('setCurrentProject', {
      uuid,
      name,
      description,
      timezone,
      menu,
      organization,
      flow_organization,
      first_access,
      flow_uuid,
      flow_count,
      project_type,
      redirect_url: '',
      authorization,
      created_at,
    });
  },

  clearCurrentProject({ commit }) {
    commit('setCurrentProject', null);
  },

  async createOrUpdateProjectAuthorization(
    store,
    { email, projectUuid, role, chatRole, hasChat },
  ) {
    return projects.createProjectAuthorization({
      email,
      projectUuid,
      role,
      chatRole,
      hasChat,
    });
  },

  async removeProjectAuthorization(store, { email, projectUuid }) {
    return projects.deleteProjectAuthorization({
      email,
      projectUuid,
    });
  },

  async getSuccessOrgStatusByFlowUuid({ state, commit }, { flowUuid, force }) {
    try {
      if (!state.championChatbots[flowUuid] || force) {
        const {
          has_ia,
          has_flows,
          has_channel,
          has_msg,
          has_channel_production,
        } = await projects.apiFlowsGetSuccessOrg({ flowUuid });

        commit('setChampionChatbot', {
          flowUuid,
          has_ia,
          has_flows,
          has_channel,
          has_msg,
          has_channel_production,
        });
      }

      return state.championChatbots[flowUuid];
    } catch (error) {
      commit('setChampionChatbot', {
        flowUuid,
        error: true,
      });

      throw error;
    }
  },
};
