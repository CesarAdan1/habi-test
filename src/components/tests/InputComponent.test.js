import { render, screen } from '@testing-library/react';
import React from 'react';
import InputComponent, { Dropdown } from '../InputComponent';

test('', () => {
    const inputComponent = {
        checked: true,
        htmlFor: 'This is a test',
        label: 'Escribir',
        message: 'Messages',
        type: 'text',

    }

    const component = render(<InputComponent  />)
    component.getByText('This is a test')
})

test('', () => {
    const dropDown = {
        options: {},
        htmlFor: 'This is a test',
        label: 'Escribir',
        message: 'Messages',
        value: "email"
    }
})