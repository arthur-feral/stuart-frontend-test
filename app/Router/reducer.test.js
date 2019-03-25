import reducer from './reducer';
import {
  createJobFailed,
  createJobRequested, createJobSucceeded,
  addressFieldChanged,
} from './actions';

const initialState = {
  from: '',
  pickUp: null,
  fromInvalid: true,
  to: '',
  dropOff: null,
  toInvalid: true,
  isCreating: false,
};
describe('Router reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined)).toEqual(initialState);
  });

  describe('ROUTER_ADDRESS_FIELD_CHANGED', () => {
    it('should update from prop', () => {
      expect(reducer(initialState, addressFieldChanged('pickUp', 'an address'))).toEqual({
        ...initialState,
        from: 'an address',
      });
    });
  });

  describe('ROUTER_CREATE_JOB_REQUESTED', () => {
    it('should update isCreating prop', () => {
      expect(reducer(initialState, createJobRequested())).toEqual({
        ...initialState,
        isCreating: true,
      });
    });
  });

  describe('ROUTER_CREATE_JOB_SUCCEEDED|ROUTER_CREATE_JOB_SUCCEEDED', () => {
    it('should update isCreating prop', () => {
      expect(reducer({
        ...initialState,
        isCreating: true,
      }, createJobSucceeded())).toEqual({
        ...initialState,
        isCreating: false,
      });

      expect(reducer({
        ...initialState,
        isCreating: true,
      }, createJobFailed())).toEqual({
        ...initialState,
        isCreating: false,
      });
    });
  });
});
