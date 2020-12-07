const csData = [
  {
    data: {
      id: '선형대수',
      label: 'Linear Algebra',
      url: '/subjects/linear-algebra',
    },
  },
  {
    data: {
      id: '공학수학',
      label: 'Math Fundamentals',
      url: '/subjects/vector-calculus',
    },
  },
  {
    data: {
      id: '확률과통계',
      label: 'Probability and Statistics',
      url: '/subjects/probability-and-statistics',
    },
  },
  {
    data: {
      id: '컴퓨터그래픽스',
      label: 'Computer Graphics',
      url: '/subjects/computer-graphics',
    },
  },
  {
    data: {
      id: '이산수학',
      label: 'Discrete Math',
      url: '/subjects/discrete-mathematics',
    },
  },
  {
    data: {
      id: '자료구조',
      label: 'Data Structure',
      url: '/subjects/data-structure',
    },
  },
  {
    data: {
      id: '객체지향프로그래밍',
      label: 'OOP',
      url: '/subjects/oop',
    },
  },
  {
    data: {
      id: '컴퓨터프로그래밍',
      label: '컴퓨터프로그래밍',
      url: '/subjects/introduction-to-cs',
    },
  },
  {
    data: {
      id: '프로그래밍언어구조론',
      label: '프로그래밍언어구조론',
      url: '/subjects/programming-language-structure',
    },
  },
  {
    data: {
      id: '컴파일러',
      label: 'Compliler',
      url: '/subjects/compliler',
    },
  },
  {
    data: {
      id: '오토마타',
      label: 'Automata',
      url: '/subjects/automata-theory',
    },
  },
  {
    data: {
      id: '논리회로설계',
      label: '논리회로설계',
      url: '/subjects/logic-circuit-design',
    },
  },
  {
    data: {
      id: '알고리즘',
      label: 'Algorithm',
      url: '/subjects/algorithm',
    },
  },
  {
    data: {
      id: 'HCI',
      label: 'HCI',
      url: '/subjects/hci',
    },
  },
  {
    data: {
      id: '인공지능',
      label: 'AI',
      url: '/subjects/artificial-intelligence',
    },
  },
  {
    data: {
      id: '머신러닝',
      label: 'Machine Learning',
      url: '/subjects/machine-learning',
    },
  },
  {
    data: {
      id: '데이터마이닝',
      label: 'Data Mining',
      url: '/subjects/data-mining',
    },
  },
  {
    data: {
      id: '데이터베이스',
      label: 'DB',
      url: '/subjects/database',
    },
  },
  {
    data: {
      id: '컴퓨터네트워크',
      label: 'Network',
      url: '/subjects/network',
    },
  },
  {
    data: {
      id: '인터넷프로그래밍',
      label: '인터넷프로그래밍',
      url: '/subjects/internet-programming',
    },
  },
  {
    data: {
      id: '정보보호',
      label: '정보보호',
      url: '/subjects/information-security',
    },
  },
  {
    data: {
      id: '컴퓨터시스템',
      label: '컴퓨터시스템',
      url: '/subjects/system-programming',
    },
  },
  {
    data: {
      id: '컴퓨터아키텍쳐',
      label: 'Architecture',
      url: '/subjects/computer-architecture',
    },
  },
  {
    data: {
      id: '운영체제',
      label: 'OS',
      url: '/subjects/operating-system',
    },
  },
  {
    data: {
      id: '시스템프로그래밍',
      label: '시스템프로그래밍',
      url: '/subjects/system-programming',
    },
  },
  {
    data: {
      id: '멀티코어',
      label: '멀티코어',
      url: '/subjects/multicore-programming',
    },
  },

  {
    data: {
      id: '컴퓨터비전',
      label: 'Computer Vision',
      url: '/subjects/computer-vision',
    },
  },
  {
    data: {
      id: '선형대수->컴퓨터비전',
      source: '선형대수',
      target: '컴퓨터비전',
    },
  },
  {
    data: {
      id: '선형대수->컴퓨터그래픽스',
      source: '선형대수',
      target: '컴퓨터그래픽스',
    },
  },
  {
    data: {
      id: '공학수학->컴퓨터비전',
      source: '공학수학',
      target: '컴퓨터비전',
    },
  },
  {
    data: {
      id: '확률과통계->컴퓨터비전',
      source: '확률과통계',
      target: '컴퓨터비전',
    },
  },
  {
    data: {
      id: '확률과통계->인공지능',
      source: '확률과통계',
      target: '인공지능',
    },
  },
  {
    data: {
      id: '이산수학->오토마타',
      source: '이산수학',
      target: '오토마타',
    },
  },
  {
    data: {
      id: '이산수학->논리회로설계',
      source: '이산수학',
      target: '논리회로설계',
    },
  },
  {
    data: {
      id: '이산수학->알고리즘',
      source: '이산수학',
      target: '알고리즘',
    },
  },
  {
    data: {
      id: '컴퓨터프로그래밍->객체지향프로그래밍',
      source: '컴퓨터프로그래밍',
      target: '객체지향프로그래밍',
    },
  },
  {
    data: {
      id: '객체지향프로그래밍->자료구조',
      source: '객체지향프로그래밍',
      target: '자료구조',
    },
  },
  {
    data: {
      id: '선형대수->머신러닝',
      source: '선형대수',
      target: '머신러닝',
    },
  },
  {
    data: {
      id: '자료구조->인공지능',
      source: '자료구조',
      target: '인공지능',
    },
  },
  {
    data: {
      id: '자료구조->머신러닝',
      source: '자료구조',
      target: '머신러닝',
    },
  },
  {
    data: {
      id: '자료구조->데이터마이닝',
      source: '자료구조',
      target: '데이터마이닝',
    },
  },
  {
    data: {
      id: '데이터베이스->정보보호',
      source: '데이터베이스',
      target: '정보보호',
    },
  },
  {
    data: {
      id: '컴퓨터네트워크->정보보호',
      source: '컴퓨터네트워크',
      target: '정보보호',
    },
  },
  {
    data: {
      id: '컴퓨터시스템->정보보호',
      source: '컴퓨터시스템',
      target: '정보보호',
    },
  },
  {
    data: {
      id: '자료구조->알고리즘',
      source: '자료구조',
      target: '알고리즘',
    },
  },
  {
    data: {
      id: '자료구조->논리회로설계',
      source: '자료구조',
      target: '논리회로설계',
    },
  },
  {
    data: {
      id: '자료구조->오토마타',
      source: '자료구조',
      target: '오토마타',
    },
  },
  {
    data: {
      id: '자료구조->컴퓨터시스템',
      source: '자료구조',
      target: '컴퓨터시스템',
    },
  },
  {
    data: {
      id: '컴퓨터시스템->컴퓨터아키텍쳐',
      source: '컴퓨터시스템',
      target: '컴퓨터아키텍쳐',
    },
  },
  {
    data: {
      id: '자료구조->운영체제',
      source: '자료구조',
      target: '운영체제',
    },
  },
  {
    data: {
      id: '운영체제->멀티코어',
      source: '운영체제',
      target: '멀티코어',
    },
  },
  {
    data: {
      id: '컴퓨터아키텍쳐->멀티코어',
      source: '컴퓨터아키텍쳐',
      target: '멀티코어',
    },
  },
  {
    data: {
      id: '운영체제->시스템프로그래밍',
      source: '운영체제',
      target: '시스템프로그래밍',
    },
  },
  {
    data: {
      id: '인터넷프로그래밍->데이터베이스',
      source: '인터넷프로그래밍',
      target: '데이터베이스',
    },
  },
];

export default csData;
