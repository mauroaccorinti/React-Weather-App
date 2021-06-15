import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

const SearchBar = () => {

    const [searchingClass, setSearchingClass] = useState("");
    const [rotateClass, setRotateClass] = useState("");
    const [showArrowClass, setShowArrowClass] = useState("");

    function onFocus() {
        setSearchingClass("border-searching");
        setRotateClass("si-rotate");
    }
    function onFocusOut() {
        setSearchingClass("");
        setRotateClass("");
    }
    /* function onKeyUp() {
        if ()
            setShowArrowClass("go-in")
        else
            setShowArrowClass("");
    }
    $(".go-icon").click(function () {
        $(".search-form").submit();
    }); */

    return (<div className="container">
        <div className={"search-box" + " " + searchingClass}>
            <div className={"search-icon" + " " + rotateClass}><FontAwesomeIcon icon={faSearch}/></div>
            <form action="" className="search-form">
                <input type="text" placeholder="Search" id="search" autoComplete="off" onFocus={onFocus} onBlur={onFocusOut} />
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" className="search-border" viewBox="0 0 671 111"><path className="border" d="M335.5 108.5h-280c-29.3 0-53-23.7-53-53v0c0-29.3 23.7-53 53-53h280" /><path className="border" d="M335.5 108.5h280c29.3 0 53-23.7 53-53v0c0-29.3-23.7-53-53-53h-280" /></svg>
            <div className="go-icon"><i className="fa fa-arrow-right"></i></div>
        </div>
    </div>
    );
}

export default SearchBar;