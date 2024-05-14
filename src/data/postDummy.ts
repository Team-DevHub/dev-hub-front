export interface Post {
  id: number;
  category: string;
  title: string;
  comments: number;
  writer: string;
}

const generateDummyData = () => {
  const dummyData = [];

  for (let i = 0; i < 150; i++) {
    const id = i + 1;
    const category = Math.random() < 0.5 ? 'React' : 'TypeScript';
    const title = `더미 데이터 ${id}`;
    const comments = Math.floor(Math.random() * 30);
    const writer = ['류지민', '김지민', '연하영', '문지현', '강정윤'][
      Math.floor(Math.random() * 5)
    ];

    dummyData.push({ id, category, title, comments, writer });
  }

  return dummyData;
};

export const postDummy = generateDummyData();
