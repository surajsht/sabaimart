import BlogList from "../components/blog/BlogList";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="mt-4 font-poppins text-4xl font-semibold tracking-wide">
        Blog
      </h2>

      <Breadcrumb />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Blog;
