import React from 'react';
import '../components/Form/Form.css';

const SearchItem = ({filteredPosts, setSearchQuery,setIsSelected,}) => {

    const suggestionHandler = (name) => {
        setSearchQuery(name);
        setIsSelected(false);
    };

    return (
        <div className="dataResult">
            <ul>
                {filteredPosts.map((user) => (
                    <li
                        className="dataItem"
                        key={user.id}
                        onClick={() => suggestionHandler(user.name)}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchItem;
