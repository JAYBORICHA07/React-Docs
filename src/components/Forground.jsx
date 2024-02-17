import Card from "./Card"

const Forground = () => {

    const data = [
        {
            desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
            fileSize : '4 Mb',
            close : false,
            tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'green'},
        },
        {
            desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
            fileSize : '4 Mb',
            close : false,
            tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'green'},
        },
        {
            desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ullam unde debitis officia.',
            fileSize : '4 Mb',
            close : false,
            tag : {isOpen : true, tagTitle : 'Download Now!', tagColor : 'green'},
        },
    ]

  return (
    <div className="fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
            <Card key={index} item={item} />
        ))}
    </div>
  )
}

export default Forground