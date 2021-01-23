/* eslint-disable no-undef */
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

import axios from "axios";
import buttonStyles from "./buttonStyles";
import inputStyles from "./inputStyles";
import inputContainerStyles from "./inputContainerStyles";
import FormStyles from "./styles";

export default function Address({ setPage, setAddress }) {
  const buttonClasses = buttonStyles();
  const inputClasses = inputStyles();
  const inputContainerClasses = inputContainerStyles();
  const validationSchema = yup.object({
    cep: yup.string("Digite seu cep").required("Campo obrigatório"),
    street: yup.string("Digite sua rua").required("Campo obrigatório"),
    number: yup.number("Digite um número").required("Campo obrigatório"),
    complement: yup.string("Digite o complemento"),
    neighborhood: yup.string("Digite seu bairro").required("Campo obrigatório"),
    city: yup.string("Digite sua cidade").required("Campo obrigatório"),
    state: yup.string("Digite seu estado").required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      cep: "",
      street: "",
      number: "",
      complement: "N/A",
      neighborhood: "",
      city: "",
      state: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (!values.complement) {
        setAddress({
          cep: values.cep,
          street: values.street,
          number: values.number,
          complement: values.complement,
          neighborhood: values.neighborhood,
          city: values.city,
          state: values.state,
        });
      } else {
        setAddress(values);
      }
      setPage(3);
    },
  });

  async function onBlurCep(e) {
    const { value } = e.target;
    let cep;
    if (value) {
      cep = value.replace("-", "");
    }
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    formik.setValues({
      cep: formik.values.cep,
      street: data.logradouro,
      number: formik.values.number,
      complement: formik.values.complement,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    });
  }

  return (
    <FormStyles>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <h2>Seu endereço</h2>
          <InputMask
            mask="99999-999"
            value={formik.values.cep}
            disabled={false}
            maskChar=""
            onChange={formik.handleChange}
            onBlur={(e) => onBlurCep(e)}
          >
            {() => (
              <TextField
                classes={{
                  root: inputClasses.root,
                }}
                fullWidth
                id="cep"
                name="cep"
                label="CEP"
                variant="filled"
                value={formik.values.cep}
                error={formik.touched.cep && Boolean(formik.errors.cep)}
                helperText={formik.touched.cep && formik.errors.cep}
              />
            )}
          </InputMask>

          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="street"
            name="street"
            label="Rua"
            disabled
            variant="filled"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />

          <div className="container">
            <TextField
              classes={{
                root: inputContainerClasses.root,
              }}
              id="number"
              name="number"
              label="Número"
              variant="filled"
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <TextField
              classes={{
                root: inputContainerClasses.root,
              }}
              id="complement"
              name="complement"
              label="Complemento"
              variant="filled"
              value={formik.values.complement}
              onChange={formik.handleChange}
              error={
                formik.touched.complement && Boolean(formik.errors.complement)
              }
              helperText={formik.touched.complement && formik.errors.complement}
            />
          </div>
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="neighborhood"
            name="neighborhood"
            label="Bairro"
            disabled
            variant="filled"
            value={formik.values.neighborhood}
            onChange={formik.handleChange}
            error={
              formik.touched.neighborhood && Boolean(formik.errors.neighborhood)
            }
            helperText={
              formik.touched.neighborhood && formik.errors.neighborhood
            }
          />
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="city"
            name="city"
            label="Cidade"
            disabled
            variant="filled"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            classes={{
              root: inputClasses.root,
            }}
            fullWidth
            id="state"
            name="state"
            label="Estado"
            variant="filled"
            disabled
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
          <Button
            classes={{
              root: buttonClasses.root,
            }}
            variant="contained"
            fullWidth
            type="submit"
          >
            IR PARA PAGAMENTO
          </Button>
        </form>
      </div>
    </FormStyles>
  );
}
