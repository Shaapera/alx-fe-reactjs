import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <hr />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;