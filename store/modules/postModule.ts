import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators' 
import {$axios} from '~/utils/initializeAxios'

interface Post {
    author: string,
    content: string,
    id: string
    previewText: string,
    thumbnail: string,
    title: string,
    updatedDate: Date
}

@Module({name: 'modules/postModule',stateFactory: true,namespaced: true})
export default class PostModule extends VuexModule {
    public loadedPosts: Post[] = []
    
    @Mutation
    public setPosts(posts: Post[]) {
        this.loadedPosts = posts;
    }  
    
    @Mutation
    public editPostState(editedPost: Post){
        console.log("editPostState: " + editedPost);
        
        const postIndex = this.loadedPosts.findIndex(post => post.id === editedPost.id);
        this.loadedPosts[postIndex] = editedPost;
    }

    @Action({ commit: 'editPostState', rawError: true})
    public async editPost(editedPost: Post){
        return await $axios.put("https://backendfornuxtjs-default-rtdb.firebaseio.com/posts/" + editedPost.id + ".json", editedPost)
        .then(res => {
            return editedPost;
        })
    }

    get GetLoadedPosts() : Post[]{
        return this.loadedPosts
    }
}