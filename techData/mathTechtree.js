const mathData = [
  {
    data: {
      id: 'vectorCalculus',
      label: '벡터 미적분학',
    },
  },
  {
    data: {
      id: 'linearAlgebra',
      label: '선형대수',
    },
  },
  {
    data: {
      id: 'numberTheory',
      label: '정수론',
    },
  },
  {
    data: {
      id: 'setTheory',
      label: '집합론',
    },
  },
  {
    data: {
      id: 'analysis',
      label: '해석학',
    },
  },
  {
    data: {
      id: 'discreteMathematics',
      label: '이산수학',
    },
  },
  {
    data: {
      id: 'ode',
      label: '상미분방정식',
    },
  },
  {
    data: {
      id: 'pde',
      label: '편미분방정식',
    },
  },
  {
    data: {
      id: 'probability',
      label: '확률론',
    },
  },
  {
    data: {
      id: 'differentialGeometry',
      label: '미분기하',
    },
  },
  {
    data: {
      id: 'modernAlgebra',
      label: '현대대수',
    },
  },
  {
    data: {
      id: 'numericalAnalysis',
      label: '수치해석',
    },
  },
  {
    data: {
      id: 'topology',
      label: '위상수학',
    },
  },
  {
    data: {
      id: 'fieldTheory',
      label: '체론',
    },
  },
  {
    data: {
      id: 'financialMathematics',
      label: '금융수학',
    },
  },
  {
    data: {
      id: 'algebraicGeometry',
      label: '대수기하',
    },
  },
  {
    data: {
      id: 'fourierAnalysis',
      label: '푸리에해석',
    },
  },
  {
    data: {
      id: 'statistics',
      label: '통계학',
    },
  },
  {
    data: {
      id: 'complexAnalysis',
      label: '복소해석',
    },
  },
  {
    data: {
      id: 'mathematicalLogic',
      label: '수리논리',
    },
  },
  {
    data: {
      id: 'combinatorics',
      label: '조합론',
    },
  },
  {
    data: {
      id: 'appliedAlgebra',
      label: '응용대수',
    },
  },
  {
    data: {
      id: 'probabilityAndRandomProcesses',
      label: '확률과정론',
    },
  },
  {
    data: {
      id: 'vectorCalculus->linearAlgebra',
      source: 'vectorCalculus',
      target: 'linearAlgebra',
    },
  },
  {
    data: {
      id: 'vectorCalculus->analysis',
      source: 'vectorCalculus',
      target: 'analysis',
    },
  },
  {
    data: {
      id: 'vectorCalculus->ode',
      source: 'vectorCalculus',
      target: 'ode',
    },
  },
  {
    data: {
      id: 'vectorCalculus->differentialGeometry',
      source: 'vectorCalculus',
      target: 'differentialGeometry',
    },
  },
  {
    data: {
      id: 'analysis->pde',
      source: 'analysis',
      target: 'pde',
    },
  },
  {
    data: {
      id: 'analysis->topology',
      source: 'analysis',
      target: 'topology',
    },
  },
  {
    data: {
      id: 'analysis->fourierAnalysis',
      source: 'analysis',
      target: 'fourierAnalysis',
    },
  },
  {
    data: {
      id: 'linearAlgebra->modernAlgebra',
      source: 'linearAlgebra',
      target: 'modernAlgebra',
    },
  },
  {
    data: {
      id: 'linearAlgebra->numericalAnalysis',
      source: 'linearAlgebra',
      target: 'numericalAnalysis',
    },
  },
  {
    data: {
      id: 'linearAlgebra->differentialGeometry',
      source: 'linearAlgebra',
      target: 'differentialGeometry',
    },
  },
  {
    data: {
      id: 'numberTheory->modernAlgebra',
      source: 'numberTheory',
      target: 'modernAlgebra',
    },
  },
  {
    data: {
      id: 'setTheory->mathematicalLogic',
      source: 'setTheory',
      target: 'mathematicalLogic',
    },
  },
  {
    data: {
      id: 'analysis->complexAnalysis',
      source: 'analysis',
      target: 'complexAnalysis',
    },
  },
  {
    data: {
      id: 'discreteMathematics->probability',
      source: 'discreteMathematics',
      target: 'probability',
    },
  },
  {
    data: {
      id: 'discreteMathematics->combinatorics',
      source: 'discreteMathematics',
      target: 'combinatorics',
    },
  },
  {
    data: {
      id: 'analysis->probabilityAndRandomProcesses',
      source: 'analysis',
      target: 'probabilityAndRandomProcesses',
    },
  },
  {
    data: {
      id: 'discreteMathematics->statistics',
      source: 'discreteMathematics',
      target: 'statistics',
    },
  },
  {
    data: {
      id: 'statistics->probabilityAndRandomProcesses',
      source: 'statistics',
      target: 'probabilityAndRandomProcesses',
    },
  },
  {
    data: {
      id: 'modernAlgebra->fieldTheory',
      source: 'modernAlgebra',
      target: 'fieldTheory',
    },
  },
  {
    data: {
      id: 'numberTheory->fieldTheory',
      source: 'numberTheory',
      target: 'fieldTheory',
    },
  },
  {
    data: {
      id: 'fieldTheory->algebraicGeometry',
      source: 'fieldTheory',
      target: 'algebraicGeometry',
    },
  },
  {
    data: {
      id: 'fieldTheory->appliedAlgebra',
      source: 'fieldTheory',
      target: 'appliedAlgebra',
    },
  },
  {
    data: {
      id: 'fieldTheory->mathematicalLogic',
      source: 'fieldTheory',
      target: 'mathematicalLogic',
    },
  },
  {
    data: {
      id: 'probabilityAndRandomProcesses->financialMathematics',
      source: 'probabilityAndRandomProcesses',
      target: 'financialMathematics',
    },
  },
  {
    data: {
      id: 'ode->pde',
      source: 'ode',
      target: 'pde',
    },
  },
  {
    data: {
      id: 'pde->fourierAnalysis',
      source: 'pde',
      target: 'fourierAnalysis',
    },
  },
];

export default mathData;
