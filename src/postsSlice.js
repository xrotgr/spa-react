import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Как начать работать с React',
    description: 'Первые шаги, компоненты и JSX.',
    author: 'Алексей',
  },
  {
    id: 2,
    title: 'Vite — быстрый старт проекта',
    description: 'Почему Vite быстрее, чем CRA.',
    author: 'Мария',
  },
  {
    id: 3,
    title: 'Понимаем useState',
    description: 'Что такое состояние и как оно работает.',
    author: 'Иван',
  },
  {
    id: 4,
    title: 'Знакомство с React Router',
    description: 'Основы навигации в SPA.',
    author: 'София',
  },
  {
    id: 5,
    title: 'Компоненты и пропсы',
    description: 'Как данные передаются сверху вниз.',
    author: 'Кирилл',
  },
  {
    id: 6,
    title: 'Жизненный цикл через useEffect',
    description: 'Когда вызывается эффект и зачем он нужен.',
    author: 'Ольга',
  },
  {
    id: 7,
    title: 'Работа со списками',
    description: 'Почему нужен key и что будет, если его не поставить.',
    author: 'Анна',
  },
  {
    id: 8,
    title: 'Создаём свой первый компонент',
    description: 'Разделяем интерфейс на логические части.',
    author: 'Степан',
  },
  {
    id: 9,
    title: 'Мини-гайд по JSX',
    description: 'Почему JSX — это не HTML.',
    author: 'Дмитрий',
  },
  {
    id: 10,
    title: 'Как избежать ошибок новичка',
    description: 'Типичные грабли в React и как их обходить.',
    author: 'Елена',
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, action) => {
      const { title, description, author } = action.payload;
      state.push({
        id: Math.random(),
        title,
        description,
        author,
      });
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const { id, values } = action.payload;
      console.log(action.payload);

      return state.map((post) => {
        if (post.id !== id) {
          return post;
        }
        return { id, ...values };
      });
    },
  },
});

export const { createPost, deletePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
