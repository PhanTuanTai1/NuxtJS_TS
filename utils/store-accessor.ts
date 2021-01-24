import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import postModule from '~/store/modules/postModule'

let postStore: postModule

function initialiseStores(store: Store<any>): void {
  postStore = getModule(postModule, store)
}

export { initialiseStores, postStore }