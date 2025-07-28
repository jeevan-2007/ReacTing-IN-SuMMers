import Tabs from "./tabs"

function RandomComponent(){ // Fixed: Component name should be PascalCase
    return <h1>Some Random content</h1>
}

export default function TabTest (){
    const tabs = [
        { label: "Tab 1", content: "Content for Tab 1" },
        { label: "Tab 2", content: "Content for Tab 2" },
        { label: "Tab 3", content: <RandomComponent /> } // Fixed: Component name and proper JSX usage
    ]
    const handleChange = (index) => {
        console.log("Tab changed to index:", index);
        // You can add more logic here if needed
        // For example, you might want to update some state or perform an action based on the selected tab
    }
    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}