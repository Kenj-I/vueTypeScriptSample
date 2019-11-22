import { MutationTree } from 'vuex';
import { FormState } from './types';

export const mutations: MutationTree<FormState> = {
  editValue(state, value: String) {
    state.value = value;
  },
};
