import React, { useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action">
        <Link to={`/contacts/edit/${id}`}>
          {/* <span className="material-icons mr-2">edit</span> */}
          <Button variant="success" onClick={handleShow}>
            Edit
          </Button>{" "}
        </Link>
        {/* <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span> */}
        <Button variant="danger" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

function handleShow() {}
// function Example() {//   const [show, setShow] = useState(false);//   const handleClose = () => setShow(false);//   const handleShow = () => setShow(true);//   return (//     <>//       <Button variant="primary" onClick={handleShow}>//         Launch static backdrop modal//       </Button>//       <Modal//         show={show}//         onHide={handleClose}//         backdrop="static"//         keyboard={false}//       >//         <Modal.Header closeButton>//           <Modal.Title>Modal title</Modal.Title>//         </Modal.Header>//         <Modal.Body>//           I will not close if you click outside me. Don't even try to press//           escape key.//         </Modal.Body>//         <Modal.Footer>//           <Button variant="secondary" onClick={handleClose}>//             Close//           </Button>//           <Button variant="primary">Understood</Button>//         </Modal.Footer>//       </Modal>//     </>//   );// }// // render(<Example />);
export default Contact;
