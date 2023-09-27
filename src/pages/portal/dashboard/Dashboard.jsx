import React from 'react';
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

// Configuração dos dados para o gráfico de colunas
const columnChartConfig = {
  type: 'column2d',
  width: '30%',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Gráfico de Colunas',
      theme: 'fusion', // Aplicando o tema "fusion"
    },
    data: [
      { label: 'Categoria 1', value: '30' },
      { label: 'Categoria 2', value: '45' },
      { label: 'Categoria 3', value: '25' },
    ],
  },
};

const pieChartConfig = {
  type: 'pie2d',
  width: '30%',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Gráfico de Pizza',
      theme: 'fusion', // Aplicando o tema "fusion"
    },
    data: [
      { label: 'Categoria 1', value: '20' },
      { label: 'Categoria 2', value: '30' },
      { label: 'Categoria 3', value: '25' },
    ],
  },
};


const Dashboard = () => {
  return (
    <s.Container>
      <s.Card>
        <s.Graph>
        <ReactFusioncharts {...columnChartConfig} />
          <ReactFusioncharts {...pieChartConfig} />
        </s.Graph>
      </s.Card>
    </s.Container>
  );
};

export default Dashboard;
