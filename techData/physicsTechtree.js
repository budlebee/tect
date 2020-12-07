const physicsData = [
  {
    data: {
      id: 'vectorCalculus',
      label: '벡터미적분학',
      url: '/subjects/vector-calculus',
    },
  },
  {
    data: {
      id: 'linear-algebra',
      label: '선형대수',
      url: '/subjects/linear-algebra',
    },
  },
  {
    data: {
      id: 'diffrential-equation',
      label: '미분방정식',
      url: '/subjects/differential-equation',
    },
  },
  {
    data: {
      id: 'relativity',
      label: '상대성이론',
      url: '/subjects/relativity',
    },
  },
  {
    data: {
      id: 'groupTheory',
      label: '군론',
      url: '/subjects/group-theory',
    },
  },
  {
    data: {
      id: 'nuclearPhysics',
      label: '핵물리학',
      url: '/subjects/nuclear-physics',
    },
  },
  {
    data: {
      id: 'optics',
      label: '광학',
      url: '/subjects/optics',
    },
  },
  {
    data: {
      id: 'solidStatePhysics',
      label: '고체물리학',
      url: '/subjects/solid-state-physics',
    },
  },
  {
    data: {
      id: 'classicalMechanics',
      label: '고전역학',
      url: '/subjects/classical-mechanics',
    },
  },
  {
    data: {
      id: 'electroDynamics',
      label: '전자기학',
      url: '/subjects/electrodynamics',
    },
  },
  {
    data: {
      id: 'quantumMechanics',
      label: '양자역학',
      url: '/subjects/quantummechanics',
    },
  },
  {
    data: {
      id: 'thermalPhysics',
      label: '열물리',
      url: '/subjects/thermal-physics',
    },
  },
  {
    data: {
      id: 'statisticalPhysics',
      label: '통계물리',
      url: '/subjects/statistical-physics',
    },
  },
  {
    data: {
      id: 'modernPhysics',
      label: '현대물리',
      url: '/subjects/modern-physics',
    },
  },
  {
    data: {
      id: 'circuit',
      label: '회로이론',
      url: '/subjects/circuit-fundamentals',
    },
  },
  {
    data: {
      id: '입자물리',
      label: '입자물리',
      url: '/subjects/particle-physics',
    },
  },
  {
    data: {
      id: 'vectorCalculus->linear-algebra',
      source: 'vectorCalculus',
      target: 'linear-algebra',
    },
  },
  {
    data: {
      id: 'vectorCalculus->diffrential-equation',
      source: 'vectorCalculus',
      target: 'diffrential-equation',
    },
  },
  {
    data: {
      id: 'diffrential-equation->classicalMechanics',
      source: 'diffrential-equation',
      target: 'classicalMechanics',
    },
  },
  {
    data: {
      id: 'thermalPhysics->statisticalPhysics',
      source: 'thermalPhysics',
      target: 'statisticalPhysics',
    },
  },
  {
    data: {
      id: 'statisticalPhysics->solidStatePhysics',
      source: 'statisticalPhysics',
      target: 'solidStatePhysics',
    },
  },
  {
    data: {
      id: 'diffrential-equation->electroDynamics',
      source: 'diffrential-equation',
      target: 'electroDynamics',
    },
  },
  {
    data: {
      id: 'vectorCalculus->electroDynamics',
      source: 'vectorCalculus',
      target: 'electroDynamics',
    },
  },
  {
    data: {
      id: 'classicalMechanics->quantumMechanics',
      source: 'classicalMechanics',
      target: 'quantumMechanics',
    },
  },
  {
    data: {
      id: 'electroDynamics->optics',
      source: 'electroDynamics',
      target: 'optics',
    },
  },
  {
    data: {
      id: 'electroDynamics->solidStatePhysics',
      source: 'electroDynamics',
      target: 'solidStatePhysics',
    },
  },
  {
    data: {
      id: 'linear-algebra->quantumMechanics',
      source: 'linear-algebra',
      target: 'quantumMechanics',
    },
  },
  {
    data: {
      id: 'electoDynamics->relativity',
      source: 'electroDynamics',
      target: 'relativity',
    },
  },
  {
    data: {
      id: 'groupTheory->relativity',
      source: 'groupTheory',
      target: 'relativity',
    },
  },
  {
    data: {
      id: 'quantumMechanics->nuclearPhysics',
      source: 'quantumMechanics',
      target: 'nuclearPhysics',
    },
  },
  {
    data: {
      id: 'groupTheory->nuclearPhysics',
      source: 'groupTheory',
      target: 'nuclearPhysics',
    },
  },
  {
    data: {
      id: 'quantumMechanics->optics',
      source: 'quantumMechanics',
      target: 'optics',
    },
  },
  {
    data: {
      id: 'quantumMechanics->solidStatePhysics',
      source: 'quantumMechanics',
      target: 'solidStatePhysics',
    },
  },
  {
    data: {
      id: 'modernPhysics->quantumMechanics',
      source: 'modernPhysics',
      target: 'quantumMechanics',
    },
  },
  {
    data: {
      id: 'modernPhysics->relativity',
      source: 'modernPhysics',
      target: 'relativity',
    },
  },
  {
    data: {
      id: 'linear-algebra->groupTheory',
      source: 'linear-algebra',
      target: 'groupTheory',
    },
  },
  {
    data: {
      id: 'groupTheory->입자물리',
      source: 'groupTheory',
      target: '입자물리',
    },
  },
  {
    data: {
      id: 'quantumMechanics->입자물리',
      source: 'quantumMechanics',
      target: '입자물리',
    },
  },
];

export default physicsData;
