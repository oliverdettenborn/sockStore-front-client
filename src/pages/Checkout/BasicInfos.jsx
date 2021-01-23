/* eslint-disable no-undef */
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

import buttonStyles from "./buttonStyles";
import inputStyles from "./inputStyles";
import FormStyles from "./styles";

export default function BasicInfos({ setPage, setClient }) {
  const buttonClasses = buttonStyles();
  const inputClasses = inputStyles();
  const validationSchema = yup.object({
    name: yup.string("Digite seu nome completo").required("Campo obrigatório"),
    cpf: yup.string("Digite seu cpf").required("Campo obrigatório"),
    email: yup
      .string("Digite seu e-mail")
      .email("Email inválido")
      .required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setClient(values);
      setPage(2);
    },
  });
  return (
    <FormStyles>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <h2>Seus dados</h2>
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="name"
            name="name"
            label="Nome Completo"
            variant="filled"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.email)}
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
                label="CPF"
                variant="filled"
                value={formik.values.cpf}
                error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                helperText={formik.touched.cpf && formik.errors.cpf}
              />
            )}
          </InputMask>
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="filled"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            classes={{
              root: buttonClasses.root,
            }}
            variant="contained"
            fullWidth
            type="submit"
          >
            CADASTRAR ENDEREÇO
          </Button>
        </form>
      </div>
    </FormStyles>
  );
}
