import { useContext, useEffect, useState } from "react";
import { Context } from './context/Context.jsx';
import { marked } from "marked";


export const AiMessage = () => {

    const {setCurrentAi, currentAi, resultData} = useContext(Context);

    const textt = marked(resultData);

    useEffect(() => {
        const words = textt.split(' ');
        let index = 0;

        const interval = setInterval(() => {
            if (index < words.length - 1) {
                setCurrentAi(prev => prev + words[index] + " ");
                index++;
            }
            else{
                clearInterval(interval);
            }
        }, 100);

        return () =>{
            clearInterval(interval);
            setCurrentAi("");
        }
    }, [resultData, setCurrentAi]);

    return <p dangerouslySetInnerHTML={{__html:currentAi}}></p>
}