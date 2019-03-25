import {
  addressFieldChanged,
  createJobRequest,
} from './actions';

describe('Router actions', () => {
  describe('addressFieldChanged', () => {
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

  describe('createJobRequest', () => {
    it('should have proper payload', () => {
      expect(createJobRequest()).toEqual({
        type: 'ROUTER_CREATE_JOB_REQUEST',
      });
    });
  });
});
