import { fetchPosts } from "@/services/post.service";

export default {
  namespaced: true,
  state: {
    postList: {
      loading: false,
      data: [],
      error: null,
      timeTraveling: false,
    },
    actionStack: [],
  },

  mutations: {
    FETCH_POSTS_SUCCESS: (state, response) => {
      state.postList = {
        ...state.postList,
        loading: false,
        error: null,
        data: response.data ? response.data.slice(0, 5) : response.data,
      };
    },
    FETCH_POSTS_ERROR: (state, response) => {
      state.postList = {
        ...state.postList,
        loading: false,
        data: null,
        error: response
          ? response.data
            ? response.data.message
            : response.data
          : null,
      };
    },
    MOVE_UP_POST: (state, payload) => {
      state.postList = {
        ...state.postList,
        loading: false,
        data: payload,
        error: null,
      };
    },
    MOVE_DOWN_POST: (state, payload) => {
      state.postList = {
        ...state.postList,
        loading: false,
        data: payload,
        error: null,
      };
    },
    ADD_TO_ACTION_STACK: (state, payload) => {
      state.actionStack = [...state.actionStack, payload];
    },
    TIME_TRAVEL_TO_ACTION: (state, payload) => {
      state.actionStack = payload.actionStack;
      state.postList = {
        ...state.postList,
        data: payload.postOrder,
        timeTraveling: false,
      };
    },
  },

  actions: {
    FETCH_POSTS: () => {
      fetchPosts();
    },
  },
};
