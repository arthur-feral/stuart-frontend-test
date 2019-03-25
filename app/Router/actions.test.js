import {
  addressFieldChanged,
} from './actions';

describe('Router actions', () => {
  describe('fromFieldChanged', () => {
    it('should have proper payload', () => {
      expect(addressFieldChanged('pickUp', 'an address')).toEqual({
        type: 'ROUTER_ADDRESS_FIELD_CHANGED',
        payload: {
          type: 'pickUp',
          address: 'an address',
        },
      });
    });
  });
});
