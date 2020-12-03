const physicsData = [
  {
    data: {
      id: 'vectorCalculus',
      label: '벡터미적분학',
    },
  },
  {
    data: {
      id: 'linear-algebra',
      label: '선형대수',
    },
  },
  {
    data: {
      id: 'diffrential-equation',
      label: '미분방정식',
    },
  },
  {
    data: {
      id: 'relativity',
      label: '상대성이론',
    },
  },
  {
    data: {
      id: 'groupTheory',
      label: '군론',
    },
  },
  {
    data: {
      id: 'nuclearPhysics',
      label: '핵물리학',
    },
  },
  {
    data: {
      id: 'optics',
      label: '광학',
    },
  },
  {
    data: {
      id: 'solidStatePhysics',
      label: '고체물리학',
    },
  },
  {
    data: {
      id: 'classicalMechanics',
      label: '고전역학',
    },
  },
  {
    data: {
      id: 'electroDynamics',
      label: '전자기학',
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
    },
  },
  {
    data: {
      id: 'statisticalPhysics',
      label: '통계물리',
    },
  },
  {
    data: {
      id: 'modernPhysics',
      label: '현대물리',
    },
  },
  {
    data: {
      id: 'circuit',
      label: '회로이론',
    },
  },
  {
    data: {
      id: '입자물리',
      label: '입자물리',
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
