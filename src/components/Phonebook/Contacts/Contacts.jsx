import PropTypes from 'prop-types';
import { Notification } from './Notification';
import {
    ClearButton,
    ContactItem,
    ContactText,
    DeleteButton,
    SecondTitle,
} from './Contacts.styled';

export const Contacts = ({
    contacts,
    handleDeleteContact,
    handleDeleteAllContacts,
}) => {
    return (
        <div>
            <SecondTitle>Contacts</SecondTitle>
            {contacts.length ? (
                <>
                    <ClearButton onClick={handleDeleteAllContacts}>
                        ❌ Clear phonebook
                    </ClearButton>
                    <ul>
                        {contacts.map(({ id, name, number }) => {
                            return (
                                <ContactItem key={id}>
                                    <ContactText>
                                        🧑 {name}: {number}
                                    </ContactText>
                                    <DeleteButton
                                        onClick={() => handleDeleteContact(id)}
                                    >
                                        ❌ Delete
                                    </DeleteButton>
                                </ContactItem>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <Notification message="Your phone book is empty!" />
            )}
        </div>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleDeleteAllContacts: PropTypes.func.isRequired,
};

export default Contacts;
