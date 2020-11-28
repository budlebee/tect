const physicsData = [
  {
    data: {
      id: 'vectorCalculus',
      label: 'Vector Calculus',
    },
  },
  {
    data: {
      id: 'linear-algebra',
      label: 'Linear Algebra',
    },
  },
  {
    data: {
      id: 'diffrential-equation',
      label: 'Differntial Equation (고등미적분학)',
    },
  },
  {
    data: {
      id: 'relativity',
      label: 'Relativity (상대성이론)',
    },
  },
  {
    data: {
      id: 'groupTheory',
      label: 'Group Theory (군론)',
    },
  },
  {
    data: {
      id: 'nuclearPhysics',
      label: 'Nuclear Physics',
    },
  },
  {
    data: {
      id: 'optics',
      label: 'Optics',
    },
  },
  {
    data: {
      id: 'solidStatePhysics',
      label: 'Solid State Physics',
    },
  },
  {
    data: {
      id: 'classicalMechanics',
      label: 'Classical Mechanics',
    },
  },
  {
    data: {
      id: 'electroDynamics',
      label: 'Electrodynamics',
    },
  },
  {
    data: {
      id: 'quantumMechanics',
      label: 'Quantum Mechanics',
    },
  },
  {
    data: {
      id: 'thermalPhysics',
      label: 'Theraml Physics',
    },
  },
  {
    data: {
      id: 'statisticalPhysics',
      label: 'Statistical Physics',
    },
  },
  {
    data: {
      id: 'modernPhysics',
      label: 'Concepts of Modern Physics',
    },
  },
  {
    data: {
      id: 'circuit',
      label: 'Electronics',
    },
  },
  {
    data: {
      id: '입자물리',
      label: 'Particle Physics',
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
