import React, { useContext, useState } from 'react';
import './Sidebar.css'
import { CircleQuestionMarkIcon, HistoryIcon, MenuIcon, PlusIcon, Settings,MessageSquareIcon } from 'lucide-react';
import { Context } from '../context/Context.jsx';

export const Sidebar =() => {
    const [iscollapsed, setIsCollapsed] = useState(true);

    const { prevPrompt, setResultData, setRecentPrompt, setLoading, setShowResult } = useContext(Context);

    return (
        <div className={`sidebar ${iscollapsed ? 'collapsed' : ''}`}>
            <div className="top">
                <MenuIcon className='menu icon' onClick={() => setIsCollapsed(prev => !prev)}/>
                <div className="new-chat" onClick={() => {
                    setLoading(false);
                    setShowResult(false);
                }}>
                    <PlusIcon className='icon'/>
                    <p>New Chat</p>
                </div>
                {!iscollapsed?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompt.map((entry, i) => (
                    <div className="recent-entry" key = {i} onClick={() => {
                        setResultData(entry.result);
                        setRecentPrompt(entry.prompt);
                        setShowResult(true);
                    }}>
                        <MessageSquareIcon className='icon' strokeWidth={1.2}/>
                        <p>{entry.prompt}</p>
                    </div>
                    ))}
                </div>
                :
                null
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <CircleQuestionMarkIcon className='icon'/>
                    <p>Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <HistoryIcon className='icon'/>
                    <p>History</p>
                </div>
                <div className="bottom-item recent-entry">
                    <Settings className='icon'/>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}