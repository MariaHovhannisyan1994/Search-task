import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Search from './Pages/SearchBar';


const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(
                    'https://jsonplaceholder.typicode.com/users',
                );
                setUsers(data);
                
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);

    const filterPosts = (users, query) => {
        if (!query) {
            return users;
        }

        return users.filter((user) => {
            const userName = user.name.toLowerCase();
            return userName.includes(query);
        });
    };

    return (
        <Router>
            
            <div className="App">
                <Search
                 users={users}
                 filterPosts={filterPosts}
                   
                />   
            </div>
        </Router>
    );
};

export default App;
