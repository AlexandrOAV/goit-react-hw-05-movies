import { Form, Field, Formik } from "formik";
// import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import  css  from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs'

const Searchbar = ({onSubmit}) => {

  const submitSerchbar = ({ serchText}, actions) => {
  if (serchText.trim() === '') {
      return toast.error('Please enter a query to search',
        {
          position: "top-center",
          autoClose: 2000,
        })
    }
      onSubmit(serchText);
    actions.resetForm();
    }


    return (
          <div className={css.container}>
            <Formik
          initialValues={{ serchText: ''}}
          onSubmit={submitSerchbar}
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
        
    )
}
export default Searchbar;