import{ gif } from '../../gif-app/src/interfaces/gif'
import { GifItem } from '../src/components/GifGridItem'
import { screen, render } from '@testing-library/react';
import React from 'react'
import { ExportClause } from './../node_modules/escodegen/escodegen';
describe('',()=>{
    const git :gif ={
        id:'asasasa',
        images:{
            original:{
                url:'https://media0.giphy.com/media/v1.Y2lkPWE4ZjI5ZjVidDczN3l3MmRycjA5d20zejYwY3VkaTVpdjFrNGRxZmVyYWF2N2NwNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eATt3b9TKBfB2l0z4G/giphy.gif'
            }
        },
        title:'bleach'
    }
    const getContainer = render(<GifItem key={git.id} {...git} />)
    test('',()=>{

        expect(getContainer).toMatchSnapshot()
    })

    test('',()=>{
        render(<GifItem key={git.id} {...git} />)
        const testScreen = screen.getByRole('img');
        expect(testScreen.getAttribute('src')).toContain(git.images.original.url)
        expect(testScreen.getAttribute('alt')).toContain(git.title)
    })

    test('', ()=>{
        render(<GifItem key={git.id} {...git} />)
        expect(screen.getByText(git.title)).toBeTruthy();
    })
})