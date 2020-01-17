import React, { useState, useEffect } from 'react'
import './styles.css'
import { Button, ButtonGroup } from '@material-ui/core'

function UpdateForm({ onUpdateForm, onCancel, dev }) {
  const [actualDev, setActualDev] = useState({})
  const [techs, setTechs] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  useEffect(() => {
    setActualDev(dev)
  }, [dev])


  async function handleSubmit(e) {
    e.preventDefault();

    await onUpdateForm({
      techs,
      name,
      bio,
      latitude,
      longitude,
    })
  }

  function handleExit(e) {
    e.preventDefault()
    onCancel()
  }

  return (
    <>
      <form id="edit-form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label>Usuário: {actualDev.github_username}</label>
        </div>
        <div className="input-block">
          <label htmlFor="nome">Novo Nome</label>
          <input
            name="name"
            id="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="bio">Nova Bio</label>
          <textarea
            name="bio"
            id="bio"
            required
            value={bio}
            rows="4"
            onChange={e => setBio(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="btn-container">
        <ButtonGroup className="btn-group" variant="contained" aria-label="contained primary button group">
          <Button className="Button" form="edit-form" color="primary" type="submit">Atualizar</Button>
          <Button className="Button" color="secondary" onClick={handleExit}>Cancelar</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default UpdateForm
