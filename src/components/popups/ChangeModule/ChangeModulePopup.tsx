
import Modal from 'react-modal';
import { ArrowRight } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import TextInput from '../../inputs/TextInput/TextInput';
import Button from '../../inputs/Button/Button';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
      border: 'none',
      borderRadius: '20px',
      boxShadow: '0px 0px 50px rgba(192, 218, 255, 0.884)',
      
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  };



function ChangeModulePopup(props : {isOpen : boolean, setIsOpen : React.Dispatch<boolean>, moduleIndex : number}) 
{
    return (

        <Modal isOpen={props.isOpen} onRequestClose={close} style={customStyles} closeTimeoutMS={0}>

            <div className='w-full'>
            <TextInput placeholder='Название модуля'/>
            </div>
            <div className=' mt-6 w-full'>

            <TextInput placeholder='Число часов'/>
            </div>           

            <div className='w-full flex justify-end gap-6 mt-6'>
            
            <div>
                <Button onClick={() => {props.setIsOpen(false); }} text='Сохранить'/>
             </div>


             <div>
                <Button onClick={() => {props.setIsOpen(false)}} text='Отменить'/>
             </div>

            </div>

        </Modal>

    );
}

export default ChangeModulePopup;