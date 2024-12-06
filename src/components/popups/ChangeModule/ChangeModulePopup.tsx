
import Modal from 'react-modal';
import { ArrowRight } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import TextInput from '../../inputs/TextInput/TextInput';
import Button from '../../inputs/Button/Button';
import useStore from '../../../store/store';

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


    const {generatedCourse, setGeneratedCourse} = useStore();


    const module = generatedCourse?.modules[props.moduleIndex]
    const moduleTitle = module?.moduleTitle
    const moduleDuration = module?.durationHours
    const moduleDescription = module?.moduleDescription






    const [newModuleTitle, setNewNoduleTitle] = useState<string | undefined>(moduleTitle)
    const [newModuleDuration, setNewModuleDuration] = useState<number | undefined>(moduleDuration)
    const [newModuleDescription, setNewModuleDescription] = useState<string | undefined>(moduleDescription)





    const saveChanges = () => {

        const newCourse = generatedCourse
        if (newCourse === null || newCourse === undefined ||
            newModuleDuration === undefined || newModuleDescription === undefined ||
            newModuleTitle === undefined || newModuleTitle === ''  ||
            newModuleDescription === undefined 
        ) return;


        newCourse.modules[props.moduleIndex].moduleTitle = newModuleTitle
        newCourse.modules[props.moduleIndex].durationHours = newModuleDuration
        newCourse.modules[props.moduleIndex].durationHours = newModuleDuration


        setGeneratedCourse(newCourse)

    }
    
    return (

        <Modal isOpen={props.isOpen} onRequestClose={close} style={customStyles} closeTimeoutMS={0}>

            <div className='w-full'>
                <TextInput onChange={(e : ChangeEvent<HTMLInputElement>) => {setNewNoduleTitle(e.target.value)}} placeholder='Название модуля'/>
            </div>
            
            <div className=' mt-6 w-full'>
                <TextInput type="number" onChange={(e : ChangeEvent<HTMLInputElement>) => {setNewModuleDuration(Number(e.target.value))}} placeholder='Число часов'/>
            </div>


                        
            <div className=' mt-6 w-full'>
                <TextInput onChange={(e : ChangeEvent<HTMLInputElement>) => {setNewModuleDescription(e.target.value)}} placeholder='Описание'/>
            </div>

            <div className='w-full flex justify-end gap-6 mt-6'>
            
            <div>
                <Button generating={false} onClick={() => {props.setIsOpen(false); saveChanges()}} text='Сохранить'/>
             </div>


             <div>
                <Button generating={false} onClick={() => {props.setIsOpen(false)}} text='Отменить'/>
             </div>

            </div>

        </Modal>

    );
}

export default ChangeModulePopup;