import { GiffApp } from '../GiffApp'
import { shallow } from 'enzyme'

describe('Test GiffApp component', () => {

  test('should render GiffApp component', () => {
    const GiffAppComponent = shallow(<GiffApp />);
    expect(GiffAppComponent).toMatchSnapshot()
  })

  test('should render a list of categories', () => {
    const categories = ['one punch, goku']
    const GiffAppComponent = shallow(<GiffApp defaultCategories={ categories } />);

    expect(GiffAppComponent).toMatchSnapshot()
    expect(GiffAppComponent.find('GiffGrid').length).toBe(categories.length)
  })
  
})

