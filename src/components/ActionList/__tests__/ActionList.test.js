import Vuex from "vuex";
import { render, cleanup } from "@testing-library/vue";
import { createLocalVue, mount } from "@vue/test-utils";

import ActionList from "../ActionList";

import modules from "@/app/modules.js";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

afterEach(cleanup);

describe("ActionList Componenet", () => {
  it("should take a snapshot", () => {
    const wrapper = mount(ActionList, {
      store,
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders componenet corretly without passing argumenets", () => {
    const { getByTestId } = render(ActionList, {
      store,
      localVue,
    });
    expect(getByTestId("action-list")).toBeInTheDocument();
  });
});
