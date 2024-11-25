import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList, getWishesList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    const allBooks = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const[wishesBooks, setWishesBooks] = useState([]);
    useEffect(()=>{
        const storedList = getStoredList();
        const storedListint = storedList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedListint.includes(book.bookId));
        setReadBooks(readBookList)
    },[]);
    useEffect(()=>{
        const storedWishesList = getWishesList();
        const storedWishesListInt = storedWishesList.map(id => parseInt(id));
        const wishesBooksList = allBooks.filter(book => storedWishesListInt.includes(book.bookId));
        setWishesBooks(wishesBooksList);
    },[])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Mark as read</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read: {readBooks.length}</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-4'>
                        {
                            readBooks.map(book => <Book 
                                book={book}
                                key={book.bookId}
                                ></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>The book i wish: {wishesBooks.length}</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-4'>
                        {
                            wishesBooks.map(book => <Book 
                                book={book}
                                key={book.bookId}
                                ></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;