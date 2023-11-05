

const SingleFoodItem = () => {
    return (
        <div className="card  bg-base-100 ">
        <figure><img src="https://i.ibb.co/mHQ06rg/top-view-table-full-food.jpg" alt="Album"/></figure>
        <div className="card-body">
        <div className="">

<p className="mb-8 ">Click the button to listen on Spotiwhy app Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum odio ratione magni. Cumque dignissimos deserunt id suscipit, eaque libero illum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat repellendus ab magni veniam rem ullam animi facere, earum incidunt placeat ipsam aperiam nisi. Quos, earum iste cupiditate sunt distinctio numquam veniam eum, porro, provident ut ipsa quidem voluptatem dolor. Qui voluptatum, officiis rem nihil a consequatur quaerat accusamus deserunt earum ipsam cupiditate omnis voluptas minus distinctio facilis ut, ipsa odio doloribus repellat quam non error architecto. Fuga impedit reiciendis eaque et quos mollitia sed saepe aliquid delectus culpa voluptas, cum repudiandae nulla excepturi quasi est enim tempora non, laboriosam, voluptates earum odit. Culpa sunt perferendis voluptas commodi, rem autem et!.</p>
</div>
          <h2 className="card-title text-red-600">Name: <span className="text-slate-800">Chiken biriyani</span></h2>
          <h2 className="card-title text-red-600">category: <span className="text-slate-800">Rice</span></h2>
          <h2 className="card-title text-red-600">price:<span className="text-slate-800">$776</span></h2>
          <h2 className="card-title text-red-600">Made BY: <span className="text-slate-800">Mahi Zaman Achol</span></h2>
          <h2 className="card-title text-red-600">Food Origin:<span className="text-slate-800"> Bangladesh</span></h2>
         
     
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-error w-40">Order Item</button>
          </div>
        </div>
      </div>
    );
};

export default SingleFoodItem;