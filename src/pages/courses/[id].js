import Head from 'next/head';
import Link from 'next/link';

const Todo = ({ data }) => {
  return (
    <>
      <Head>
        <title>Micro | Random | {data.title}</title>
      </Head>

      <main className="container mt-12 mx-auto">
        <h1 className="text-3xl">{data.title}</h1>
        <p>Please complete your task</p>
        <Link href="/random">
          <a>Bring me to random page</a>
        </Link>
      </main>
    </>
  );
};

Todo.getInitialProps = async ({ query }) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${query.id}`
    )
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {
    return { data: [] };
  }
};

export default Todo;
