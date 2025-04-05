import {useFetchGif} from '../../src/hooks/useFetchGif'
import { render,screen,renderHook,waitFor } from '@testing-library/react';
describe('',()=>{
    test('',()=>{
        const { result } =  renderHook(()=>useFetchGif('bleach'))
        const { images, isLoading }= result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    test('',async()=>{
        const { result } =  renderHook(()=>useFetchGif('bleach'))
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading }= result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})