import { shallow } from 'enzyme'
import { GiffGrid } from '../../components/GiffGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe( 'Test GiffGrid component', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render the component', () => {

    useFetchGifs.mockReturnValue({
      data:[],
      loading: true
    });

    const GiffGridComponent = shallow(<GiffGrid category="One Punch" />);

    expect(GiffGridComponent).toMatchSnapshot()
  })
  
  test('should show items when images load with useFetchGif', () => {

    const gifs = [{
      id:"ABC",
      url:"http://test.com/image.jpg",
      title:"title"
    }]
    
    useFetchGifs.mockReturnValue({
      data:gifs,
      loading: false
    });

    const GiffGridComponent = shallow(<GiffGrid category="One Punch" />);
    expect(GiffGridComponent.find('p').exists()).toBe(false)
    expect(GiffGridComponent.find('GifItem').length).toBe(gifs.length)
  })
  
})
