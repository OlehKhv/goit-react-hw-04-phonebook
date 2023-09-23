import { styled } from 'styled-components';

export const SecondTitle = styled('h3')(() => ({
    color: '#171819',
    marginBottom: '20px',
    textAlign: 'center',
}));

export const NotificationText = styled('h4')(() => ({
    color: '#424D55',
    textAlign: 'center',
    opacity: '0.6',
}));

export const ContactItem = styled('li')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
}));

export const ContactText = styled('p')(() => ({
    color: '#171819',
    fontSize: '20px',
    fontWeight: '600',
}));

export const DeleteButton = styled('button')`
    font-size: 12px;
    border: 1px solid #171819;
    border-radius: 8px;
    padding: 8px 12px;
    &:is(:hover, :focus) {
        color: red;
        border-color: red;
    }
`;

export const ClearButton = styled('button')`
    font-size: 12px;
    &:is(:hover, :focus) {
        color: red;
    }
`;
