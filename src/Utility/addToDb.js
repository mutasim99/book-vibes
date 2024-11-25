import { toast } from "react-toastify";

const getStoredList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }

}

const addToReadList = (id) =>{
   const storedList = getStoredList();
   if (storedList.includes(id)) {
    toast('Already exists');
   } 
   else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr)
    toast('Book added to mark read')
   }
}

const getWishesList = () =>{
    const storedWishesListStr = localStorage.getItem('wishes-list');
    if (storedWishesListStr) {
        const storedWishesList = JSON.parse(storedWishesListStr);
        return storedWishesList;
    }
    else{
        return []
    }
}

const addToWishesList = (id) =>{
    const storedWishesList = getWishesList();
    if (storedWishesList.includes(id)) {
        toast('Already wishes');
    }
    else{
        storedWishesList.push(id);
        const storedWishesListStr = JSON.stringify(storedWishesList);
        localStorage.setItem('wishes-list', storedWishesListStr);
        toast('Book added to wishes List')
    }
}

export {addToReadList, addToWishesList, getStoredList, getWishesList}