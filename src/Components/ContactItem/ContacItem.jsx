import { Component } from "react";

class ContactItem extends Component {
    render() {
        const {contact,handleDelite} = this.props
        return (
            <li>
                <p>{contact.name}</p>
                <p>{contact.telefon}</p>
                <button type="button" onClick={()=>handleDelite(contact.id)}>Delite</button>
            </li>
        )
    }
}

export default ContactItem