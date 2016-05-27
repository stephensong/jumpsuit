import { render } from 'preact'
import { Provider } from 'react-redux'
import { combine } from './reducer'

export default function (stores, baseComponent) {
  const store = combine({ ...stores })
  const provider = <Provider store={ store }>{ baseComponent }</Provider>

  render(provider, document.getElementById('app'))
}
