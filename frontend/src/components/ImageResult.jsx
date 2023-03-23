
import ImageCard from './ImageCard';
import Skeleton from './Skeleton'

const ImageResults = () => {
    const isLoading = false;
    const data = [
        {
            "url": "https://via.placeholder.com/600/92c952",
        },
        {
        "url": "https://via.placeholder.com/600/771796",
        },
    ]
    return (
        <div className="container max-w-5xl mx-auto px-2 py-6">
            <div className='grid md:grid-cols-2 gap-4'>
                {isLoading ? <Skeleton item={2}/> : data.map((image, index) => 
                    <ImageCard  key={index} image={image.url}/>
                )}
                
            </div>
        </div>
    )
}

export default ImageResults