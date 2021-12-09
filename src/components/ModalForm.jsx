import { useState } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
const ModalForm = ({onAdding}) => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const prop_name = e.target.name;
        const prop_value = e.target.value;
        setInputs( values => ({...values, [prop_name] : prop_value}));
    }

    const postItem = (e) => {
        e.preventDefault();
        onAdding(inputs.Title, inputs.imageUrl, inputs.quantity);
    }
    return(
        <Modal isOpen>
        <ModalHeader className="form-heading">Add your item in a cart</ModalHeader>
        <ModalBody>
            <form onSubmit = {postItem}>
                <div className="inputs">
                    <label>Enter a title
                        <input type="text" name="Title" value={inputs.Title || ""} onChange={handleChange}/>
                    </label>
                    <label>Enter a image url
                        <input type="text" name="imageUrl" value={inputs.imageUrl || ""} onChange={handleChange} />
                    </label>
                    <label>Quantity
                        <input type="text" name="quantity" value={inputs.quantity || ""} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </ModalBody>
    </Modal>
    )
}
export default ModalForm;