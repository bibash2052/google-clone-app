import React from "react";
import './SearchPage.css';
import {useStateValue} from "../StateProvider";
import Response from "../response";
import logo from '../google-main.png';
import {Link} from "react-router-dom";
import Search from "./Search";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    //Live api call
    const { data } = useGoogleSearch(term);

    //Data from response file
    // const data = Response;
    return (
        <div className='search_page'>
            <div className="search_page_header">
                <Link to="/">
                    <img className="search_page_logo" src={logo} alt="Google Logo"/>
                </Link>
                <div className="search_page_header_body">
                    <Search hideButtons/>

                    <div className="search_page_options">
                        <div className="search_page_options_left">
                            <div className="search_page_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="search_page_option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="search_page_option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="search_page_option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="search_page_option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="search_page_option">
                                <MoreVertIcon/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="search_page_options_right">
                            <div className="search_page_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="search_page_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="search_page_results">
                    <p className="count_result">
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="search_result">
                            <a className="result_link" href={item.link}>
                                {item.displayLink}
                            </a>
                            <a className="search_result_title" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="search_result_snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default SearchPage;