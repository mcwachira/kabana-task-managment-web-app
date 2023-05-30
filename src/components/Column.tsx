import { CardContainer, ColumnContainer, ColumnTitle } from "../styles"
import { AddNewItem } from "./AddNewItem"
import Card from "./Card"


type ColumnProps = {
    //defining as prop type of string
    text:string
}


const Column = ({text}:ColumnProps) => {
  return (
    <ColumnContainer>
    
    <ColumnTitle> {text}</ColumnTitle>
    <Card text="Generate app"/>
    <Card text="Add app to  repo"/>
    <Card text="Build app" />
    <Card text= "Monetize app"/>
    <AddNewItem toggleButtonText="+ add another list" onAdd={() => console.log('item added')} dark/>
    

    
     </ColumnContainer>
  )
}

export default Column