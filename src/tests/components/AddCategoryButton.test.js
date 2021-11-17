import React from 'react';
import {shallow} from 'enzyme';
import { AddCategoryButton } from '../../components/AddCategoryButton';

describe('Test AddCategoryButton component', () => {

  const addCategory = jest.fn()
  let  AddCategoryButtonComponent = shallow(<AddCategoryButton addCategory={addCategory} />)

  beforeEach( () => {
    jest.clearAllMocks()
    AddCategoryButtonComponent = shallow(<AddCategoryButton addCategory={addCategory} />)
  })

  test('should show component correctly', () => {
    expect(AddCategoryButtonComponent).toMatchSnapshot()
  })

  test('should change input text', () => {

    const textInput = AddCategoryButtonComponent.find('input');
    textInput.simulate('change', { target: { value: "Hola mundo"}})
    
  })

  test('should not post the information on submit', () => {

    AddCategoryButtonComponent.find('form').simulate('submit', { preventDefault: () => {}})
    expect(addCategory).not.toHaveBeenCalled()

  })

  test('should call addCategory and clean the text input', () => {
    
    const input = AddCategoryButtonComponent.find('input').simulate('change', { target: { value: "Test input" } })
    AddCategoryButtonComponent.find('form').simulate('submit', { preventDefault: () => {}})
    const inputValue = input.prop('value');

    expect(addCategory).toHaveBeenCalled();
    expect(inputValue).toBe('');

  })
  
})
