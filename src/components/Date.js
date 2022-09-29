import React from "react";

const Date = ({updateDate}) => (
  <form onSubmit={updateDate}> 
      <input type="date" />
      <input type="submit"/>
  </form>
);
  
export default Date;

