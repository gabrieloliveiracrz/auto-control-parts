import React, { useEffect, useState } from 'react'
import * as s from './style'

import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Importar o tema desejado
import api from '../../../services/api'
import { toast } from 'react-toastify'
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

// Adicionar o gráfico de pizza ao pacote FusionCharts

const Dashboard = () => {
  const [form, setForm] = useState({
    initialDate: '',
    finalDate: '',
  })
  const [column, setColumn] = useState([])
  const [pizza, setPizza] = useState({
    aprovados: '',
    reprovados: '',
    extraviados: '',
  })

  useEffect(() => {
    api
      .get('/parts/count')
      .then(
        ({
          data: {
            info: { column, pizza },
          },
        }) => {
          setColumn(column)
          const pizzaData = pizza[0]
          setPizza(pizzaData)
        },
      )
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // Definindo categorias para o gráfico de colunas
  const categories = [
    {
      category: column.map((item) => ({ label: item.prefixo })),
    },
  ]

  // Definindo dados para o gráfico de colunas
  const dataset = [
    {
      seriesname: 'Aprovado',
      data: column.map((item) => ({ value: item.aprovados })),
      color: '#5D62B5',
    },
    {
      seriesname: 'Reprovado',
      data: column.map((item) => ({ value: item.reprovados })),
      color: '#B3464A',
    },
  ]

  // Configurações para o gráfico de colunas
  const chartConfigs = {
    type: 'mscolumn2d',
    width: window.innerWidth <= 768 ? '100%' : '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        theme: 'fusion',
        caption: 'Status das Peças',
        plotFillAlpha: '80',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
      },
      categories,
      dataset,
    },
  }

  // Configurações para o gráfico de pizza
  const pieChartConfig = {
    type: 'pie2d',
    width: window.innerWidth <= 768 ? '100%' : '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        theme: 'fusion',
        caption: 'Status Geral',
        plotFillAlpha: '80',
        divLineIsDashed: '1',
        divLineDashLen: '1',
        divLineGapLen: '1',
      },
      data: [
        { label: 'Aprovado', value: pizza.aprovados, color: '#5D62B5' },
        { label: 'Reprovado', value: pizza.reprovados, color: '#B3464A' },
        { label: 'Extraviado', value: pizza.extraviados, color: '#ABA9BB' },
      ],
    },
  }

  // Função chamada quando há uma alteração em um campo de entrada no formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Atualiza o estado do formulário com os novos valores
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault()
    const { initialDate, finalDate } = form

    // Chama a API para obter dados com base nas datas fornecidas
    api
      .get(`/parts/count?initialDate=${initialDate}&finalDate=${finalDate}`)
      .then(
        ({
          data: {
            info: { column, pizza },
            message,
          },
        }) => {
          // Atualiza os estados com os novos dados obtidos
          setColumn(column)
          const pizzaData = pizza[0]
          setPizza(pizzaData)
        },
      )
      .catch((err) => {
        // Em caso de erro, reinicia os estados e exibe uma mensagem de erro
        setColumn([])
        setPizza({
          aprovados: '',
          reprovados: '',
          extraviados: '',
        })
        toast.error('Erro ao buscar dados')
        console.error(err)
      })
  }

  return (
    <s.Container>
      <s.Card>
        <s.Content>
          <form onSubmit={handleSubmit}>
            <s.Row>
              <s.FormControl>
                <label htmlFor="initialDate">Data Inicial</label>
                <input
                  type="date"
                  name="initialDate"
                  id="initialDate"
                  onChange={handleInputChange}
                  value={form.initialDate}
                />
              </s.FormControl>
              <s.FormControl>
                <label htmlFor="finalDate">Data Final</label>
                <input
                  type="date"
                  name="finalDate"
                  id="finalDate"
                  onChange={handleInputChange}
                  value={form.finalDate}
                  min={form.initialDate}
                />
              </s.FormControl>

              <s.Action>
                <button>Buscar</button>
              </s.Action>
            </s.Row>
          </form>
          <s.Dash>
            <s.Graph>
              <ReactFC {...chartConfigs} />
            </s.Graph>
            <s.Graph>
              <ReactFC {...pieChartConfig} />
            </s.Graph>
          </s.Dash>
        </s.Content>
      </s.Card>
    </s.Container>
  )
}

export default Dashboard
