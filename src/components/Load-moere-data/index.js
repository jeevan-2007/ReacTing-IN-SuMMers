import React, { useState, useEffect } from 'react'
import './styles.css'

function FetchPrducts() {
    const [loading, setloading] = useState(false)
    const [products, setProdects] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton,setDisableButton] = useState(false)
    async function fetchPrducts() {
        try {
            setloading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json();
            console.log(result);
            if (result && result.products.length) {
                if (count === 0) {
                    setProdects(result.products);
                } else {
                    setProdects(prevProducts => [...prevProducts, ...result.products]);
                }
            }
            setloading(false)
        } catch (e) {
            console.log(e);
            setloading(false)
        }
    }

    useEffect(() => {
        fetchPrducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        } else {
            setDisableButton(false);
        }
    }, [products]);
    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    // Only show loading screen on FIRST load when there are no products
    if (loading && products.length === 0) {
        return <div className='loading'>Loading data plz wait!!!!!!!!!!!!!!</div>
    }

    return (
        <div className='container'>
            <div className='product-container'>
                {products && products.length ? products.map(item => (
                    <div className='product' key={item.id}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                        />
                    </div>
                ))
                : null}
            </div>
            <div>
                <button onClick={handleClick} disabled={disableButton}>
                    Load More products
                </button>
                    {disableButton ? <p>You have reached 100 products </p> : null}
            </div>
        </div>
    )
}

export default FetchPrducts