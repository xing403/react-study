import JSXIndexPage from './001_jsx/index'
import IfOrForIndexPage from './002_if_or_for/index'
import EventBindIndexPage from './003_event_bind/index'
import StateIndexPage from './004_state/index'
import ButtonComponent from './005_component/button'
import ComponentParam from './006_component_param'
import UseEffectDemo from './007_useEffect'
import CustomHook from './008_custom_hook'

function App() {
  return (
    <div>
      <JSXIndexPage />
      <IfOrForIndexPage />
      <EventBindIndexPage />
      <StateIndexPage />
      <ButtonComponent />
      <ComponentParam />

      <UseEffectDemo />

      <CustomHook />
    </div>
  )
}

export default App
