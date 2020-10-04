<template>
  <div
    class="flex
    flex-col
    max-w-full
    min-w-full
    mx-auto
    bg-gray-200
    rounded-lg
    shadow-xl"
    :class="className"
    data-testid="action-list"
  >
    <div class="p-5 bg-white">
      <h1 class="flex-grow text-xl leading-tight text-gray-900">
        List of Actions commited
      </h1>
    </div>
    <div class="p-2 pb-1 mt-3">
      <ActionItem
        v-for="action in actionStackReverse"
        :key="action.action"
        :title="action.action"
        :handleTimeTravel="() => handleTimeTravel(action.action)"
      />
    </div>
  </div>
</template>

<script>
import ActionItem from "../ActionItem/ActionItem";

//vuex
import $store from "@/app/store";

export default {
  name: "ActionList",
  props: {
    className: String,
  },
  components: {
    ActionItem,
  },
  methods: {
    handleTimeTravel(action) {
      const index = this.actionStack.findIndex((x) => x.action === action);

      console.log("action--------", action, index, this.actionStack);

      const postOrder = this.actionStack[index].order;
      const newArr = [...this.actionStack].slice(0, index);

      $store.commit("posts/TIME_TRAVEL_TO_ACTION", {
        actionStack: newArr,
        postOrder,
      });
    },
    reverseList(arr) {
      let tempArr = arr;
      this.actionStackReverse = tempArr.reverse();
    },
  },
  computed: {
    actionStack() {
      return $store.state.posts.actionStack;
    },
    actionStackReverse() {
      let tempArr = $store.state.posts.actionStack;
      return [...tempArr].reverse();
    },
  },
};
</script>
