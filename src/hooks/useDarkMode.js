import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initial) =>{
    const [value, setValue] = useLocalStorage("isDarkMode", initial);
    useEffect(()=>{
        if(value === true){
           document.querySelector('body').classList.add('dark-mode'); 
        }else{
            document.querySelector('body').classList.remove('dark-mode');
        }
    },[value]);

    return [value, setValue];
};

export default useDarkMode;