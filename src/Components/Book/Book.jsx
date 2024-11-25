import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, tags } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-md">
                <figure>
                    <img className="w-[250px] h-[250px] object-cover rounded-xl"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4 py-2 ">
                        {
                            tags.map((tag, idx) => <button
                                key={idx}
                                className="btn btn-xs bg-[#23BE0A] text-white"
                            >#{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed py-1"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;