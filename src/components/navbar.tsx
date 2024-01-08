import { MdOutlineClose } from "react-icons/md";
export default function Navbar() {
    return (
        <div className="sticky top-0 left-0 flex items-center justify-between w-full h-12 bg-black">
            <h1 className="text-white text-2xl ml-5">ICharacter 3D character</h1>
            <div className="mr-5 text-xl text-white">
                <MdOutlineClose />
            </div>
        </div>
    )
}