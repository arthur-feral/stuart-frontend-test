import reducer from './reducer';
import { domLoaded } from './actions';

describe('App reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined)).toEqual({
      domLoaded: false,
    });
  });

  describe('DOM_LOADED', () => {
    it('should update domLoaded prop', () => {
      expect(reducer({
        domLoaded: false,
      }, domLoaded())).toEqual({
        domLoaded: true,
      });
    });
  });
});
