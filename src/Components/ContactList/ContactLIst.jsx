import { Component } from "react";
import ContactItem from "../ContactItem/ContacItem";


class ContactList extends Component {
    render() {
        const { contacts,handleDelite } = this.props
        return (
            <ul>
                {contacts.map((contact) => {
                    return (
                        <ContactItem key={contact.id} contact={contact} handleDelite={handleDelite}/>
                    )
                })}
            </ul>
        )
    }
}

export default ContactList