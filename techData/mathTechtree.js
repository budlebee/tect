const mathData = [
  {
    data: {
      id: 'vectorCalculus',
      label: 'Vector Calculus',
      url: '/subjects/vector-calculus',
    },
  },
  {
    data: {
      id: 'linearAlgebra',
      label: 'Linear Algebra',
      url: '/subjects/linear-algebra',
    },
  },
  {
    data: {
      id: 'numberTheory',
      label: 'Number Theory',
      url: '/subjects/number-theory',
    },
  },
  {
    data: {
      id: 'setTheory',
      label: 'Set Theory',
      url: '/subjects/set-theory',
    },
  },
  {
    data: {
      id: 'analysis',
      label: 'Analysis',
      url: '/subjects/analysis',
    },
  },
  {
    data: {
      id: 'discreteMathematics',
      label: 'Discrete Mathematics',
      url: '/subjects/discrete-mathematics',
    },
  },
  {
    data: {
      id: 'ode',
      label: 'ODE',
      url: '/subjects/differential-equation',
    },
  },
  {
    data: {
      id: 'pde',
      label: 'PDE',
      url: '/subjects/differential-equation',
    },
  },
  {
    data: {
      id: 'probability',
      label: 'Probability',
      url: '/subjects/probability',
    },
  },
  {
    data: {
      id: 'differentialGeometry',
      label: 'Differential Geometry',
      url: '/subjects/differential-geometry',
    },
  },
  {
    data: {
      id: 'modernAlgebra',
      label: 'Modern Algebra',
      url: '/subjects/modern-algebra',
    },
  },
  {
    data: {
      id: 'numericalAnalysis',
      label: 'Numerical Analysis',
      url: '/subjects/numerical-analysis',
    },
  },
  {
    data: {
      id: 'topology',
      label: 'Topology',
      url: '/subjects/topology',
    },
  },
  {
    data: {
      id: 'fieldTheory',
      label: 'Field Theory',
      url: '/subjects/field-theory',
    },
  },
  {
    data: {
      id: 'financialMathematics',
      label: 'Financial Mathematics',
      url: '/subjects/financial-mathematics',
    },
  },
  {
    data: {
      id: 'algebraicGeometry',
      label: 'Algebraic Geometry',
      url: '/subjects/algebraic-geometry',
    },
  },
  {
    data: {
      id: 'fourierAnalysis',
      label: 'Fourier Analysis',
      url: '/subjects/fourier-analysis',
    },
  },
  {
    data: {
      id: 'statistics',
      label: 'Statistics',
      url: '/subjects/statistics',
    },
  },
  {
    data: {
      id: 'complexAnalysis',
      label: 'Complex Analysis',
      url: '/subjects/complex-analysis',
    },
  },
  {
    data: {
      id: 'mathematicalLogic',
      label: 'Mathematical Logic',
      url: '/subjects/mathematical-logic',
    },
  },
  {
    data: {
      id: 'combinatorics',
      label: 'Combinatorics',
      url: '/subjects/combinatorics',
    },
  },
  {
    data: {
      id: 'appliedAlgebra',
      label: 'Applied Algebra',
      url: '/subjects/applied-algebra',
    },
  },
  {
    data: {
      id: 'probabilityAndRandomProcesses',
      label: 'Random Processes',
      url: '/subjects/random-processes',
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
