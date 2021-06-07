

// This is the image component 
const ImageButton  =(props) => {
    return (
        <>
            <button className="btn" onClick={props.resizeImage}>{props.children}</button>
        </>
    )
}

export default ImageButton