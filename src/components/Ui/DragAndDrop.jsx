import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function DragAndDrop({
    list,
    updateList,
    Component,
    onDragCompleted,
    containerStyle
}) {

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const newItems = [...list];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        updateList(newItems);
        if(onDragCompleted){
            onDragCompleted();
        }
    }

    function onDragStart(){
        console.log("Started...");
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>  
            <Droppable droppableId="droppable-1" >  
                {(provided, snapshot) => (  
                    <div className={containerStyle || ''}
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