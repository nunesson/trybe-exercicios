const Redux = require('redux');

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email
});

const ESTADO_INICIAL = { // prevState
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email
      };

    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
  };
  
  const store = Redux.createStore(reducer);

  store.dispatch(fazerLogin('nunesson@gmail.com'))

  console.log(store); 
  console.log(store.getState());
  