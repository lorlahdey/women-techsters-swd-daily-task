import ImageButton from './imageButtonComponent'

// props destructuring
const Images =({url, newWidth, newHeight, imageSizeUp, imageSizeDown }) => {
    return (
        <div className="container">
            <p>
                These buttons below when click will increase or decrease the sizes of the images by 20%
            </p>

            <img src={url} alt="random-images" height={newHeight} width={newWidth} />
            <div>
                <ImageButton resizeImage={imageSizeUp}> Increase Size </ImageButton>
                <ImageButton resizeImage={imageSizeDown}> Decrease Size </ImageButton>
            </div>
            
        </div>
    )
}

export default Images