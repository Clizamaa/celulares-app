import FormAssignCell from './components/FormAssignCell'
import FormRegisterCell from './components/FormRegisterCell'
import FormRegisterSim from './components/FormRegisterSim'
import NavBar from './components/NavBar'

export const App = () => {
    return (
        <div className="container grey-bg">
              <NavBar />
           {/* <FormAssignCell /> */}
           <FormRegisterCell />
           {/* <FormRegisterSim /> */}

        </div>
    )
}

export default App

