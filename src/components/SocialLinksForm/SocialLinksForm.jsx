import DragAndDrop from '../DragAndDrop/DragAndDrop.jsx';
import List from '../../mock/data.js';
import { useState } from 'react';
import UserSocialMediaItem from '../UserSocialMediaItem/UserSocialMediaItem.jsx';

function SocialLinksForm(){
    const [socialList, setSocialList] = useState(List.list);

    function handleListChange(updatedList){
        setSocialList(updatedList);
    }

    return (
        <form className="p-4">
            <h2 className="poppins text-2xl tracking-wider">Social Platforms</h2>
            <DragAndDrop list={socialList} updateList={handleListChange} Component={UserSocialMediaItem} />
            <button className='dark-button-style px-4 py-2 poppins text-sm my-2'>
                Save
            </button>
        </form>
    );
}

export default SocialLinksForm;