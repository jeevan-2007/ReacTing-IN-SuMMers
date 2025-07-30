import React from 'react'
// import Accordian from './components/accordian'
// import Colorchanger from './components/Hex/Index'
// import StarRating from './components/StarRating'
// import ImageSlider from './components/ImageSlider.js'
// import FetchPrducts from './components/Load-moere-data/index.js'
import TreeView from './components/trree-view/index.js'
import MenuData from './components/trree-view/data.js'
import QrCodegenerator from './components/QrCodeGenrator/index.js'
import LighDarkMode from './components/LightToDark/index.js'
import ScrollIndicator from './components/Scroll Indicator/index.jsx'
import TabTest from './components/CustomTabs/TabTest.jsx'
import ModalTest from './components/custom-modal-popup/ModalTest.jsx'
import GithubProfileFinder from './components/Github-profile-founder/Index.js'
import SearchAtocompleteWithApi from './components/search-auto-complete/index.js'
function App() {
  const h2design = {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '400',
    color: '#6b7280',
    background: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    padding: '8px 16px',
    marginBottom: '20px',
    fontFamily: 'Inter, -apple-system, sans-serif',
    letterSpacing: '0.5px'
  }

  const appContainerStyle = {
    minHeight: '100vh',
    paddingBottom: '100px', // Increased bottom space
    position: 'relative' // Ensure proper positioning context
  }

  const sectionStyle = {
    marginBottom: '40px', // Space between sections
    padding: '0 20px'
  }

  return (
    <div style={appContainerStyle}>
      <h1 style={{
        position: 'sticky',
        top: '0',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '500',
        color: '#475569',
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e0e7ff 50%, #f0f9ff 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '0 0 8px 8px',
        padding: '12px 20px',
        margin: '0 0 30px 0',
        fontFamily: 'Inter, -apple-system, sans-serif',
        letterSpacing: '0.5px',
        zIndex: '100',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)'
      }}>
        Projects
      </h1>
{/* 
       
      <div style={sectionStyle}>
        <h2 style={h2design}>Tree view</h2>
        <TreeView menus={MenuData}/>
      </div>
      <div style={sectionStyle}>
        <h2 style={h2design}>Qr Code Generator</h2>
        <QrCodegenerator/>
      </div> 
      <div style={sectionStyle}>
        <h2 style={h2design}>Light Dark Theme</h2>
        <LighDarkMode/>
      </div> 
        <div style={sectionStyle}>
        <h2 style={h2design}>Scroll Indicator</h2>
         <ScrollIndicator url={"https://dummyjson.com/products?limit=150"}/>
      </div> 
       <div style={sectionStyle}>
        <h2 style={h2design}>Tabs</h2>
         <TabTest/>
      </div>
      
       <div style={sectionStyle}>
        <h2 style={h2design}>Custom Modal Component</h2>
        <ModalTest />
      </div>
       
        <div style={sectionStyle}>
        <h2 style={h2design}>Github Profile Finder</h2>
        <GithubProfileFinder/>
      </div> */}
      <div style={sectionStyle}>
        <h2 style={h2design}>Search Autocomplete Api</h2>
        <SearchAtocompleteWithApi/>
      </div>
    </div>
  )
}

export default App