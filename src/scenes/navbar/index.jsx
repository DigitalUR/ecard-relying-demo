const Navbar = ({profileName}) => {
    return ( <>
        <div class="container nav ">
        {/* <div class="logo-div"><img src="../assets/trophy.svg"  width="50px" height="45px" alt=""/></div> */}
        <div class="logo-div" style={{fontSize:'x-large', fontWeight:'bolder'}}>{"<Demo App>"}</div>
        <div class="nav-bar" style={ {display:"flex"}}> 
            <div style={{ padding: 0,  display: 'flex',justifyContent:'end', width: '100%'}}>
            <div class="profile" style={{padding:0, display: 'flex', width: '200px',gap: '10px'}}><i class="fa-solid fa-user"></i><span>{profileName}</span></div></div>
    </div>
    </div>
    
    <div class="container nav-2 flex_row" style={{justifyContent: 'space-between',flexDirection: 'row-reverse', paddingRight: '23px',}}> 
        <ul class="flex_row">
        <li><a href=""><i class="fa-solid fa-chart-simple"></i> Dashboard</a></li>
        <li><a href=""><i class="fa-solid fa-gear"></i> Settings</a></li>
        <li><a href=""><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
        <li><a href=""></a></li>
    </ul>

    <ul class="flex_row">
        <li>Student account</li>
    </ul>
</div>
{/* hello */}
    </> );
}
 
export default Navbar;