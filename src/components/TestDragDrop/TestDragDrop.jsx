import List from "../../mock/data";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TestDragDrop() {
    const [items, setItems] = useState(List.list);

    function onDragEnd(result) {
        console.log(result);
        if (!result.destination) {
            return;
        }
        const newItems = [...items];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems);
        console.log(newItems);
    }
    

    return (
        <DragDropContext onDragEnd={onDragEnd}>  
            <Droppable droppableId="droppable-1" >  
                {(provided, snapshot) => (  
                    <div  
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                    >  
                        {items.map((item, index) => (  
                            <Draggable key={item.id} draggableId={`droppable-${item.id}`} index={index}>  
                                {(provided, snapshot) => (  
                                   <div  
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}  
                                   >  
                                    <p>{item.title}</p>
                                   </div>  
                                )}  
                            </Draggable>  
                        ))}  
                    </div>  
                )}  
            </Droppable>  
        </DragDropContext>
    )
}

export default TestDragDrop;