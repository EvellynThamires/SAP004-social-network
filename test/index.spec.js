// import { createPost,loadPosts,saveImage,deletePost,savePostEdit,saveLike } from '../public/pages/home/data.js';

describe('Greeting', () => {
  it('Deveria retornar "Oi Maria! Que bom ver você aqui!" quando passado "Maria" como parâmetros', () => {
    const message = 'Oi Maria! Que bom ver você aqui!';
    expect(greeting('Maria')).toEqual(message);
  });
});
