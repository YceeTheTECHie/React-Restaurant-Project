.logo {
    margin: 0 0 0 .45em;
  }

  
.flex-container  {
    display: flex;
    justify-content: space-between;
    align-items: center;
        background: deepskyblue;
  }
  




  
  <button name="submit" className="action_btn2" type="submit" value="CLEAR" onclick="myFunction2()">CLEAR</button>


<div className="image1">
              <img src = {pound} alt="logo" width = "100%"/>

              <div>
              <Features/> 
             
            </div>
              <Welcomef/>
              </div>

              <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
              <Bestchoice/>
              <Followus/>
              <Flex/>
              <Footer/>  

























  
  
  .Navbar {
    display:flex;
    font-family:  Montserrat;
    border-radius:0.5em;
    color:BLACK; 
    font-size: 18px;
    text-align: left;
    flex-grow:1;
    background-color:#f2f0f0;
    border:none;
    width:auto;
    margin-right:8em;
    justify-content:space-between;
    margin-left :-200px;   
    padding-right:200px;
    list-style:none;
    flex-wrap: wrap;
    margin-top:1em;
    align-items: center;
    
  } 




















      .logo, .navigation {
          list-style: none;
          text-transform: uppercase;
      }
  
      .logo a, .navigation a {
          text-decoration: none;
          letter-spacing: .45rem;
      }
  
  .navigation  {
    display: flex;
  }
  
  .navigation a {
    display: block;
    padding: 1em;
    color: white;
  }
  
  .navigation a:hover {
      background: #00ace6;
  }
  
  /* *********** media queries *********** */
  @media all and (max-width: 990px) {
    .flex-container {
      flex-direction: column;
    }
    
    .logo {
    margin: 0;
  }
    
    .navigation  {
      width: 100%;
      justify-content: space-around;
    }
  }
  
  
  /* ****** ****** */
  @media all and (max-width: 600px) {
   
    .logo {
      margin: .25em 0;
      align-self: left; /* align the logo to the left side of 'flex-container' */
  }
    
    .navigation {
      flex-direction: column;
    }
    
    .navigation a { 
      text-align: center; 
      padding: 10px;
      border-top: 1px solid rgba(255,255,255,0.3); 
      border-bottom: 1px solid rgba(0,0,0,0.1); 
    }
    
    .navigation li:last-of-type a {
      border-bottom: none;
    }
  }