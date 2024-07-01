import { useNavigate } from "react-router-dom"

export const FilterBar = ({setSearchTerm}) => {
    {/* when user click ticket we want to nav to diff url . 
  Then go to filter-btn btn-primary below add onClick that navigates to "/tickets/create". then go create a route in CustViews.jsx*/}
    const navigate= useNavigate() 
    
    return (<div className="filter-bar">
        <input type="text" placeholder="Search" className="search" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
      </div>)
    }