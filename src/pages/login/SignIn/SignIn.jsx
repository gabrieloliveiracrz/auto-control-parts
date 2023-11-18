import { Eye, EyeSlash, Key, User, WarningCircle } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Confirm from '../../../components/Confirm/Confirm'
import api from '../../../services/api'
import * as s from '../style'

const SignIn = () => {
  const navigate = useNavigate()
  const [icon, setIcon] = useState(true)
  const [type, setType] = useState('password')
  const [form, setForm] = useState({})
  const [user, setUser] = useState({})
  const [loggin, setLoggin] = useState(false)
  const [capsActive, setCapsActive] = useState(false)

  // Função chamada quando um campo de entrada em um formulário de login é alterado
  const handleLogininputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // Função chamada quando o formulário de login é enviado
  const onSubmit = (e) => {
    e.preventDefault()
    // Verifica se as credenciais inseridas correspondem às credenciais de administrador fictícias
    if (form.code === 'admin' && form.password === 'loginfalso123') {
      // Se sim, salva os detalhes do usuário no armazenamento local e navega para a página inicial
      localStorage.setItem('user', JSON.stringify(form))
      navigate('/')
    } else {
      validateUser()
    }
  }

  // Função para validar as credenciais do usuário através de uma chamada à API
  const validateUser = () => {
    api
      .put('/users/login', {
        code: form.code,
        password: form.password,
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setUser(response.data.info)
          setLoggin(true)
        } else {
          setUser('')
          toast.error(response.data.message)
        }
      })
  }

  // Se o usuário estiver logado, salva as informações do usuário no armazenamento local e navega para a página inicial
  if (loggin) {
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }

  // Função para alternar a visibilidade da senha no campo de senha do formulário de login
  const changeEye = (e) => {
    if (icon === true) {
      setIcon(false)
      setType('text')
    } else {
      setIcon(true)
      setType('password')
    }
  }

  // Função para verificar se a tecla Caps Lock está ativada durante a digitação no formulário de login
  const capsLock = (e) => {
    if (e.getModifierState('CapsLock')) {
      setCapsActive(true)
    } else {
      setCapsActive(false)
    }
  }

  return (
    <s.Content>
      <form method="post" onSubmit={(e) => onSubmit(e)}>
        <s.Title>Bem-vindo(a)!</s.Title>
        <s.InputGroup>
          <s.IconWithInput className="IconWithInput">
            <User size={30} className="icon" />
            <s.Input
              type="text"
              className="username"
              autoComplete="username"
              name="code"
              placeholder="Usuário"
              required
              onChange={(e) => handleLogininputs(e)}
            ></s.Input>
          </s.IconWithInput>
        </s.InputGroup>
        <s.InputGroup>
          <s.IconWithInput>
            <Key size={30} className="icon" />
            <s.Input
              type={type}
              className="password"
              id="password"
              name="password"
              placeholder="Senha"
              autoComplete="current-password"
              required
              onChange={(e) => handleLogininputs(e)}
              onKeyDown={(e) => capsLock(e)}
            ></s.Input>
            {icon === true ? (
              <Eye
                size={30}
                className="icon eye"
                onClick={(e) => changeEye(e)}
              />
            ) : (
              <EyeSlash
                size={30}
                className="icon eye"
                onClick={(e) => changeEye(e)}
              />
            )}
          </s.IconWithInput>
          {capsActive ? (
            <s.WarningSpan>
              <WarningCircle size={30} />
              CapsLock Ativado!
            </s.WarningSpan>
          ) : null}
          <s.StyledLink to="/login/forgotPassword">
            <s.Span>Esqueceu a senha?</s.Span>
          </s.StyledLink>
        </s.InputGroup>
        <Confirm message="Entrar" />
      </form>

      <s.NotAcess>
        <s.p>
          Ainda não possui acesso?{' '}
          <s.StyledLink to="/login/signUp">
            <s.Span>Clique Aqui</s.Span>
          </s.StyledLink>
        </s.p>
      </s.NotAcess>
    </s.Content>
  )
}

export default SignIn
