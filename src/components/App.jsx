import Section from './Phonebook/Section';

export const App = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
                paddingTop: '40px',
            }}
        >
            <Section title="Phonebook" />
        </div>
    );
};
