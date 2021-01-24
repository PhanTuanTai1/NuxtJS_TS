<template>
    <div style="display:inline-block;">
         <nuxt-link :to="postLink">
            <article class="post-preview">
              <div class="post-thumbnail" :style="'background-image: url(' + post.thumbnail + ')'"></div>
              <div class="post-content">
                <h1>{{post.title}}</h1>
                <p>{{post.previewText}}</p>
              </div>
            </article>
          </nuxt-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

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
    
})
export default class PostPreview extends Vue {
    @Prop({
        type: Object,
        required: true
    }) readonly post !: DisplayPost
    @Prop({
        type: Boolean,
        required: false
    }) readonly isAdmin
    
    get postLink(){
        return this.isAdmin ? '/admin/' + this.post.id : '/posts/' + this.post.id;
    }
}
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>