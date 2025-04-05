import { fireEvent, render,screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategories';
import React  from "react";
describe('',()=>{
    test('', ()=>{
        render(<AddCategory onNewCategorie={() =>{}}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement
        fireEvent.input(input, { target: { value: 'bleach' } });
        expect(input.value).toBe('bleach')
    })
    test('',() =>{
        const inputValue = 'Bleach'
        const onNewCategorie = jest.fn();
        render(<AddCategory onNewCategorie={onNewCategorie}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        screen.debug()
        expect(input.value).toBe('')
        expect(onNewCategorie).toHaveBeenCalled();
        expect(onNewCategorie).toHaveBeenCalledTimes(1);
        expect(onNewCategorie).toHaveBeenCalledWith(inputValue)
    })
    test('',()=>{
        const onNewCategorie = jest.fn();
        render(<AddCategory onNewCategorie={onNewCategorie}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);
        expect(onNewCategorie).toHaveBeenCalledTimes(0)
    })
})