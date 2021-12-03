import React,{useState} from 'react';

const useYogeshHook = (active=false) =>{
    const [isActive, setIsActive] = useState(active);
    console.log({active});
    return [isActive, setIsActive];
}

export default useYogeshHook;