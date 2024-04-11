import DragAndDrop from '../DragAndDrop/DragAndDrop.jsx';
import List from '../../mock/data.js';
import { useState } from 'react';
import UserSocialMediaItem from '../UserSocialMediaItem/UserSocialMediaItem.jsx';
import { FaCirclePlus } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

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
            <div className='flex items-center justify-start bg-slate-700 text-white p-2 mb-4'>
                <h2 className="text-left flex-1 font-[monospace] ml-2 text-2xl tracking-wide rounded-sm">Social Links</h2>
                <button className='light-button-style p-2 rounded-sm'>
                    <FaCirclePlus className='text-xl font-semibold'/>
                </button>
                <button className='light-button-style p-2 rounded-sm ml-2'>
                    <FaSave className='text-xl font-semibold'/>
                </button>
            </div>
            <DragAndDrop list={socialList} updateList={handleListChange} Component={UserSocialMediaItem} onDragCompleted={onDragCompleted} />
        </form>
    );
}

export default SocialLinksForm;