import React, { useEffect, useState } from 'react'
import { BsArrowUpLeftCircleFill } from 'react-icons/bs';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({ url, limit }) {
    const [images, setImage] = useState([]);
    const [currentSlide, SetCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchImages(geturl) {
        try {
            const response = await fetch(`${geturl}?page=1&limit=${limit}`)
            const data = await response.json();

            if (data) {
                setImage(data)
                setLoading(false)
            }
        }
        catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url])

    console.log(images);

    if (loading) {
        return <div>Loading data plz wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error Occured ! {errorMsg}</div>
    }
    
    const handleNext = () => {
        SetCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    const handlePrevios = () => {
        SetCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    return (
        <div className='container'>
            <BsArrowUpLeftCircleFill className='arrow-left' onClick={handlePrevios} />
            {images && images.length ?
                images.map((imagesItem, index) => (
                    <img
                        key={imagesItem.id}
                        alt={imagesItem.download_url}
                        src={imagesItem.download_url}
                        className={index === currentSlide ? 'current-image' : "current-image hide-current-image"}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    />
                ))
                : null
            }
            <BsArrowUpRightCircleFill className='arrow-right' onClick={handleNext} />
            <span className='circle-indicator'>
                {
                    images && images.length ?
                        images.map((_, index) => <button
                            key={index}
                            className={currentSlide === index ? 
                            "currrent-indicator" 
                            : 'currrent-indicator inactive-indicator'}
                            onClick={()=>SetCurrentSlide(index)}>
                        </button>)
                        : null
                }
            </span>
        </div>
    )
}