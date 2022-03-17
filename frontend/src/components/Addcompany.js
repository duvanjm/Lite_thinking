import axios from "axios";
import React, { useState } from "react";

function Addcompany() {

  const [state, setState] = useState({ Nombre_de_la_empresa: "", Direccion: "", NIT: "", Telefono: "" });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.Nombre_de_la_empresa === '' ||
      state.Direccion === '' || state.NIT === ''
      || state.Telefono === '') {
      alert('Porfavor llene los campos para añadir una empresa');
    } else {
      axios.post('http://localhost:8000/api/files', {
        'Nombre_de_la_empresa': state.Nombre_de_la_empresa,
        'Direccion': state.Direccion,
        'NIT': state.NIT,
        'Telefono': state.Telefono,
      }).then((res) => {
        alert('Empresa creada exitosamente');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
    }
  }

  return (
    <section className="main sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="login-form">
            <h2 className="form-title">Añadir nueva empresa</h2>
            <form
              method="POST"
              onSubmit={handleSubmit}
              className="register-form"
            >
              <div className="form-group">
                <label htmlFor="text">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="text"
                  name='Nombre_de_la_empresa'
                  onChange={handleChange}
                  placeholder="Nombre_de_la_empresa"
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="text"
                  name='Direccion'
                  onChange={handleChange}
                  placeholder="Direccion"
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="text"
                  name='NIT'
                  onChange={handleChange}
                  placeholder="NIT"
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="text"
                  name='Telefono'
                  onChange={handleChange}
                  placeholder="Telefono"
                />
              </div>
              <div className="form-group form-button">
                <input className="button_empresas"
                  type="submit"
                  name="signin"
                  value="Añadir empresa"
                  id="signin"
                />
              </div>
              <div id="mensaje"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Addcompany;
