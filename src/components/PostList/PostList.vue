<template>
  <div data-testid="post-list" class="container mx-auto" :class="className">
    <h1 class="text-4xl leading-loose text-white">Sortable Post List</h1>
    <Post
      v-for="(post, index) in posts"
      :key="post.id"
      :id="post.id"
      :isStart="index === 0"
      :isEnd="index === posts.length - 1"
      :buttonUp="() => handleButtonClick(index, 'up', post.id)"
      :buttonDown="() => handleButtonClick(index, 'down', post.id)"
    />
  </div>
</template>

<script>
import Post from "../Post/Post";

//utils
import { swapArrayElements } from "./utils/ArrayHelper";

//vuex
import $store from "@/app/store";

export default {
  name: "PostList",
  props: {
    className: String,
  },
  components: {
    Post,
  },
  computed: {
    posts: () => {
      return $store.state.posts.postList.data;
    },
  },
  methods: {
    handleButtonClick(id, action, postId) {
      if (action === "up") {
        const newList = swapArrayElements([...this.posts], id - 1, id);
        const action = `Moved post ${postId} from index ${id} to index ${id -
          1}`;

        $store.commit("posts/ADD_TO_ACTION_STACK", {
          action,
          order: this.posts,
        });
        $store.commit("posts/MOVE_UP_POST", newList);
      } else if (action === "down") {
        const newList = swapArrayElements([...this.posts], id, id + 1);
        const action = `Moved post ${postId} from index ${id} to index ${id +
          1}`;

        $store.commit("posts/ADD_TO_ACTION_STACK", {
          action,
          order: this.posts,
        });
        $store.commit("posts/MOVE_DOWN_POST", newList);
      }
    },
  },
  created() {
    $store.dispatch("posts/FETCH_POSTS");
  },
};
</script>
