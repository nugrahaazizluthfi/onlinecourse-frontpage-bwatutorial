import Head from "next/head";

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";

import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import Clients from "src/parts/Clients";
import ListCourses from "src/parts/ListCourses";
import ListCategories from "src/parts/ListCategories";
import Footer from "src/parts/Footer";

import courses from "src/constants/api/courses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="container mx-auto px-4">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <Clients></Clients>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <ListCourses data={data}></ListCourses>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <ListCategories></ListCategories>
        </section>
        <section className="mt-24 bg-indigo-1000 py-12">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();

    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
