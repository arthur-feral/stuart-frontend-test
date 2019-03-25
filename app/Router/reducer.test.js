import reducer from './reducer';
import {
  createJobFailed,
  createJobRequested, createJobSucceeded,
  fromFieldChanged,
  toFieldChanged,
} from './actions';

const initialState = {
  from: '',
  pickUp: null,
  fromInvalid: false,
  to: '',
  dropOff: null,
  toInvalid: false,
  isCreating: false,
};
describe('Router reducer', () => {
  it('should have an initial state', () => {
    expect(reducer(undefined)).toEqual(initialState);
  });

  describe('ROUTER_FROM_FIELD_CHANGED', () => {
    it('should update from prop', () => {
      expect(reducer(initialState, fromFieldChanged('an address'))).toEqual({
        ...initialState,
        from: 'an address',
      });
    });
  });

  describe('ROUTER_TO_FIELD_CHANGED', () => {
    it('should update to prop', () => {
      expect(reducer(initialState, toFieldChanged('an address'))).toEqual({
        ...initialState,
        to: 'an address',
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
