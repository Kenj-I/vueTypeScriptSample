import { GetterTree } from 'vuex';
import { FormState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<FormState, RootState> = {
  value(state): String {
    return 'Submitted value is ' + state.value;
  },
};
