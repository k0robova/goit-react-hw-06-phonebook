import { createStore } from 'redux';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'addContact') {
    return { ...state, contacts: [...state.contacts, action.payload] };
  }

  if (action.type === 'deleteContact') {
    return {
      ...state,
      contacts: state.contacts.filter(el => el.id !== action.payload),
    };
  }

  if (action.type === 'filter') {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};

export const store = createStore(reducer);
// console.log(store.getState());

// store.dispatch({ type: 'addContact', payload: 'Alona' });
