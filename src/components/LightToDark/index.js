import useLocalStorage from "./useLocalStorage"
import './theme.css'


export default function LightDarkMode () {


    const [theme,setTheme]=useLocalStorage('theme' , 'dark')

   const handleToggleTheme = () =>{
    setTheme(theme==='light' ? 'dark' : 'light')
    }
    console.log(theme)

    return <div className="light-dark-container" data-theme ={theme}>
        <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
        </div>
    </div>

}