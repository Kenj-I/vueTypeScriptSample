import { ActionTree } from 'vuex';
import { FormState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<FormState, RootState> = {
  setValue({ commit }, value: String): any {
    commit('editValue', value);
  },
};
