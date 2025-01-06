import React from "react";

const Footer = () => {
    return (<footer>
        <h3>Footer body</h3>
        <form>
            <div>
                <input type="text" name="name" placeholder="Enter your name" required /><br></br>
                <input type="number" name="phoneNo" placeholder="Enter your Phone number" required />
            </div>
            <button type="submit" >Submit</button>
        </form>
  </footer>);
};

export default Footer;
