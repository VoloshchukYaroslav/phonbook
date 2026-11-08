import './App.css'
import { Component } from 'react'
import ContactList from './Components/ContactList/ContactLIst'
import FilterContact from './Components/FilterContact/FilterContact'





class App extends Component {

  state = {
    contacts: [{ id: 1, name: "Олексій Коваленко", telefon: "+380501234567" },
    { id: 2, name: "Марія Шевченко", telefon: "+380671234568" },
    { id: 3, name: "Андрій Бондаренко", telefon: "+380931234569" },
    { id: 4, name: "Ірина Мельник", telefon: "+380991234570" },
    { id: 5, name: "Дмитро Ткаченко", telefon: "+380631234571" }],
    filter: ""
  }

  handleDelite = (id) => {
    this.setState((prevstate) => {
      return {
        contacts: prevstate.contacts.filter((contact) => contact.id !== id)
      }
    })
  }

  handleFilter = (text) => {
    this.setState({
      filter: text
    })
  }

  render() {
    const { contacts, filter } = this.state
    const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    console.log(filteredContact);

    return (
      <>
        <FilterContact handleFilter={this.handleFilter} />
        {filteredContact.length > 0 ? (<ContactList contacts={filteredContact} handleDelite={this.handleDelite} />) : (<p>Немає контактів</p>)}
      </>
    )
  }
}

export default App