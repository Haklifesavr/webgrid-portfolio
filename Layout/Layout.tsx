import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";



const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head >
        <title>{title || "WebGrid Developers - Software Development Agency"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dc4acn1mm/image/upload/v1719046076/webgrid_wdhwwd.jpg" />
  
   
    
<meta name="description" content={`${desc || 'WebGrid Developers, Experts in UI/UX and building complex websites and applications'}`} />


<meta property="og:title" content="WebGrid Developers - Software Development Agency" />


<meta property="og:url" content="https://webgrid-devs.vercel.app" />


<meta property="og:description" content="WebGrid Developers - Software Development Agency"/>


<meta property="og:image" content="https://res.cloudinary.com/dc4acn1mm/image/upload/v1719046076/webgrid_o34q4m.png"/>
   
   <meta httpEquiv="content-language" content="en"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="Portfolio" />
    <meta name="author" content="WebGrid Developers" />
    <meta name="publisher" content="publisher"/>
    <meta name="copyright" content="copyright"/>
    <meta name="page-topic" content="Web Development | Blog"/>
    <meta name="page-type" content="Blogging"/>
    <meta name="audience" content="Everyone"/>
  
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
     className="site-content">
      {children}
    </Box>
    <Footer />
  </>
  )


}
 
 
  



export default Layout; 