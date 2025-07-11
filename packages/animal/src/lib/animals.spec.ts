import { animal } from './animals.js';

describe('animals', () => {
  it('should work', () => {
    expect(animal()).toEqual('animal');
  })
})
