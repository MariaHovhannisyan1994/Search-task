import React from "react";
import "./Form.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from 'react-router-dom';



const Form = ({ searchQuery, setSearchQuery,submitHandler,setIsSelected}) => {
    const history = useHistory();

    const clearInput = () => {
        setSearchQuery([]);
        history.push(``);
      };
    const handle=(e)=>{
     setSearchQuery(e.target.value);
     setIsSelected(true)
    }

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={submitHandler}
        >
        
            <div className="search">
         <div className="searchInputs"></div>
            <input
                value={searchQuery}
                onInput={handle}
                type="text"
                id="header-search"
                placeholder="Search users"
                name="s"

            />
        <div className="searchIcon">
          {searchQuery.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
          
        </div>
        <button name="search" type="submit">Search</button>
        </div>
            
     
        </form>
    
    );
};

export default Form;