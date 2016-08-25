import { createStore } from 'redux';
import CombinedReducer from '../reducers/index_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = () => {
  return createStore(
    CombinedReducer,
    MasterMiddleware
  );
};

export default configureStore;
