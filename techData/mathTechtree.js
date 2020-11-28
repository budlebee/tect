const mathData = [
  {
    data: {
      id: 'vectorCalculus',
      label: 'Vector Calculus',
    },
  },
  {
    data: {
      id: 'linearAlgebra',
      label: 'Linear Algebra',
    },
  },
  {
    data: {
      id: 'numberTheory',
      label: 'Number Theory',
    },
  },
  {
    data: {
      id: 'setTheory',
      label: 'Set Theory',
    },
  },
  {
    data: {
      id: 'analysis',
      label: 'Analysis',
    },
  },
  {
    data: {
      id: 'discreteMathematics',
      label: 'Discrete Mathematics',
    },
  },
  {
    data: {
      id: 'ode',
      label: 'ODE',
    },
  },
  {
    data: {
      id: 'pde',
      label: 'PDE',
    },
  },
  {
    data: {
      id: 'probability',
      label: 'Probability',
    },
  },
  {
    data: {
      id: 'differentialGeometry',
      label: 'Differential Geometry',
    },
  },
  {
    data: {
      id: 'modernAlgebra',
      label: 'Modern Algebra',
    },
  },
  {
    data: {
      id: 'numericalAnalysis',
      label: 'Numerical Analysis',
    },
  },
  {
    data: {
      id: 'topology',
      label: 'Topology',
    },
  },
  {
    data: {
      id: 'fieldTheory',
      label: 'Field Theory',
    },
  },
  {
    data: {
      id: 'financialMathematics',
      label: 'Financial Mathematics',
    },
  },
  {
    data: {
      id: 'algebraicGeometry',
      label: 'Algebraic Geometry',
    },
  },
  {
    data: {
      id: 'fourierAnalysis',
      label: 'Fourier Analysis',
    },
  },
  {
    data: {
      id: 'statistics',
      label: 'Statistics',
    },
  },
  {
    data: {
      id: 'complexAnalysis',
      label: 'Complex Analysis',
    },
  },
  {
    data: {
      id: 'mathematicalLogic',
      label: 'Mathematical Logic',
    },
  },
  {
    data: {
      id: 'combinatorics',
      label: 'Combinatorics',
    },
  },
  {
    data: {
      id: 'appliedAlgebra',
      label: 'Applied Algebra',
    },
  },
  {
    data: {
      id: 'probabilityAndRandomProcesses',
      label: 'Random Processes',
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
