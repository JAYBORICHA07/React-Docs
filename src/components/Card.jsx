/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"


const Card = ({ item, referance }) => {

    const bgColor = `bg-${item.tag.tagColor}-600`
    console.log(bgColor);

    return (
        <motion.div drag dragConstraints={referance} whileDrag={{scale : 1.2}} dragElastic={0.1} className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden">
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">{item.desc}</p>
            <div className="footer absolute bottom-0 w-full  left-0 ">
                <div className="flex items-center py-3 justify-between px-8  mb-3">
                    <h5>{item.fileSize}</h5>
                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                        {
                            item.close ? <IoClose size='0.8em' color="#fff" /> : <LuDownload size='0.8em' color="#fff" />
                        }
                    </span>
                </div>
                {
                    item.tag.isOpen &&
                    <div className={`tag w-full py-4 ${bgColor} flex items-center justify-center`}>
                        <h3 className="text-sm font-semibold flex items-center justify-center">{item.tag.tagTitle}</h3>
                    </div>
                }

            </div>
        </motion.div>
    )
}
export default Card