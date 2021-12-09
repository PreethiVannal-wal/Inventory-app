import { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const UpdateForm = ({onUpdate}) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const prop_name = e.target.name;
        const prop_value = e.target.value;
        setInputs( values => ({...values, [prop_name] : prop_value}));
    }
    const updateItem = (e) => {
        e.preventDefault();
        onUpdate(inputs.title, inputs.quantity);
    }
    return (
        <Modal isOpen>
            <ModalHeader>Update the Item</ModalHeader>
            <ModalBody>
                <form>
                    <label>Enter the title
                        <input type="text" name="title" value={inputs.title || " "} onChange={handleChange}/>
                    </label>
                    <label>No of items available
                        <input type="number" name="quantity" value={inputs.quantity || " "} onChange={handleChange}/>
                    </label>
                </form>
            </ModalBody>
            <ModalFooter>
                <button type="submit" onClick={updateItem}>Update</button>
            </ModalFooter>
        </Modal>
    )
}
export default UpdateForm;