import getCountryData from '../../stacks/getCountryData';
import generateRestCountries from '.';

test('get all countries in the world using restcountries.com', async () => {

  const response = await getCountryData()
  expect(response[0].name).toContain('Afghanistan');
});