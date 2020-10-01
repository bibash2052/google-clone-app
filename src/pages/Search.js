import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import './Search.css';
import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({hideButtons = false}) {
    const [obj, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        history.push('/search');
    };

    return(
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_input_icon"/>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button className="search_button_hidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search_button_hidden" variant="outlined">I'm feeling Lucky</Button>
                </div>
            )}

        </form>
    );
}

export default Search;