import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";

const validationSchema = yup.object({
  request: yup
    .string()
    .min(8, "Request should be of minimum 8 characters length") // to be redefined "startsWith ?"
    .required("A request is required"),
});

const RequestForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      request: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>RequestForm</h1>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="request"
          name="request"
          label="Request"
          value={formik.values.request}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.request && Boolean(formik.errors.request)}
          helperText={formik.touched.request && formik.errors.request}
          focused
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={!formik.dirty || !formik.isValid}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RequestForm;
