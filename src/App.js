import React, { useState, useEffect } from "react";
import './App.scss';

//import components
import Header from "./components/header";
import Main from "./components/main";
import Content from "./components/content";


function App() {
  
  //useState hook that holds card information (type and icon)
  const [logoTypes, setLogoTypes] = useState([
    {id: 0, name: "Lettermark Logos", icon: "https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_i-512.png"},
    {id: 1, name: "Wordmark Logos", icon: "https://cdn0.iconfinder.com/data/icons/global-top-brands/90/wikipedia-logo-512.png"},
    {id: 2, name: "Pictorial Mark Logos", icon: "https://cdn4.iconfinder.com/data/icons/fruit-solid-organic-sweetness/512/Lemon-512.png"},
    {id: 3, name: "Abstract Mark Logos", icon: "https://cdn2.iconfinder.com/data/icons/abstract-geometric-shape/48/triangle-abstract-geometric-polygon-eye-512.png"},
    {id: 4, name: "Mascot Logos", icon: "https://cdn3.iconfinder.com/data/icons/solid-locations-icon-set/64/Costumes_2-512.png"},
    {id: 5, name: "Combination Logos", icon: "https://cdn0.iconfinder.com/data/icons/octicons/1024/puzzle-512.png"}
  ])

  //useState hook that holds all logo information (description and examples)
  const [content, setContent] = useState([
    {
      id: 0,
      name: "Lettermark Logos",
      description: "A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials. The lettermark is all about simplicity.\n\nBy utilizing just a few letters, lettermark logos are effective at streamlining any company brand if they have a long name.",
      logoOne: "https://cdn.iconscout.com/icon/free/png-256/hbo-282669.png",
      logoTwo: "https://coda.newjobs.com/api/imagesproxy/ms/clu/xibm/xibmcasrx/branding/13IBM/IBM-logo.jpg",
      logoThree: "https://cdn.iconscout.com/icon/free/png-256/nasa-1-282702.png"
    },
    {
      id: 1,
      name: "Wordmark Logos",
      description: "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succint and distinct name. Google's logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.",
      logoOne: "https://cdn.iconscout.com/icon/free/png-256/visa-7-282549.png",
      logoTwo: "https://companiesmarketcap.com/img/company-logos/256/KO.png",
      logoThree: "https://pbs.twimg.com/profile_images/638786550206230529/fwnBbDZF.png"
    },
    {
      id: 2,
      name: "Pictorial Mark Logos",
      description: "A pictorial mark (sometimes called brand mark or logo symbol) is an icon - or graphic-based logo. It's probably the image that comes to mind when you think 'logo': the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.\n\nA true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use",
      logoOne: "https://logoeps.com/wp-content/uploads/2014/09/37150-apple-logo-icon-vector-icon-vector-eps.png",
      logoTwo: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/112/2016/06/twitter-logo.jpg",
      logoThree: "https://logodix.com/logo/360592.png"
    },
    {
      id: 3,
      name: "Abstract Mark Logos",
      description: "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image - like an apple or a bird - it's an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower.\n\nLike all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.",
      logoOne: "https://cdn.iconscout.com/icon/free/png-256/bp-14-282567.png",
      logoTwo: "https://cdn.iconscout.com/icon/free/png-256/pepsi-5-722731.png",
      logoThree: "https://i.pinimg.com/originals/72/3e/ae/723eaedfeebbb2a55b064ed463b7224d.jpg"
    },
    {
      id: 4,
      name: "Mascot Logos",
      description: "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson.\n\nA mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Walter Wally.",
      logoOne: "https://i.pinimg.com/originals/d0/ec/67/d0ec6705c20b49a7a225541ac22875d2.png",
      logoTwo: "https://cdn.iconscout.com/icon/free/png-256/kfc-2-226243.png",
      logoThree: "https://pbs.twimg.com/profile_images/2630986695/1007db835bacd8e396f8ddb6278bca28.jpeg"
    },
    {
      id: 5,
      name: "Combination Logos",
      description: "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to make an image.\n\nBecause a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.",
      logoOne: "https://pbs.twimg.com/profile_images/707074049885786112/DbwD-SBw_400x400.jpg",
      logoTwo: "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/6f/ef/e4/6fefe42e-7a32-5635-4ce3-dc621e5c7df2/source/256x256bb.jpg",
      logoThree: "https://assets.simon.com/tenantlogos/3073.png"
    }
  ])

  //useState hook that will hold the current information of the chosen logo type to be displayed
  const [currentType, setCurrentType] = useState([]);

  //set currentType state to lettermark on page load to display the lettermark logo information by default
  useEffect(() => {
        setCurrentType([
          {
            id: 0,
            name: "Lettermark Logos",
            description: "A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials. The lettermark is all about simplicity.\n\nBy utilizing just a few letters, lettermark logos are effective at streamlining any company brand if they have a long name.",
            logoOne: "https://cdn.iconscout.com/icon/free/png-256/hbo-282669.png",
            logoTwo: "https://coda.newjobs.com/api/imagesproxy/ms/clu/xibm/xibmcasrx/branding/13IBM/IBM-logo.jpg",
            logoThree: "https://cdn.iconscout.com/icon/free/png-256/nasa-1-282702.png"
          }
        ])
  }, []);

  return (
    <div className="App">
      <Header/>

      <Main
        logoTypes={logoTypes}
        setCurrentType={setCurrentType}
        content={content}
      />

      <Content
        currentType={currentType}
      />
    </div>
  );
}

export default App;
