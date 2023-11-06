import { Helmet } from "react-helmet";

const Blog = () => {
    return (
   <>
      <Helmet>
      <meta charSet="utf-8" />
      <title>FlavourFusion|Blog</title>
      <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
        <div className="text-center w-8/12 mx-auto py-14">
        <p className="mb-8"> <span className=" text-2xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300   text-transparent   bg-clip-text">What is one way data binding:</span>One-way data binding is a concept in software development, often used in web applications and user interfaces, where data flows in a single direction. In this approach, changes in the data source e.g., a variable or model are reflected in the user interface UI elements, but changes made in the UI do not affect the data source. This means that the UI is a representation of the data, and any updates to the data are automatically reflected in the UI, ensuring consistency between the two.One-way data binding is commonly used in frameworks like AngularJS and React to build responsive and efficient user interfaces.</p>
          <p className="mb-8"> <span className=" text-2xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300   text-transparent   bg-clip-text">What is NPM in node.js: </span>T
NPM Node Package Manager is a package manager for Node.js, a JavaScript runtime environment. It is used to install, manage, and share reusable JavaScript code packages, making it easier for developers to work with libraries and modules in Node.js applications. NPM also helps handle dependencies and version control for these packages, simplifying the development process.</p>
          <p className="mb-8"> <span className=" text-2xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300   text-transparent   bg-clip-text">Different between Mongodb database vs mySQL database: </span>MongoDB is a better fit for scenarios where flexibility, scalability, and unstructured data are important, while MySQL is a solid choice for applications that demand strict data consistency and structured data storage.</p>
        </div>
   
   </>
    );
};

export default Blog;