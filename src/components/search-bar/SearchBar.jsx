import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch } from '@fortawesome/fontawesome-free-solid'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

const SearchBar = ({
    setCoordinates,
    ...props
}) => {

    const [searchingClass, setSearchingClass] = useState("");
    const [rotateClass, setRotateClass] = useState("");
    const [showArrowClass, setShowArrowClass] = useState("");
    const [activeDescendant, setActiveDescendant] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState("");

    function onFocus() {
        setSearchingClass("border-searching");
        setRotateClass("si-rotate");
    }
    function onFocusOut() {
        setSearchingClass("");
        setRotateClass("");
    }

    const searchOptions = {
        types: ['(cities)']
    }

    const handleChange = async value => {
        if (value.length > 0) {
            setShowArrowClass("go-in")
            value.length >= 2 ? setIsOpen(true) : setIsOpen(false);
        }
        else
            setShowArrowClass("");

        setAddress(value);
    };

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };

    const handleMouseOver = (suggestionActive, id) => {
        if (suggestionActive) {
            setActiveDescendant(id);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.key === " " || e.key === "Enter" || e.key === "Spacebar" || (e.screenX && e.screenY) ) {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            if(latLng){setCoordinates(latLng);}
        }

    }

    return (<div className="search-container">
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            searchOptions={searchOptions}
            shouldFetchSuggestions={isOpen}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className={`search-container ${searchingClass}`}>
                    <div className="search-box">
                        <div className={`search-icon ${rotateClass}`}><FontAwesomeIcon icon={faSearch} /></div>
                        <form action="" className="search-form">
                            <input {...getInputProps({ placeholder: "Search" })} type="text" id="search" role="combobox" aria-autocomplete="both" autoComplete="off" aria-owns="suggestion-list-box" aria-controls="suggestion-list-box" aria-activedescendant={activeDescendant} aria-expanded={isOpen} onFocus={onFocus} onBlur={onFocusOut} />
                        </form>
                        <svg xmlns="http://www.w3.org/2000/svg" className="search-border" viewBox="0 0 671 111"><path className="border" d="M335.5 108.5h-280c-29.3 0-53-23.7-53-53v0c0-29.3 23.7-53 53-53h280" /><path className="border" d="M335.5 108.5h280c29.3 0 53-23.7 53-53v0c0-29.3-23.7-53-53-53h-280" /></svg>
                        <button type="button" className={`go-icon ${showArrowClass}`} onKeyUp={handleSubmit} onClick={handleSubmit} ><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>

                    <div className="suggestion-box" id="suggestion-list-box" role="listbox">
                        {loading && <div className="loading">Loading...</div>}
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"

                            };

                            let id = suggestion.description;

                            return (
                                <div key={suggestion.placeId} id={id} aria-selected={suggestion.active} role="option" onMouseEnter={() => handleMouseOver(suggestion.active, id)} {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            )}
        </PlacesAutocomplete>

    </div>
    );
}

export default SearchBar;

/*
    <div className="search-box">
                        <div className={"search-icon" + " " + rotateClass}><FontAwesomeIcon icon={faSearch} /></div>
                        <form action="" className="search-form">
                            <input {...getInputProps({ placeholder="Search" })} type="text"  id="search" autoComplete="off" onFocus={onFocus} onBlur={onFocusOut} onChange={onInput} />
                        </form>
                        <svg xmlns="http://www.w3.org/2000/svg" className="search-border" viewBox="0 0 671 111"><path className="border" d="M335.5 108.5h-280c-29.3 0-53-23.7-53-53v0c0-29.3 23.7-53 53-53h280" /><path className="border" d="M335.5 108.5h280c29.3 0 53-23.7 53-53v0c0-29.3-23.7-53-53-53h-280" /></svg>
                        <div className={"go-icon" + " " + showArrowClass}><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>

*/