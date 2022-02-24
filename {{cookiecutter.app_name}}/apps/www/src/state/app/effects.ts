import { namedNode } from '@rdf-esm/data-model'
import type { DispatchParam, Store } from '../store'

export default function () {
  return function effects(store: Store) {
    const dispatch = store.getDispatch()

    return {
      'core/clientReady': () => {
        const { resource } = store.getState().routing
        dispatch.resource.load(resource)
      },
      'resource/succeeded': ({ id, representation }: DispatchParam<'resource', 'succeeded'>) => {
        const { resource } = store.getState().routing
        if (id.value === resource && representation?.root) {
          dispatch.core.setContentResource({
            id: namedNode(resource),
            pointer: representation.root.pointer,
          })
        }
      },
    }
  }
}
