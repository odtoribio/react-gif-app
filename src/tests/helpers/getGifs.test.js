import {getGifs} from '../../helpers/getGifs'
describe('Test getGif helper', () => {

  test('should should return 10 elements', async() => {
    const gifs = await getGifs('goku');
    expect(gifs.length).toBe(10)
  })

  test('should should return 0 elements', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0)
  })
  
})
