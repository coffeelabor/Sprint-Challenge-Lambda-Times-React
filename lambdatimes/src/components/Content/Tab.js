import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  //I want to add className="tab active-tab" to the changeSelected function returns from Content.js
  console.log(props.tab);
  return (
    <div
      className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
      onClick={() => props.selectTabHandler(props.tab)}
      /* Replace this dummy click handler function with your selectTabHandler function from props 
       you'll need to pass the `tab` in as an argument to this handler. */
      //  I want to map over the tabs and only have the active-tab class display
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tabData: PropTypes.shape({
    props: PropTypes.string
  })
};

export default Tab;
