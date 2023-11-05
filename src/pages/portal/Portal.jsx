import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useNavigate } from 'react-router-dom'
import SideNavBar from '../../components/SideNavBar/SideNavBar'
import Control from './Control/Control'
import Admin from './admin/Admin'
import Dashboard from './dashboard/Dashboard'
import ChangePass from './changePass/ChangePass'
import * as s from './style'

const Portal = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const [activePage, setActivePage] = useState('Control')

  useEffect(() => {
    if (!user) {
      navigate('/login/signin')
    }
  }, [user])

  const MessageLogout = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <s.CustomAlert>
          <h1>Encerrar sessão</h1>
          <p>Deseja realmente sair da sessão agora?</p>
          <button
            onClick={() => {
              logout()
              onClose()
            }}
          >
            Sim
          </button>
          <button onClick={onClose}>Não</button>
        </s.CustomAlert>
      ),
    })
  }

  function logout() {
    localStorage.removeItem('user')
    navigate('/login/signIn')
  }

  const handlePageClick = (pageName) => {
    setActivePage(pageName)
  }

  return (
    <s.Container>
      <SideNavBar
        MessageLogout={MessageLogout}
        activePage={handlePageClick}
        user={user}
      />

      {activePage === 'Control' && <Control user={user} />}
      {activePage === 'Dashboard' && <Dashboard user={user} />}
      {activePage === 'ChangePass' && <ChangePass user={user} />}
      {activePage === 'Admin' && <Admin user={user} />}
    </s.Container>
  )
}

export default Portal
