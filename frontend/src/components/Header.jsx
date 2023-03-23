
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#97D9E1] to=[#D9AFD9]">
            {/* container */}
            <div className="container mx-auto max-x-5xl px-2 py-6">
                {/* Logo */}
                <p className="block font-bold text-xl font-opensans">Genie
                <span className="text-primary">ART</span></p>
                {/* Tagline */}
                <div className="mt-14">
                    <h2 className="font-bold text-xl max-w-ws mb-1">Make some cool images</h2>
                    <p className="font-light opacity-80 hidden md:inline-block">Created with generative AI</p>
                    {/* form */}
                    <form className="relative my-8 bg-red-500 max-w-md">
                        <input 
                            className="indent-2 py-4 pr-[4.5rem] rounded-sm 
                                 w-full md:max-w-md 
                                focus:ring-primary outline-none focus:ring-1" 
                            type="text" 
                            placeholder="Create some cool stuff"/>
                        <button>
                            <ArrowLongRightIcon 
                                className='h-6 absolute bottom-2.5 right-2.5 bg-primary text-white rounded-sm text-sm px-2 py-2'
                            /> 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header