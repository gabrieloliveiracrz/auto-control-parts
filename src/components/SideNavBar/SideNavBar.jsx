import {
  Clipboard,
  Gear,
  Key,
  List,
  Monitor,
  SignOut,
  User,
  ListMagnifyingGlass,
  UserPlus,
} from '@phosphor-icons/react'
import React, { useState } from 'react'
import './SideNavBar.css'

const SideNavBar = ({ activePage, MessageLogout, user }) => {
  const [isExpanded, setExpendState] = useState(false)
  const [visited, setVisited] = useState('Control')

  const handleItemClick = (pageName) => {
    activePage(pageName)
    setVisited(pageName)
  }

  return (
    <div
      className={
        isExpanded
          ? 'side-nav-container'
          : 'side-nav-container side-nav-container-NX'
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <Clipboard
                className="menu-item-icon"
                size={32}
                color="#FFF"
                weight="bold"
              />
              <h4>Projeto Final</h4>
            </div>
          )}
          <button
            className={
              isExpanded ? 'hamburger hamburger-in' : 'hamburger hamburger-out'
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <List size={32} color="#FFF" weight="bold" />
          </button>
        </div>
        <div className="nav-menu">
          <a
            className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
            onClick={() => handleItemClick('Control')}
          >
            <Clipboard
              className="menu-item-icon"
              size={32}
              color={visited === 'Control' ? '#00b4d8' : '#FFF'}
              weight="bold"
            />
            {isExpanded && (
              <p className={visited === 'Control' && 'visited'}>
                Controle de Peças
              </p>
            )}
          </a>
          <a
            className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
            onClick={() => handleItemClick('Dashboard')}
          >
            <Monitor
              className="menu-item-icon"
              size={32}
              color={visited === 'Dashboard' ? '#00b4d8' : '#FFF'}
              weight="bold"
            />
            {isExpanded && (
              <p className={visited === 'Dashboard' && 'visited'}>Dashboard</p>
            )}
          </a>
          <a
            className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
            onClick={() => handleItemClick('ChangePass')}
          >
            <Key
              className="menu-item-icon"
              size={32}
              color={visited === 'ChangePass' ? '#00b4d8' : '#FFF'}
              weight="bold"
            />
            {isExpanded && (
              <p className={visited === 'ChangePass' && 'visited'}>
                Alterar senha
              </p>
            )}
          </a>
          {user && user.role === 'Supervisor' && (
            <>
              <a
                className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
                onClick={() => handleItemClick('Liber')}
              >
                <UserPlus
                  className="menu-item-icon"
                  size={32}
                  color={visited === 'Liber' ? '#00b4d8' : '#FFF'}
                  weight="bold"
                />
                {isExpanded && (
                  <p className={visited === 'Liber' && 'visited'}>
                    Liberação de Usuário
                  </p>
                )}
              </a>

              <a
                className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
                onClick={() => handleItemClick('CadPart')}
              >
                <Gear
                  className="menu-item-icon"
                  size={32}
                  color={visited === 'CadPart' ? '#00b4d8' : '#FFF'}
                  weight="bold"
                />
                {isExpanded && (
                  <p className={visited === 'CadPart' && 'visited'}>
                    Cadastro de Peças
                  </p>
                )}
              </a>
              <a
                className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}
                onClick={() => handleItemClick('Misplaced')}
              >
                <ListMagnifyingGlass
                  className="menu-item-icon"
                  size={32}
                  color={visited === 'Misplaced' ? '#00b4d8' : '#FFF'}
                  weight="bold"
                />
                {isExpanded && (
                  <p className={visited === 'Misplaced' && 'visited'}>
                    Peças extraviadas
                  </p>
                )}
              </a>
            </>
          )}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <User
              className="nav-footer-avatar"
              size={32}
              color="#FFF"
              weight="bold"
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">{user.name}</p>
              <p className="nav-footer-user-position">{user.role}</p>
            </div>
          </div>
        )}
        <SignOut
          className="logout-icon"
          size={32}
          color="#FFF"
          weight="bold"
          onClick={MessageLogout}
        />
      </div>
    </div>
  )
}

export default SideNavBar
