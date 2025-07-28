import { useState } from "react"
import "./tabs.css"

export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleOnClick = (index) => {
        setCurrentTabIndex(index);
        onChange(index);
    }
    
    return (
        <div className="tabs-wrapper">
            <div className="tabs-heading">
                {tabsContent.map((tabItem, index) => (
                    <div 
                        onClick={() => handleOnClick(index)} 
                        key={tabItem.label}
                        className={`tab-item ${index === currentTabIndex ? 'active' : ''}`}
                    >
                        <span className="tab-label">{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className="tabs-content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}