import Vuex from "vuex";
import { render, cleanup } from "@testing-library/vue";
import { createLocalVue, mount } from "@vue/test-utils";

import PostList from "../PostList";

import modules from "@/app/modules.js";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

afterEach(cleanup);

describe("PostList Componenet", () => {
  it("should take a snapshot", () => {
    const wrapper = mount(PostList, {
      store,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders componenet corretly without passing argumenets", () => {
    const { getByTestId } = render(PostList, {
      store,
      localVue,
    });
    expect(getByTestId("post-list")).toBeInTheDocument();
  });
});
