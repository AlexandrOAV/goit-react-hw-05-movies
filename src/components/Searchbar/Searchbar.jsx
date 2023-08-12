import { Form, Field, Formik } from "formik";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  css  from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs'

const Searchbar = () => {
    const navigate = useNavigate();
    console.log('navigate: ', navigate.to);
    

const handleSearch = ( search , actions) => {
    if (search.trim() === '') {
      toast.error('Please enter movie to search');
      return;
    }
    navigate(`movies?query=${search}`);
    actions.resetForm();
  }

    return (<section>
        <div>Movies</div>
      <div className={css.Searchbar}>
            <Formik
          initialValues={{ search: '' }}
          onSubmit={handleSearch}
        >
          <Form className={css.SearchForm}>
            <button type="submit" value='submit' className={css.SearchForm_button}>
              <BsSearch className={css.SearchForm_button_label} />
            </button>
            <Field
              name='serchText'
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
            /> 
          </Form>
        </Formik>
        </div>
        </section>
    )
}
export default Searchbar;