<template>
  <div
    class="flex flex-row items-center max-w-full p-6 mx-auto mb-1 bg-white rounded-lg shadow-xl"
  >
    <h2 class="flex-grow leading-tight text-gray-900 text-l">{{ title }}</h2>

    <button
      class="p-2 ml-3 text-white transition duration-500 ease-in-out transform bg-green-400 rounded hover:bg-green-600 hover:-translate-y-1 hover:scale-110"
      v-on:click="() => handleTimeTravel()"
    >
      Time travel
    </button>
  </div>
</template>

<script>
export default {
  name: "ActionItem",
  props: {
    title: String,
    handleTimeTravel: Function,
  },
};
</script>
