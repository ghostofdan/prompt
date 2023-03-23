
import { PhotoIcon } from '@heroicons/react/24/outline'

const Skeleton = ({ item }) => {
    return [...Array(item).keys()].map(() => {
        <div className="animate-plus w-full">
            <div className="flex items-center justify-center w-full h-80 rounded">
                <PhotoIcon className='w-12' />
            </div>
        </div>

    })
    
}

export default Skeleton;