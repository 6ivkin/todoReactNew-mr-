import ky from 'ky'

export const httpClient = ky.create({
  prefixUrl: 'http://jsonplaceholder.typicode.com',
});
