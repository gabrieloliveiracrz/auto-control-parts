import React, { useState } from 'react'
import Parts from './Parts/Parts'
import User from './User/User'
import * as s from './style'

const Admin = () => {
  const [activePage, setActivePage] = useState('Users')

  const handlePageClick = (pageName) => {
    setActivePage(pageName)
  }
  return (
    <s.Container>
      <s.Card>
        <s.Pages>
          <s.Page>
            <span
              onClick={() => handlePageClick('Users')}
              className={activePage === 'Users' ? 'visited' : ''}
            >
              Liberação de usuários
            </span>
          </s.Page>
          <s.Page>
            <span
              onClick={() => handlePageClick('Parts')}
              className={activePage === 'Parts' ? 'visited' : ''}
            >
              Cadastro de Peças
            </span>
          </s.Page>
        </s.Pages>

        {activePage === 'Users' && <User />}
        {activePage === 'Parts' && <Parts />}
      </s.Card>
    </s.Container>
  )
}

export default Admin
