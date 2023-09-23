import { styled } from 'styled-components';

export const PhonebookForm = styled('form')(() => ({
    marginBottom: '40px',
    borderBottom: '1px solid #507E52',
}));

export const LabelInput = styled('label')(() => ({
    color: '#171819',
    display: 'block',
    fontSize: '28px',
    fontWeight: '600',
}));

export const InputForm = styled('input')(() => ({
    height: '40px',
    width: '300px',
    border: '1px solid #171819',
    borderRadius: '8px',
    marginBottom: '20px',
    padding: '10px 30px',
}));

export const ButtonAdd = styled('button')`
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 40px;
    border: 1px solid #171819;
    border-radius: 8px;
    font-size: 20px;
    &:is(:hover, :focus) {
        background-color: #57a0ea;
    }
`;
