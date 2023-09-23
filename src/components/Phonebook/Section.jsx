import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { MainTitle } from './Section.styled';

const INITIAL_STATE = {
    contacts: [],
    filter: '',
};
export const Section = () => {
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem('contacts')) ?? INITIAL_STATE.contacts
    );
    const [filter, setFilter] = useState(INITIAL_STATE.filter);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = contact => {
        if (this.state.contacts.some(({ name }) => name === contact.name)) {
            alert(`${contact.name} is already in contacts!`);
            return;
        }

        this.setState(prev => ({
            ...prev,
            contacts: [{ id: nanoid(), ...contact }, ...prev.contacts],
        }));
    };

    const handleDeleteContact = id => {
        this.setState(prev => ({
            contacts: [...prev.contacts].filter(contact => contact.id !== id),
        }));
    };

    const handleFilterContacts = ({ target: { value } }) => {
        this.setState({ filter: value });
    };

    const getFilteredContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const handleDeleteAllContacts = () => {
        this.setState({ ...INITIAL_STATE });
    };

    return (
        <section>
            <MainTitle>{this.props.title}</MainTitle>
            <Form handleAddContact={this.handleAddContact} />
            <Filter handleFilterContacts={this.handleFilterContacts} />
            <Contacts
                contacts={this.getFilteredContacts()}
                handleDeleteContact={this.handleDeleteContact}
                handleDeleteAllContacts={this.handleDeleteAllContacts}
            />
        </section>
    );
};

// export class Section extends Component {
//     state = {
//         ...INITIAL_STATE,
//     };

//     componentDidMount() {
//         if (localStorage.getItem('contacts')) {
//             this.setState({
//                 contacts: JSON.parse(localStorage.getItem('contacts')),
//             });
//         }
//     }

//     componentDidUpdate() {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }

//     handleAddContact = contact => {
//         if (this.state.contacts.some(({ name }) => name === contact.name)) {
//             alert(`${contact.name} is already in contacts!`);
//             return;
//         }

//         this.setState(prev => ({
//             ...prev,
//             contacts: [{ id: nanoid(), ...contact }, ...prev.contacts],
//         }));
//     };

//     handleDeleteContact = id => {
//         this.setState(prev => ({
//             contacts: [...prev.contacts].filter(contact => contact.id !== id),
//         }));
//     };

//     handleFilterContacts = ({ target: { value } }) => {
//         this.setState({ filter: value });
//     };

//     getFilteredContacts = () => {
//         const { contacts, filter } = this.state;

//         return contacts.filter(({ name }) =>
//             name.toLowerCase().includes(filter.toLowerCase())
//         );
//     };

//     handleDeleteAllContacts = () => {
//         this.setState({ ...INITIAL_STATE });
//     };

//     render() {
//         return (
//             <section>
//                 <MainTitle>{this.props.title}</MainTitle>
//                 <Form handleAddContact={this.handleAddContact} />
//                 <Filter handleFilterContacts={this.handleFilterContacts} />
//                 <Contacts
//                     contacts={this.getFilteredContacts()}
//                     handleDeleteContact={this.handleDeleteContact}
//                     handleDeleteAllContacts={this.handleDeleteAllContacts}
//                 />
//             </section>
//         );
//     }
// }

Section.propTypes = { title: PropTypes.string.isRequired };

export default Section;
