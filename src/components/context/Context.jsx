import { createContext, useState } from "react";
import { Ai } from "../Main/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData,setResultData] = useState("");
    const [currentAi, setCurrentAi] = useState("");

    const onSent = (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(prompt);
        setInput("");
        
        Ai(prompt).then(text => {
            console.log(text);
            setResultData(text);
            setLoading(false);
            setInput("");
            setPrevPrompts((prev => [...prev, {"prompt": prompt, "result":text}]));
        })
        .catch(err => {
            console.log(err);
            setResultData(err);
            setLoading(false);
            setInput("");
        })
    }

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompts,
        showResult,
        loading,
        resultData,
        setResultData,
        currentAi,
        setShowResult,
        setLoading,
        setCurrentAi,
        onSent,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
