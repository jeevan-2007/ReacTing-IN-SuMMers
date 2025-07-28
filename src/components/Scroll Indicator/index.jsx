import { useEffect, useState } from "react";
import './styles.css'
export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scroll, setScroll] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleScrollPercentage = () => {
        const howMuchScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScroll((howMuchScrolled / height) * 100);
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);
        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        };
    }, []);

    console.log(data, scroll);

    return (
        <div className="scroll-indicator-wrapper">
            {/* Fixed scroll progress bar */}
            <div className="scroll-progress-container">
                <div 
                    className="scroll-progress-bar"
                    style={{ width: `${scroll}%` }}
                ></div>
            </div>
            
            {/* Scroll percentage display */}
            <div className="scroll-percentage">
                {Math.round(scroll)}% scrolled
            </div>

            <div className="content-container">
                <h3 className="scroll-indicator-title">Custom Scroll Indicator</h3>
                
                {loading && <div className="loading-spinner">Loading...</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                
                <div className="data-container">
                    {data && data.length > 0
                        ? data.map((dataItem) => (
                              <p key={dataItem.id} className="data-item">{dataItem.title}</p>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
}