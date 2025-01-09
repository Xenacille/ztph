import type { LayoutServerLoad } from '../../$types'
import { createInstance } from '$lib/pocketbase'

export const load: LayoutServerLoad = async () => {
  const pb = createInstance()

  const paginationData = await pb
    .collection('transmission')
    .getFullList({ sort: '-created' })

  return { paginationData }
}
