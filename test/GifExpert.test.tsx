import{GifExpertApp} from '../src/GifExpert'
import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react'

jest.mock('sweetalert2', () => ({
    fire: jest.fn().mockImplementation(() => Promise.resolve({ isConfirmed: true }))
  }));
describe('Pruebas en <GifExpertApp />', () => {
    test('debe agregar una nueva categoría cuando se envía desde AddCategory', () => {
        render(<GifExpertApp />);
      
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Naruto' } });
        const form = screen.getByRole('form')
        fireEvent.submit(form);
        expect(screen.getByText('Naruto')).toBeTruthy();
    });
    test('',()=>{
        render(<GifExpertApp />);
      
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Bleach' } });
        const form = screen.getByRole('form')
        fireEvent.submit(form);
         expect(screen.getAllByText(/bleach/i).length).toBe(1)
    })
   
  });