<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section>
      <h1>Existing Post</h1>
      <PostList isAdmin :posts="GetLoadedPosts" />
    </section>
  </div>
</template>

<script lang="ts">
import PostList from "../../components/Posts/PostList.vue"
import AppButton from "../../components/UI/AppButton.vue"
import { Component, Vue, namespace } from 'nuxt-property-decorator'
const post = namespace('modules/postModule')

@Component({
    components:{
        PostList,
        AppButton
    }
})
export default class AdminIndex extends Vue{
    layout(){
        return "admin"
    }
    
    @post.Getter
    public GetLoadedPosts!: Array<Object>

    @post.Mutation
    public setPosts!:(data : Array<Object>) => void

    asyncData(context){
        return context.$axios.$get("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts.json").then(res => {
            context.store.commit('modules/postModule/setPosts', res);      
        })
    }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>