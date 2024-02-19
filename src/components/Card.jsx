/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"
import { Badge } from 'flowbite-react';
import EditDilouge from "./EditDilogue";




const Card = ({ item, referance,  deletePost, updateData }) => {

    const bgColor = `bg-${item.tagColor}-600`

    return (
        <motion.div drag dragConstraints={referance} whileDrag={{scale : 1.2}} dragElastic={0.1} className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden">
            <div className="flex items-center justify-between">
                <Badge color="gray" className="flex justify-center items-center w-min">{item.bedge}</Badge>
                <span className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center" onClick={()=>(deletePost(item.id))}>
                    <IoClose size='0.8em' color="#fff"/>
                </span>
            </div>
            <p className="text-sm leading-tight mt-5 font-semibold">{item.desc}</p>
            <div className="footer absolute bottom-0 w-full  left-0 ">
                <div className="flex flex-row-reverse items-center py-3 justify-between px-8  mb-3">
                    <EditDilouge item={item} updateData={updateData}/>
                </div>
                    <div className={`tag w-full py-4 ${bgColor} flex items-center justify-center`}>
                        <h3 className="text-sm font-semibold flex items-center justify-center">{item.tagTitle}</h3>
                    </div>
            </div>
        </motion.div>
    )
}
export default Card