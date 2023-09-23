import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonAdd, InputForm, LabelInput, PhonebookForm } from './Form.styled';

const INITIAL_STATE = {
    name: '',
    number: '',
};

export const Form = ({ handleAddContact }) => {
    const [name, setName] = useState(INITIAL_STATE.name);
    const [number, setNumber] = useState(INITIAL_STATE.number);

    const handleInput = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;
            // no default
        }
    };

    const addContact = e => {
        e.preventDefault();
        handleAddContact({ name, number });
        resetForm();
    };

    const resetForm = () => {
        setName(INITIAL_STATE.name);
        setNumber(INITIAL_STATE.number);
    };

    return (
        <PhonebookForm onSubmit={addContact}>
            <LabelInput htmlFor="name">Name</LabelInput>
            <InputForm
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleInput}
                id="name"
                placeholder="🙍‍♂️   Alex Smith"
            />

            <LabelInput htmlFor="number">Number</LabelInput>
            <InputForm
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleInput}
                id="number"
                placeholder="📞   222-22-22"
            />

            <ButtonAdd type="submit">➕ Add contact</ButtonAdd>
        </PhonebookForm>
    );
};

Form.propTypes = {
    handleAddContact: PropTypes.func.isRequired,
};

export default Form;
