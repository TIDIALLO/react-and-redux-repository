import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
    }


    return(
        <div>
            <Button onClick={handleClick} primary >Open Modal</Button>
            {showModal && <Modal/>} ce
            {/* la ligne précédente signifie si showModal===true alors afficher Modal */}
        </div>
    )
}

export default ModalPage;