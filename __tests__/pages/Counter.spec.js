import Counter from '../../pages/Counter';


describe('Testing counter page', () => {
    it('renders the component correctly', () => {
      renderWithRedux(<Counter />)
    })

    it('Should start with the current count of 0', () => {
      const { getByText } = renderWithRedux(<Counter />);

      const count = getByText("0");

      expect(count).not.toBeNull();
    })
})