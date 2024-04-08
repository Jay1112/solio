import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DragAndDrop({
    list,
    updateList,
    Component
}) {

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const newItems = [...list];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        updateList(newItems);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>  
            <Droppable droppableId="droppable-1" >  
                {(provided, snapshot) => (  
                    <div  
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                    >  
                        {list.map((item, index) => (  
                            <Draggable key={item.id} draggableId={`droppable-${item.id}`} index={index}>  
                                {(provided, snapshot) => (  
                                   <div  
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}  
                                   >  
                                    <Component data={item} />
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

export default DragAndDrop;