import DragAndDrop from '../Ui/DragAndDrop.jsx';
import List from '../Socials/data.js';
import { useState } from 'react';
import SocialItem from '../Socials/SocialItem.jsx';

function SocialLinksForm(){
    const [socialList, setSocialList] = useState(List.list);

    function handleListChange(updatedList){
        setSocialList(updatedList);
    }

    function onDragCompleted(){
        const element = document.querySelector('#social-platforms-section');
        if(element){
            element.scrollIntoView({ behavior : 'smooth' });
        }
    }

    return (
        <form id='social-platforms-section' className="p-4">
            <DragAndDrop list={socialList} updateList={handleListChange} Component={SocialItem} onDragCompleted={onDragCompleted} />
        </form>
    );
}

export default SocialLinksForm;