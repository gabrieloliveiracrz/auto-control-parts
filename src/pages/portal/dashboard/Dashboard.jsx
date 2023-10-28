import React, { useEffect, useState } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import * as s from './style';

// Importar o tema desejado
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adicionar o gráfico de pizza ao pacote FusionCharts
Charts(FusionCharts);

// Aplicar o tema ao FusionCharts
FusionTheme(FusionCharts);

const Dashboard = () => {
  const [chartWidth, setChartWidth] = useState('100%'); // Largura inicial
  const [chartHeight, setChartHeight] = useState('300'); // Altura inicial
  const [data, setData] = useState([])

  const test = [
    { label: 'Quadrado 1', value: '20' },
    { label: 'Circulo 2', value: '30' },
    { label: 'Triangulo 3', value: '25' },
  ]

  useEffect(() => {
    setData(test)
  }, [data])

  const columnChartConfig = {
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Gráfico de Colunas',
        theme: 'fusion',
      },
      data: [
        { label: 'Quadrado 1', value: '20' },
        { label: 'Circulo 2', value: '30' },
        { label: 'Triangulo 3', value: '25' },
      ],
    },
  };

  const pieChartConfig = {
    type: 'pie2d',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Gráfico de Pizza',
        theme: 'fusion',
      },
      data: [
        { label: 'Quadrado 1', value: '20' },
        { label: 'Circulo 2', value: '30' },
        { label: 'Triangulo 3', value: '25' },
      ],
    },
  };

  // Função para atualizar o tamanho dos gráficos com base no tamanho da tela
  const updateChartSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      // Tamanho para telas menores
      setChartWidth('100%');
      setChartHeight('420'); // Ajuste a altura desejada para telas menores
    } else {
      // Tamanho para telas maiores
      setChartWidth('25%');
      setChartHeight('400'); // Ajuste a altura desejada para telas maiores
    }
  };

  useEffect(() => {
    // Atualize o tamanho dos gráficos quando a tela for redimensionada
    window.addEventListener('resize', updateChartSize);
    updateChartSize(); // Atualize o tamanho dos gráficos ao montar o componente
    return () => {
      // Remova o ouvinte de redimensionamento quando o componente for desmontado
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <s.Container>
      <s.Card>
        <s.Content>
          <s.Row>
            <s.FormControl>
              <label htmlFor="initialDate">Data Inicial</label>
              <input type="date" name='initialDate' id='initialDate' />
            </s.FormControl>
            <s.FormControl>
              <label htmlFor="finalDate">Data Final</label>
              <input type="date" name='initialDate' id='initialDate' />
            </s.FormControl>

            <s.Action>
              <button>Buscar</button>
            </s.Action>
          </s.Row>
          <s.Graph>
            <ReactFusioncharts
              {...columnChartConfig}
              width={chartWidth}
              height={chartHeight}
            />
            <ReactFusioncharts
              {...pieChartConfig}
              width={chartWidth}
              height={chartHeight}
            />
          </s.Graph>
        </s.Content>
      </s.Card>
    </s.Container>
  );
};

export default Dashboard;
