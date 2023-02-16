import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value);
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...state });
  };

  return { state, handleSubmit, handleChange };
};

export default useForm;
