import { useState } from "react";
import accordionData from "./Data";
import './styles.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enablemultiselection, setenablemultiselection] = useState(false)
    const [multiple, setmultiple] = useState([])
    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId); // toggle selection
    };
    const handleMultiselection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexfcurrentid = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexfcurrentid)
        if(findIndexfcurrentid===-1)cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexfcurrentid,1)
    setmultiple(cpyMultiple)
    console.log(selected,multiple)
    }
    return (
        <div className="wrapper">
            <button onClick={() => setenablemultiselection(!enablemultiselection)}>{enablemultiselection ? <p> Disble multi selection</p> : <p>Enable multi selection</p>}</button>
            <div className="accordian">
                {accordionData && accordionData.length > 0 ? (
                    accordionData.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div className="title" onClick={enablemultiselection ? () => handleMultiselection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.title}</h3>
                                <span>{selected === dataItem.id ? "-" : "+"}</span>
                            </div>
                            {
                                enablemultiselection ? multiple.indexOf(dataItem.id)!== -1 && (
                                    <div className="content">{dataItem.content}</div>
                                )
                                :selected ===dataItem.id && (
                                    <div className="content">{dataItem.content}</div>
                                )
                        }
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
