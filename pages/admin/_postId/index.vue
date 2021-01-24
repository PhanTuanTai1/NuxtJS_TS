<template>
    <div class="admin-post-page">
        <section class="update-form">
          <AdminPostForm :editedPost="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
import AdminPostForm from "../../../components/Admin/AdminPostForm.vue"
import { postStore } from '~/store'

interface Post {
    author: string,
    content: string,
    id: string
    previewText: string,
    thumbnail: string,
    title: string,
    updatedDate: Date
}

@Component({
    components:{
        AdminPostForm
    }
})
export default class IndexPostId extends Vue {
    layout(){
        return "admin";
    }

    asyncData(context) {
        return context.$axios.$get("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" + context.params.postId + ".json").then((Response) => {
            console.log(Response);
            
            return {
              loadedPost:{...Response, id: context.params.postId}
            };
        });
    }

    public async onSubmitted(editedPost: Post) : Promise<void> {
        await postStore.editPost(editedPost);
        this.$router.push("/admin");
    }

}
</script>