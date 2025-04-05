import { GifImage, getGifs } from '../../src/helpers/getGif'
import { GifApiResponse } from '../../src/helpers/getGif'

describe('',() => {
    test('',async () => {
        const gifs = await getGifs('bleach')
        console.log(gifs)
        expect(gifs.length).toBe(20)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            images: {
                original: {
                    url: expect.any(String),
                },
                },
            title: expect.any(String)
        })
    })
})