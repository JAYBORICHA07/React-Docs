import { useRef, useState } from "react"
import Card from "./Card"
import { Button } from 'flowbite-react';



const Forground = () => {


    const ref = useRef(null)

    const [data, setData] = useState([{
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
        id : 1,
        close : false,
        tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'red'},
    },
    {
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
        id : 2,
        close : false,
        tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'green'},
    },
    {
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
        id : 3,
        close : false,
        tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'blue'},
    },
    {
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
        id : 4,
        close : false,
        tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'purple'},
    },
    {
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
        id : 5,
        close : false,
        tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'zinc'},
    }
])

    const addData = (newData) => {
        setData([...data, newData])
    }
    
    const handleDelete = (id) => {
        setData(data.filter((item) => (item.id !== id)))
    }

  return (
    <div ref={ref} className="fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        <Button outline gradientDuoTone="tealToLime" className="w-30 h-10 text-white m-5 overflow-hidden font-bold flex items-center justify-center align-top fixed top-0 right-0" onClick={()=>(addData({
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
        id : 4,
        close : false,
        tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'purple'},
    }))}>Add Notes</Button>
        {data.map((item, index) => (
            <Card key={index} item={item} referance={ref} addData={addData} deletePost={handleDelete}/>
        ))}
    </div>
  )
}

export default Forground