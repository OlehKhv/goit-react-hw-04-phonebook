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

export const Section = ({ title }) => {
    const [contacts, setContacts] = useState(
        () =>
            JSON.parse(localStorage.getItem('contacts')) ??
            INITIAL_STATE.contacts
    );
    const [filter, setFilter] = useState(INITIAL_STATE.filter);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = contact => {
        if (contacts.some(({ name }) => name === contact.name)) {
            alert(`${contact.name} is already in contacts!`);
            return;
        }

        setContacts(prev => [{ id: nanoid(), ...contact }, ...prev]);
    };

    const handleDeleteContact = id => {
        setContacts(prev => {
            console.log([...prev].filter(contact => contact.id !== id));
            return [...prev].filter(contact => contact.id !== id);
        });
    };

    const handleFilterContacts = ({ target: { value } }) => {
        setFilter(value);
    };

    const getFilteredContacts = () => {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const handleDeleteAllContacts = () => {
        setContacts(INITIAL_STATE.contacts);
        setFilter(INITIAL_STATE.filter);
    };

    return (
        <section>
            <MainTitle>{title}</MainTitle>
            <Form handleAddContact={handleAddContact} />
            <Filter handleFilterContacts={handleFilterContacts} />
            <Contacts
                contacts={getFilteredContacts()}
                handleDeleteContact={handleDeleteContact}
                handleDeleteAllContacts={handleDeleteAllContacts}
            />
        </section>
    );
};

Section.propTypes = { title: PropTypes.string.isRequired };

export default Section;
