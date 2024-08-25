import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  Input,
  InputLabel,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";

// TODO: add condition to display taxonomy fields and show text or number input for s and x options
// TODO: add conditionnal validation for taxonomy
// TODO: add styling to the page, group elements

const validationSchema = yup.object({
  request: yup
    .string()
    .min(8, "Request should be of minimum 8 characters length") // to be redefined "startsWith ?"
    .required("A request is required"),
  cds: yup.string(), // to be refined with regexp?
  file: yup.mixed().test("fileSize", "The file is too large", (value: any) => {
    if (!value || !value.length) return true; // attachment is optional
    return value[0].size <= 2000000;
  }),
  taxids: yup.boolean(),
  gff: yup.boolean(),
  tsv: yup.boolean(),
  info: yup.boolean(),
});

const RequestForm: React.FC = () => {
  const [value, setValue] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const formik = useFormik({
    initialValues: {
      request: "",
      cds: "",
      file: null,
      taxids: false,
      gff: false,
      tsv: false,
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
        <TextField
          fullWidth
          id="cds"
          name="cds"
          label="cds"
          value={formik.values.cds}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cds && Boolean(formik.errors.cds)}
          helperText={formik.touched.cds && formik.errors.cds}
          focused
        />
        <InputLabel>List file</InputLabel>
        <Input
          type="file"
          id="list"
          name="list"
          inputProps={{ accept: ".txt, .text" }}
        />
        <FormControlLabel control={<Checkbox id="taxids" />} label="taxids" />
        <FormControlLabel control={<Checkbox id="gff" />} label="gff" />
        <FormControlLabel control={<Checkbox id="tsv" />} label="tsv" />
        <FormControlLabel control={<Checkbox id="info" />} label="info" />
        <RadioGroup
          row
          aria-labelledby="taxonomy"
          name="taxonomy"
          id="taxonomy"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="kingdom"
            control={<Radio />}
            label="Kingdom"
            // disabled={value === "none"}
          />
          <FormControlLabel
            value="phylum"
            control={<Radio />}
            label="Phylum"
            // disabled={value === "none"}
          />
          <FormControlLabel
            value="level"
            control={<Radio />}
            label="Level"
            // disabled={value === "none"}
          />
          <FormControlLabel
            value="custom"
            control={<Radio />}
            label="Custom"
            // disabled={value === "none"}
          />
          <FormControlLabel value="none" control={<Radio />} label="none" />
        </RadioGroup>
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
