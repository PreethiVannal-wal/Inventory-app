import {Col, CardGroup, Card, CardImg, CardBody, CardTitle, CardText,Button} from 'reactstrap';
import {useState} from 'react';
import UpdateForm from './UpdateForm';
import './style.css';
const ItemCard = ({id, name, quantity, imageUrl,onDeleting, updateItem}) => {

    const [updateFormOpen, setUpdateFormOpen] = useState(false);

    const deleteItem = () => {
        onDeleting(id);
    }

    const EditingItem = () =>{
        setUpdateFormOpen(true);
    }
    const updatingItem = (title, quantity) => {
        updateItem(id,title, quantity);
        setUpdateFormOpen(false);
    }
    return(
        <Col>
            <Card className="item-card">
                <CardImg
                    className="item-image"
                    alt={name}
                    src={imageUrl}
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h4">
                        {name}
                    </CardTitle>
                    <CardText>
                        Stock Available: {quantity}
                    </CardText>
                    <Button onClick = {EditingItem}>Update</Button>
                    <Button onClick = {deleteItem}>Delete</Button>
                </CardBody>
            </Card>
            {updateFormOpen && (
                <UpdateForm name ={name} quantity = {quantity} onUpdate={updatingItem}/>
            )}
        </Col>
    );
}
export default ItemCard;