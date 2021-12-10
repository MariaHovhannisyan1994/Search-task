import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form/Form';
import SearchItem from '../components/SearchItem';

const SearchBar = ({ users, filterPosts }) => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const [isSelected,setIsSelected] = useState(false)
    const filteredPosts = filterPosts(users, searchQuery);
    const history = useHistory();

    const submitHandler = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
        setIsSelected(false)
    };

    return (
        <div className="search-container">
            <Form
                setIsSelected={setIsSelected}
                users={users}
                searchQuery={searchQuery}
                submitHandler={submitHandler}
                setSearchQuery={setSearchQuery}
            />
            {searchQuery && isSelected && (
                <SearchItem
                    setIsSelected={setIsSelected}
                    filteredPosts={filteredPosts}
                    setSearchQuery={setSearchQuery}
                />
            )}
        </div>
    );
};

export default SearchBar;
