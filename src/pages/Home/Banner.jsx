
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-200  text-transparent   bg-clip-text">A Culinary Journey Begins at FlavorFusion Palace</h1>
            <p className="mb-5 font-bold">Delight in Exquisite Flavors, Memorable Moments, and Culinary Artistry at FlavorFusion Palace</p>
            <button className="btn btn-outline btn-warning">ALL MENU</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;