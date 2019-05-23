import React from 'react';
import Board from '../components/Board';

const list = [
  {
    id: 1,
    title: '제목 1'
  },
  {
    id: 2,
    title: '제목 2'
  },
  {
    id: 3,
    title: '제목 3'
  },
  {
    id: 4,
    title: '제목 4'
  },
  {
    id: 5,
    title: '제목 5'
  },
  {
    id: 6,
    title: '제목 6'
  }
]

function About() {
  return (
    <div>
      {list.map(board => {
        return <Board key={board.id} id={board.id} title={board.title}/>
      })}
    </div>
  );
}

export default About;