<template>
     <div style="width:70%;margin:auto;">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnail"
          >Thumbnail Link</AppControlInput
        >

        <AppControlInput control-type="textarea" v-model="editedPost.content"
          >Content</AppControlInput
        >
        <AppControlInput control-type="textarea" v-model="editedPost.previewText"
          >Preview Text</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>

        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import AppControlInput from "../UI/AppControlInput.vue"
import AppButton from "../UI/AppButton.vue"
import { Route } from "vue-router"

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
        AppControlInput, 
        AppButton
    }
})
export default class AdminPostForm extends Vue {
    @Prop({
        type: Object,
        required: true
    }) readonly editedPost!: DisplayPost

    public onSave() : void {
        this.$emit('submit', this.editedPost);
    }

    public onCancel() : void {
      this.$router.push('/admin');
    }

    created(){
      console.log("editedPost: " + this.editedPost);
      
    }
}
</script>