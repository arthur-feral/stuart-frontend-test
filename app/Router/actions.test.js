import {
  fromFieldChanged,
  toFieldChanged,
} from './actions';

describe('Router actions', () => {
  describe('fromFieldChanged', () => {
    it('should have proper payload', () => {
      expect(fromFieldChanged('an address')).toEqual({
        type: 'ROUTER_FROM_FIELD_CHANGED',
        payload: {
          from: 'an address',
        },
      });
    });
  });

  describe('toFieldChanged', () => {
    it('should have proper payload', () => {
      expect(toFieldChanged('an address')).toEqual({
        type: 'ROUTER_TO_FIELD_CHANGED',
        payload: {
          to: 'an address',
        },
      });
    });
  });
});
