
'use client';

import { Button, Checkbox, Label, Modal, TextInput, Dropdown } from 'flowbite-react';
import { MdEdit } from "react-icons/md";
import { useState } from 'react';

export default function EditDilouge({item, updateData}) {
    console.log(item)
    function generateRandomNumber() {
        return Math.floor(Math.random() * 9000) + 1000;
      }

    const [openModal, setOpenModal] = useState(false);
    const [todo, setTodo] = useState(item);

    function onCloseModal() {
        setOpenModal(false);
    }

    const handleSubmit = () => {
        console.log(todo)
        updateData(todo);
        setOpenModal(false);
    }

    return (
        <>
            <span className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center" onClick={() => setOpenModal(true)}>
                
                <MdEdit />
            </span>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup className='bg-zinc-900/90'>
                <Modal.Header className='bg-zinc-900/90' />
                <Modal.Body className='bg-zinc-900/90'>
                    <div className="space-y-6  text-white">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div className='m-2 p-2'>
                            <TextInput
                                id="bedge"
                                placeholder="Work , Gym , Study, etc..."
                                value={todo.bedge}
                                onChange={(event) => setTodo({ ...todo, bedge: event.target.value })}
                                required
                                className='p-5'
                            />
                            <TextInput
                                id="desc"
                                placeholder="Enter description here...."
                                value={todo.desc}
                                onChange={(event) => setTodo({ ...todo, desc: event.target.value })}
                                required
                                className='p-5'
                            />
                            <div className='p-5'>
                            <Dropdown outline gradientDuoTone="tealToLime" label={todo.tagTitle}>
                                <Dropdown.Item onClick={() => setTodo({...todo, tagTitle : 'Priority Level-1', tagColor : 'red'})}>Priority Level-1</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTodo({...todo, tagTitle : 'Priority Level-2', tagColor : 'green'})}>Priority Level-2</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTodo({...todo, tagTitle : 'Priority Level-3', tagColor : 'blue'})}>Priority Level-3</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTodo({...todo, tagTitle : 'Priority Level-4', tagColor : 'purple'})}>Priority Level-4</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTodo({...todo, tagTitle : 'Priority Level-5', tagColor : 'pink'})}>Priority Level-5</Dropdown.Item>
                            </Dropdown>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse">
                            <Button outline gradientDuoTone="tealToLime" onClick={handleSubmit}>Update Todo</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
