import  {createContext, useContext, ReactNode, Dispatch}  from 'react'
import { AppState, List, Task , appStateReducer} from './appStateReducer'
import { Action } from './actions';
import { useImmer, useImmerReducer } from 'use-immer'
import { DragItem } from '../DargItem';



const appData :AppState = {
    draggedItem:null,
    lists:[
        {
            id:'0',
            text:'To do',
            tasks:[{id:'c1', text:"Generate  app Scaffold"}]
        },
        {
            id:'1',
            text:'In progress',
            tasks:[{id:'c2', text:"In Progress  app Scaffold"}]
        },
        {
            id:'2',
            text:'Done',
            tasks:[{id:'co', text:"finished setting up app"}]
        }
    ]
}

type AppStateContextProps = {
    lists:List[],
    getTaskByListId(id:string):Task[]
    dispatch:Dispatch<Action>
    draggedItem:DragItem | null
}


type ChildrenProps = {
    children?:ReactNode
}
const AppStateContext =  createContext<AppStateContextProps>({}  as AppStateContextProps) //generic type

export const AppStateProvider = ({children}:ChildrenProps) => {
    const [state, dispatch] = useImmerReducer(appStateReducer,appData)
    const {lists , draggedItem} =  state;

    const getTaskByListId = (id:string) => {
        return lists.find((list) => list.id === id)?.tasks || []

    }

    return (
        <AppStateContext.Provider value={{lists, getTaskByListId, dispatch , draggedItem}}>

{children}
            </AppStateContext.Provider>
    )
}

export const useAppState = () =>{
    return useContext(AppStateContext)
}