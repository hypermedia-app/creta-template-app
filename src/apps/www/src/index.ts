import App from './components/App'
import type { State } from './state/store'

declare module '@hydrofoil/roadshow/lib/ViewContext' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface Params extends State {}
}

customElements.define('{{app_name}}-app', App)
