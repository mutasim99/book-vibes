import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-xl p-10 mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="w-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary mt-6 bg-[#23BE0A] text-white font-bold">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;