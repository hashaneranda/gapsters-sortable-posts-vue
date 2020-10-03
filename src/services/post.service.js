import Api from "@/services/API";
import $store from "@/app/store";

export const fetchPosts = async () => {
  Api.get("/posts")
    .then((response) => {
      console.log("service working", response);
      $store.commit("posts/FETCH_POSTS_SUCCESS", response);
    })
    // eslint-disable-next-line
    .catch((error) => {
      console.log("service working error");
      $store.commit("posts/FETCH_POSTS_ERROR", error);
    });
};
