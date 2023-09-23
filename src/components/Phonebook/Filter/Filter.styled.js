import { styled } from 'styled-components';

export const LabelSearchInput = styled('label')(() => ({
    color: '#171819',
    display: 'block',
    fontSize: '20px',
    fontWeight: '600',
}));

export const FilterField = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '40px',
}));
