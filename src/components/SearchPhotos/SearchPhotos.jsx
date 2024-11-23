import { ErrorMessage, Field, Form, Formik } from "formik";
import { TbPhotoSearch } from "react-icons/tb";
import * as Yup from "yup";

const SearchPhotos = ({ handleChengeQuery }) => {
  const handleSubmit = (values, options) => {
    handleChengeQuery(values.search); // Передаємо значення пошуку
    options.resetForm(); // Очищення форми
  };

  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(2, "Too Short!") // Мінімум 2 символи
      .max(20, "Too Long!") // Максимум 20 символів
      .required("Required"), // Поле обов'язкове
  });

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ search: "" }}
        validationSchema={searchSchema}
      >
        <Form>
          <label htmlFor="search" className="flex relative">
            <Field
              className="text-base flex align-baseline px-2 pr-12 w-64 rounded-lg placeholder-cyan-700 outline-cyan-700"
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage
              className="text-xs text-red-500 absolute top-6 left-2/4 -translate-x-1/2"
              name="search"
              component="span"
            />
            <button
              aria-label="Search photos"
              className="p-2 block absolute -top-1 right-0"
              type="submit"
            >
              <TbPhotoSearch className="text-cyan-700" />
            </button>
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchPhotos;
