import DragAndDrop from '../DragAndDrop/DragAndDrop.jsx';
import LinkData from '../../mock/linkdata.js';
import { useState } from 'react';
import UserLinkItem from '../UserLinkItem/UserLinkItem.jsx';
import { FaCirclePlus } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

function ImpLinksForm(){
    const [linksList, setLinksList] = useState(LinkData.list);

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
            <div className='flex items-center justify-start bg-slate-700 text-white p-2 mb-4'>
                <h2 className="text-left flex-1 font-[monospace] ml-2 text-2xl tracking-wide rounded-sm">Custom Links</h2>
                <button className='light-button-style p-2 rounded-sm'>
                    <FaCirclePlus className='text-xl font-semibold'/>
                </button>
                <button className='light-button-style p-2 rounded-sm ml-2'>
                    <FaSave className='text-xl font-semibold'/>
                </button>
            </div>
            <DragAndDrop 
                list={linksList} 
                updateList={handleListChange} 
                Component={UserLinkItem} 
                onDragCompleted={onDragCompleted} 
            />
        </form>
    );
}

export default ImpLinksForm;