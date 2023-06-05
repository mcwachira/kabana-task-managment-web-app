import { DragItem } from "../DargItem";


export const isHidden = (

    draggedItem:DragItem | null,
    itemType:string,
    id:string,
    isPreview?:boolean
) => {
    return Boolean (
!isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id
    )
}