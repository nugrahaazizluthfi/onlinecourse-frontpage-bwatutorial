import Head from 'next/head';
import axios from 'src/config/axios';
import Circle from 'public/images/circle-accent-1.svg';
import Header from 'src/parts/Header';
import Hero from 'src/parts/Hero';
import Clients from 'src/parts/Clients';
import ListCourses from 'src/parts/ListCourses';
import ListCategories from 'src/parts/ListCategories/Index';

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="shunshine"></div>
          <div className="container mx-auto">
            <Header />
            <Hero />
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients />
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data} />
        </section>
        <section className="container mx-auto pt-24">
          <ListCategories />
        </section>
        <section className="container mx-auto py-24"></section>
      </main>
    </>
  );
};

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
