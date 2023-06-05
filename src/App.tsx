import { AddNewItem } from "./components/AddNewItem"
import Column from "./components/Column"
import { AppContainer } from "./styles"
import {useAppState} from './state/AppStateContext'
import { addList } from "./state/actions"
import { CustomDragLayer } from "./components/CustomDragLayer"

function App() {


  const {lists , dispatch} = useAppState()


  console.log('test')

  return (
    <AppContainer>
      <CustomDragLayer/>

{lists.map((list) => (
  <Column key={list.id} text={list.text} id={list.id}/>
))}
      <AddNewItem toggleButtonText="+ add another list" onAdd={(text) => dispatch(addList(text))}/>

    </AppContainer>
  )
}

export default App
