import { useEffect, useRef, useState } from "react"
import Card from "./Card"
import { Button } from 'flowbite-react';
import Dilouge from "./Dilouge";




const Forground = () => {

    const ref = useRef(null)

    const [data, setData] = useState([{
        id: 1,
        desc: 'Go to gym, do 50 pushups, 50 situps, 10km walk, 20 floor climb.',
        tagTitle: 'Priority Level-1',
        tagColor: 'red',
        bedge: 'gym'
    },
    {
        id: 2,
        desc: 'Do 25 sets of "Surya Namaskar" in morning. Perform yoga for a hour and do stretching',
        tagTitle: 'Priority Level-2',
        tagColor: 'green',
        bedge: 'meditation'

    },
    {
        id: 3,
        desc: 'Compelete chapter 5 of Database management system and give a online assesment test for the same and take notes of that',
        tagTitle: 'Priority Level-3',
        tagColor: 'blue',
        bedge: 'studies'

    },
    {
        id: 4,
        desc: 'Eat salad insted of oily food. Eat fruits 2 times a day. Drink 5 litere of water everyday',
        tagTitle: 'Priority Level-4',
        tagColor: 'purple',
        bedge: 'diet'

    },
    {
        id: 5,
        desc: 'Compelete state management in react. Build a project to showcase the same skill and post on socials.',
        close: false,
        tagTitle: 'Priority Level-5',
        tagColor: 'pink',
        bedge: 'coding'

    }
    ])

    const addData = (newData) => {
        setData([...data, newData])
    }

    const handleDelete = (id) => {
        setData(data.filter((item) => (item.id !== id)))
    }

    return (
        <div ref={ref} className="fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5 overflow-scroll " >
            <Dilouge addData={addData}/>
            <div className="flex items-center flex-col md:flex-row gap-5 justify-center">
                {data.map((item, index) => (
                    <Card key={index} item={item} referance={ref} addData={addData} deletePost={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default Forground