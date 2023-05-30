import { AddNewItem } from "./components/AddNewItem"
import Column from "./components/Column"
import { AppContainer } from "./styles"

function App() {

  return (
    <AppContainer>

      <Column text='Todo:'/>
      <AddNewItem toggleButtonText="+ add another list" onAdd={() => console.log('item added')}/>
    </AppContainer>
  )
}

export default App
