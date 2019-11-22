import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { FormState } from './types';
import { RootState } from '../types';

export const state: FormState = {
  value: '',
};

const namespaced: boolean = true;

export const form: Module<FormState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
