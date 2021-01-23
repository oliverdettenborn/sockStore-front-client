import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";
import inputContainerStyles from "./inputContainerStyles";
import inputStyles from "./inputStyles";

export default function CardForm() {
  const inputClasses = inputStyles();
  const inputContainerClasses = inputContainerStyles();
  const validationSchema = yup.object({
    number: yup
      .string("Digite o numero do seu cartão")
      .required("Campo obrigatório"),
    expiration: yup
      .string("Digite a validade do seu cartão")
      .required("Campo obrigatório"),
    security: yup.string("Digite o CVV").required("Campo obrigatório"),
    name: yup.string("Digite o nome do titular").required("Campo obrigatório"),
    cpf: yup.string("Digite seu cpf").required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      number: "",
      expiration: "",
      security: "",
      name: "",
      cpf: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputMask
        mask="9999 9999 9999 9999"
        value={formik.values.number}
        maskChar=""
        onChange={formik.handleChange}
      >
        {() => (
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="number"
            name="number"
            label="Number"
            variant="filled"
            value={formik.values.number}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
        )}
      </InputMask>

      <div className="container">
        <InputMask
          mask="99/99/99"
          value={formik.values.expiration}
          disabled={false}
          maskChar=""
          onChange={formik.handleChange}
        >
          {() => (
            <TextField
              classes={{
                root: inputContainerClasses.root,
              }}
              fullWidth
              id="expiration"
              name="expiration"
              label="Validade"
              variant="filled"
              value={formik.values.expiration}
              error={
                formik.touched.expiration && Boolean(formik.errors.expiration)
              }
              helperText={formik.touched.expiration && formik.errors.expiration}
            />
          )}
        </InputMask>
        <InputMask
          mask="999"
          value={formik.values.security}
          disabled={false}
          maskChar=""
          onChange={formik.handleChange}
        >
          {() => (
            <TextField
              classes={{
                root: inputContainerClasses.root,
              }}
              fullWidth
              id="security"
              name="security"
              label="CVV"
              variant="filled"
              value={formik.values.security}
              error={formik.touched.security && Boolean(formik.errors.security)}
              helperText={formik.touched.security && formik.errors.security}
            />
          )}
        </InputMask>
      </div>
      <TextField
        classes={{
          root: inputClasses.root,
        }}
        fullWidth
        id="name"
        name="name"
        label="Nome do Titular"
        variant="filled"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <InputMask
        mask="999.999.999-99"
        value={formik.values.cpf}
        disabled={false}
        maskChar=""
        onChange={formik.handleChange}
      >
        {() => (
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="cpf"
            name="cpf"
            label="CPF do titular"
            variant="filled"
            value={formik.values.cpf}
            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            helperText={formik.touched.cpf && formik.errors.cpf}
          />
        )}
      </InputMask>
    </form>
  );
}
