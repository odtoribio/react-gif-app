import React from 'react'
import {shallow} from 'enzyme'
import {GifItem} from '../../components/GifItem'
describe("Test Gif Item component",() => {
  
  const gif = {url:'http://theurl.com', title:'title'}
  const GifItemComponent = shallow(<GifItem title={gif.title} url={gif.url}/>)
  test('should render GifItem component', () => {

    expect(GifItemComponent).toMatchSnapshot()
  })

  test('should has a paragraph with title', () => {
    const paragraph = GifItemComponent.find('p')
    expect(paragraph.text().trim()).toBe(gif.title);
  })
  
  test('should have image url and image alt text', () => {
    const img = GifItemComponent.find('img');

    expect(img.prop('src')).toBe(gif.url);
    expect(img.prop('alt')).toBe(gif.title);
  })
  
  test('should have classname animate__zoomIn', () => {
    const div = GifItemComponent.find('div');

    const className = div.prop('className')
    expect(className.includes('animate__zoomIn')).toBe(true);
  })
  
})