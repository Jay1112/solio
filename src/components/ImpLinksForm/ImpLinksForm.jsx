import DragAndDrop from '../DragAndDrop/DragAndDrop.jsx';
import List from '../../mock/data.js';
import { useState } from 'react';
import UserSocialMediaItem from '../UserSocialMediaItem/UserSocialMediaItem.jsx';

function ImpLinksForm(){
    const [linksList, setLinksList] = useState(List.list);

    function handleListChange(updatedList){
        setLinksList(updatedList);
    }

    function onDragCompleted(){
        const element = document.querySelector('#important-links-section');
        if(element){
            element.scrollIntoView({ behavior : 'smooth' });
        }
    }

    return (
        <form id='important-links-section' className="p-4">
            <h2 className="poppins text-4xl md:text-2xl tracking-wider">Important Links</h2>
            <DragAndDrop list={linksList} updateList={handleListChange} Component={UserSocialMediaItem} onDragCompleted={onDragCompleted} />
            <button className='dark-button-style px-4 py-2 poppins text-sm my-2'>
                Save
            </button>
        </form>
    );
}

export default ImpLinksForm;