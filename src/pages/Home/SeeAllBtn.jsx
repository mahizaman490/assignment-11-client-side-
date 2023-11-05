import { Link } from "react-router-dom";

const SeeAllBtn = () => {
    return (
        <div className=" flex items-center justify-center my-10 ">
            <Link to='/allfooditems'>
            <button className="btn w-28 bg-gradient-to-r from-[#ff0000] to-orange-600 text-white ... ">See All</button>
            </Link>
        </div>
    );
};

export default SeeAllBtn;