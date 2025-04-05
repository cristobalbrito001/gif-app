import React from 'react'
import { render,screen } from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGif } from '../../src/hooks/useFetchGif';
import { GifImage } from '../../src/helpers/getGif';


jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockImplementation(() => Promise.resolve({ isConfirmed: true }))
}));

jest.mock('../../src/hooks/useFetchGif');

describe('',()=>{
    const category = 'bleach'
    test('',()=>{

        (useFetchGif as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>)
        screen.debug()
        expect(screen.getByText(category)).toBeTruthy();

    })

    test('',()=>{
        const gifs: GifImage[] = [
            {
                id: 'asdasdas', 
                images: {
                    original: {
                        url: 'asdasdasd',
                    },
                },
                title: 'asdsalkdjhasjkld'
            },
            {
                id: 'asdkjlfhkladsj', 
                images: {
                    original: {
                        url: 'kjwernjkerw',
                    },
                },
                title: 'asdsalkdj'
            }
        ];
        (useFetchGif as jest.Mock).mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)

    });
        
    


})