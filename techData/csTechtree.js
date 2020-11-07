const csData = [
  {
    data: {
      id: '선형대수',
      label: '선형대수',
    },
  },
  {
    data: {
      id: '공학수학',
      label: '공학수학',
    },
  },
  {
    data: {
      id: '확률과통계',
      label: '확률과통계',
    },
  },
  {
    data: {
      id: '컴퓨터그래픽스',
      label: '컴퓨터그래픽스',
    },
  },
  {
    data: {
      id: '이산수학',
      label: '이산수학',
    },
  },
  {
    data: {
      id: '자료구조',
      label: '자료구조',
    },
  },
  {
    data: {
      id: '객체지향프로그래밍',
      label: '객체지향프로그래밍',
    },
  },
  {
    data: {
      id: '컴퓨터프로그래밍',
      label: '컴퓨터프로그래밍',
    },
  },
  {
    data: {
      id: '프로그래밍언어구조론',
      label: '프로그래밍언어구조론',
    },
  },
  {
    data: {
      id: '컴파일러',
      label: '컴파일러',
    },
  },
  {
    data: {
      id: '오토마타',
      label: '오토마타',
    },
  },
  {
    data: {
      id: '논리회로설계',
      label: '논리회로설계',
    },
  },
  {
    data: {
      id: '알고리즘',
      label: '알고리즘',
    },
  },
  {
    data: {
      id: 'HCI',
      label: 'HCI',
    },
  },
  {
    data: {
      id: '인공지능',
      label: '인공지능',
    },
  },
  {
    data: {
      id: '머신러닝',
      label: '머신러닝',
    },
  },
  {
    data: {
      id: '데이터마이닝',
      label: '데이터마이닝',
    },
  },
  {
    data: {
      id: '데이터베이스',
      label: '데이터베이스',
    },
  },
  {
    data: {
      id: '컴퓨터네트워크',
      label: '컴퓨터네트워크',
    },
  },
  {
    data: {
      id: '인터넷프로그래밍',
      label: '인터넷프로그래밍',
    },
  },
  {
    data: {
      id: '정보보호',
      label: '정보보호',
    },
  },
  {
    data: {
      id: '컴퓨터시스템',
      label: '컴퓨터시스템',
    },
  },
  {
    data: {
      id: '컴퓨터아키텍쳐',
      label: '컴퓨터아키텍쳐',
    },
  },
  {
    data: {
      id: '운영체제',
      label: '운영체제',
    },
  },
  {
    data: {
      id: '시스템프로그래밍',
      label: '시스템프로그래밍',
    },
  },
  {
    data: {
      id: '멀티코어',
      label: '멀티코어',
    },
  },

  {
    data: {
      id: '컴퓨터비전',
      label: '컴퓨터비전',
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
