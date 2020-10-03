<template>
  <div
    class="flex flex-row items-center max-w-md p-6 my-3 transition duration-500 ease-in-out transform bg-white rounded-lg shadow-xl hover:scale-110"
  >
    <h1
      class="flex-grow text-xl leading-tight text-gray-900"
      data-testid="title"
    >
      Post {{ id }}
    </h1>
    <div class="flex-grow-0">
      <img
        v-if="!isStart"
        :src="downArrow"
        alt="arrow"
        class="w-4 mb-5
      transform rotate-180 action__icon"
        data-testid="button-up"
        @click="() => buttonUp(id)"
      />
      <img
        v-if="!isEnd"
        :src="downArrow"
        alt="arrow"
        class="w-4 action__icon"
        data-testid="button-down"
        @click="() => buttonDown(id)"
      />
    </div>
  </div>
</template>

<script>
// import downArrow from "../../assets/images/downArrow.svg";

export default {
  name: "Post",
  props: {
    id: Number,
    isStart: Boolean,
    isEnd: Boolean,
    buttonUp: Function,
    buttonDown: Function,
  },
  computed: {
    downArrow() {
      return require("../../assets/images/downArrow.svg");
    },
  },
};
</script>

<style>
.action__icon:hover {
  filter: brightness(0%);
  cursor: pointer;
}
</style>
