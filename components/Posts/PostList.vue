<template>
    <section class="post-link">
          <PostPreview v-for="post in posts" 
          :key="post.id" 
          :is-admin="isAdmin" 
          :post="post"/>
    </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import PostPreview from "../../components/Posts/PostPreview.vue"

interface DisplayPost{
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
        PostPreview
    }
})
export default class PostList extends Vue {
    @Prop({ type: Object, required: true }) readonly posts!: Array<DisplayPost>
    @Prop({ type: Boolean, default: true}) readonly isAdmin
}
</script>

<style scoped>
    .post-link {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
</style>