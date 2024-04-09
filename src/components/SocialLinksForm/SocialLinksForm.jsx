import DragAndDrop from '../DragAndDrop/DragAndDrop.jsx';
import List from '../../mock/data.js';
import { useState } from 'react';
import UserSocialMediaItem from '../UserSocialMediaItem/UserSocialMediaItem.jsx';

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
            <h2 className="poppins text-4xl md:text-2xl tracking-wider">Social Platforms</h2>
            <DragAndDrop list={socialList} updateList={handleListChange} Component={UserSocialMediaItem} onDragCompleted={onDragCompleted} />
            <button className='dark-button-style px-4 py-2 poppins text-sm my-2'>
                Save
            </button>
        </form>
    );
}

export default SocialLinksForm;