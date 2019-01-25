import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
         {props.tabs.map((tab, ind) => {
           return(
              <Tab 
                  tab = {tab}
                  selectTabHandler = {props.selectTabHandler}
                  selectedTab = {props.selectedTab}
                  key = {ind}
              />
           )
         })}  
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tabs;
