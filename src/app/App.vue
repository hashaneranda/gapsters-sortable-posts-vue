<template>
  <div class="min-h-screen app">
    <div
      data-testid="app"
      class="container grid grid-cols-1 gap-4 p-5 pt-10 mx-auto md:grid-cols-3"
    >
      <PostList className="col-span-2" />
      <ActionList />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList/PostList";
import ActionList from "../components/ActionList/ActionList";

export default {
  name: "App",
  components: {
    PostList,
    ActionList,
  },
};
</script>

<style>
.app {
  background: rgb(236, 236, 236);
  background: linear-gradient(
    349deg,
    rgba(236, 236, 236, 1) 73%,
    rgba(116, 31, 200, 1) 73%
  );
}
</style>
