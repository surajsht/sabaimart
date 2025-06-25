import BlogList from "../components/blog/BlogList";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-wide">
          Blog
        </h2>

        <Breadcrumb />
        <BlogList />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
