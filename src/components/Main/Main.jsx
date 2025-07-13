import { CompassIcon, LightbulbIcon, CircleUser, CircleQuestionMarkIcon, CodeIcon, GalleryThumbnails, Mic, Send, SendHorizonal, UserIcon, StarIcon, Loader } from 'lucide-react';
import './Main.css'
import { useContext, useEffect } from 'react';
import { Context } from '../context/Context.jsx';
import { AiMessage } from '../AiMessage.jsx';




export const Main = () => {

    const {onSent,recentPrompt,showResult,loading, resultData, setInput,input} = useContext(Context);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                onSent(input);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onSent]);

    const cards = [
        {
            text: "Using React JS and Gemini API | Gemini Clone In React 2025",
            icon: CompassIcon
        },
        {
            text: "Briefly summarize this concept: urban planning",
            icon: LightbulbIcon
        },
        {
            text:"Brainstorm team bonding activities for our work retreat",
            icon: CircleQuestionMarkIcon
        },
        {
            text:"Tell me about React js and React native",
            icon: CodeIcon
        }
        
    ];

    return (
        <div className="main">
            <div className="nav">
                <p >Gemini</p>
                <CircleUser size={30} onClick={() => window.alert("lol")} style={{ cursor:"pointer" }}/>
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                    <div className="greet">
                        <p><span>Hello, Sparsh.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        {cards.map((card, i) => (
                            <div className="card" key = {i} onClick={() => onSent(card.text)}>
                                <p>{card.text}</p>
                                <card.icon className='icon' size={36} strokeWidth={1.5}/>
                            </div>
                        ))}
                    </div>
                    </>
                    :
                    <div className='result'>
                        <div className='user-message'>
                            <div className="message-bubble">
                                <p>{recentPrompt}</p>
                            </div>
                        </div>
                        {loading ? 
                        <Loader />
                        :
                        <div className='result-data'>
                            <StarIcon />
                            <div className="message-bubble">
                                <AiMessage/>
                            </div>
                        </div>
                        }
                    </div>
                        
                    
                }
                

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' value={input} onChange={(e) => setInput(e.target.value)}/>
                        <div className='btns'>
                            <GalleryThumbnails size={24} style={{cursor:"pointer"}}/>
                            <Mic size={24} style={{cursor:"pointer"}}/>
                            {input !== '' ?
                                <SendHorizonal strokeWidth={1.5} size={24} style={{cursor:"pointer"}} onClick={() => onSent(input)}/>
                                :
                                null
                            }
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}