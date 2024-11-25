import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWishesList } from "../../Utility/addToDb";

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const { bookId: curentBookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = (id) =>{
        addToReadList(id)
    }

    const handleAddToWishes = (id) =>{
        addToWishesList(id)
    }


    return (
        <div>
            <h2>Book details: {bookId}</h2>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="p-5">
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="mt-2"> By: {author}</p>
                        <div className="border-t-2  my-2"></div>
                        <p>{category}</p>
                        <div className="border-t-2  my-2"></div>
                        <p className="py-6">
                            <span className="text-2xl font-semibold">Review: </span>
                            {review}
                        </p>
                        <div className="flex justify-start gap-6">
                            {
                                tags.map((tag,idx) => <button
                                    key={idx}
                                    className="btn btn-xs bg-[#23BE0A] text-white"
                                    >#{tag}</button>)
                            }
                        </div>
                        <div className="border-t-2  my-2"></div>
                        <p className="mt-2">Number of pages: {totalPages}</p>
                        <p className="mt-2">Publisher: {publisher}</p>
                        <p className="mt-2">Year of publishing: {yearOfPublishing}</p>
                        <p className="mt-2">Rating: {rating}</p>
                        <div className="flex justify-start gap-6 mt-6">
                        <button className="btn btn-active btn-neutral" onClick={()=>handleMarkAsRead(bookId)}>Mark as read</button>
                        <button className="btn btn-active btn-accent" onClick={()=>handleAddToWishes(bookId)}>Add to wishes list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;