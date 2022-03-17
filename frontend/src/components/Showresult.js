import axios from "axios";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/global.css';


function Showresult(props) {

  const [state, setState] = useState({ Nombre_de_la_empresa: "", Direccion: "", NIT: "", Telefono: "" });

  const [showForm, setShowForm] = useState({ id: null });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const updateCompany = (event) => {
    event.preventDefault();
    console.log(showForm.id);
    if (state.Nombre_de_la_empresa === '' &&
      state.Direccion === '' && state.NIT === ''
      && state.Telefono === '') {
      alert('Porfavor llene los campos para añadir una empresa');
    } else {
      axios.put(`http://localhost:8000/api/files/${showForm.id}`, {
        'Nombre_de_la_empresa': state.Nombre_de_la_empresa,
        'Direccion': state.Direccion,
        'NIT': state.NIT,
        'Telefono': state.Telefono,
      })
        .then((res) => {
          alert('Empresa actualizada exitosamente');
          setShowForm({ id: null})
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        })
    }
  }

  const displayResult = (props) => {

    const { notes } = props;

    const deleteCompany = (id) => {
      axios.delete(`http://localhost:8000/api/files/${id}`)
        .then((res) => {
          alert('Empresa elimindada');
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        })
    }

    if (notes.length > 0) {
      return (
        notes.map((note, index) => {
          return (
            <Card key={index}>
              <Card.Body>
                <div className="note" key={note.id}>
                  <Card.Title>Nombre de la empresa: {note.Nombre_de_la_empresa}</Card.Title>
                  <p className="note_direction">Direccion: {note.Direccion}</p>
                  <p className="note_nit">NIT: {note.NIT}</p>
                  <p className="note_telefono">Telefono: {note.Telefono}</p>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => {setShowForm({ id: note.id }); }} className="button_update">Update</Button>
                <Button onClick={() => deleteCompany(note.id)} className="button_delete">Delete</Button>
              </Card.Footer>
            </Card>
          )
        })
      )
    } else {
      return (<h3 className="empresas">No hay empresas.</h3>)
    }
  }

  return (
    <>
      {displayResult(props)}
      {showForm && (
        <section className="main sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="login-form">
                <h2 className="form-title">Actualizar empresa</h2>
                <form
                  method="POST"
                  className="register-form"
                  onSubmit={updateCompany}
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
                      id="signin"
                      value="Actualizar empresa"
                    />
                  </div>
                  <div id="mensaje"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Showresult;
