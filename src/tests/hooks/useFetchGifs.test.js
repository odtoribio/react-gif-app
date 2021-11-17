import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test useFetchGifs hook', () => {

  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one punch'))
    const { data, loading } = result.current;

    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBeTruthy()
  })

  test('should return images array and loading in false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one punch'))
    await waitForNextUpdate()
    const {data, loading } = result.current;

    expect(data.length).toBe(10)
    expect(loading).toBeFalsy()
  })
  
})
