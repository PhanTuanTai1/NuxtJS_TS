import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/initializeAxios'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor