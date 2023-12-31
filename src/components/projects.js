import { Link } from "react-router-dom";

export const projects = [

  {
    id: 15,
    url: "abkc-american-bully-kennel-club-pitbull-mascots-illustrations",
    title: "ABKC American Bully Kennel Club: Pitbull Mascots Illustrations",
    location: "Milano, Italy",
    tag: [
      "Illustration",
      "Branding"
  ],
    client: "ABKC American Bully Kennel Club",
    avatar: [require("../assets/Tattoed-Pit-photo-1.jpeg")],
    images: [
      require("../assets/Tattoed-Pit.png"),
      require("../assets/Gladiator-Pit.png"),
      require("../assets/Tattoed-Pit-photo-1.jpeg"),
      require("../assets/Tattoed-Pit-photo-2.jpeg"),
      require("../assets/Tattoed-Pit-mug-mockup.png"),
      require("../assets/Gladiator-Pit-photo-1.jpeg"),
      require("../assets/Gladiator-Pit-photo-2.jpeg"),
    ],
    graphicToolsUsed: [
      "Procreate",
      "Adobe Illustrator",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Procreate",
    //     icon: require("../assets/Procreate-icon.png"),
    //   },
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "I had the honor of creating two compelling Pitbull Mascot Illustrations for the prestigious ABKC American Bully Kennel Club event in Italy. The first illustration showcased a tattooed Pitbull face, exuding a perfect blend of strength and edginess, while the second depicted a fearless Pitbull Gladiator, representing courage and determination.",
      <br key={0}/>,
      <br key={1}/>,
      "The client sought these illustrations to be suitable on a range of various merchandise. Additionally, the Pitbull Gladiator design was designed in order to become a captivating 3D mascot trophy in the future, which will be awarded to the winner of the American Bullies parade, creating a unique and memorable experience for the recipient.",
      <br key={2}/>,
      <br key={3}/>,
      "The response to these illustrations was overwhelming, with attendees and participants embracing them as powerful symbols of the breed’s spirit and character.",
      <br key={4}/>,
      <br key={5}/>,
      "I am immensely proud to have contributed to such a remarkable event, celebrating the beloved American Bullies and fostering a sense of camaraderie within the community.",
    ],
  },

  {
    id: 14,
    url: "dupli-color-il-ritocco-muri-product-label",
    title: "Dupli-Color Il Ritocco Muri: Product Label",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "European Aerosols",
    avatar: [require("../assets/Il-Ritocco-Muri_Mockup.png")],
    images: [
      require("../assets/Il-Ritocco-Muri_Mockup.png"),
      require("../assets/Il-Ritocco-Muri-Label.png"),
    ],    
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "Embark on a visual journey with the captivating label design for Dupli-Color’s “Il Ritocco Muri” spray product. My goal was to create an eye-catching and informative label that showcases the product’s exceptional ability to isolate and cover wall stains, preparing surfaces for painting.",
      <br key={0}/>,
      <br key={1}/>,
      "Drawing inspiration from the successful “Il Coprimacchie” project in my portfolio, we established a seamless link between the two products through minimalistic design elements and carefully chosen imagery. By focusing on relevant messages, we crafted a label that effortlessly conveys the essence of both products.",
      <br key={2}/>,
      <br key={3}/>,
      "Through harmonious graphic elements, our design ensures that important features and benefits are emphasized, guiding your attention to the most vital aspects. Prepare to witness the transformation of your walls unfold before your eyes.",
    ],
  },

  {
    id: 13,
    url: "todolist-app-web-application",
    title: "ToDoList App: Web Application",
    location: "Milano, Italy",
    tag: [
      "Web Development"
    ],
    client: null,
    avatar: [require("../assets/ToDoList-App-Image.png")],
    images: [require("../assets/ToDoList-App-Image.png")],    
    graphicToolsUsed: [
    ],
    codingToolsUsed: [
      "HTML",
      "CSS",
      "NodeJS",
      "Javascript",
      "MongoDB",
      "Git",
    ],
    // toolsUsed: [
    //   {
    //     name: "HTML",
    //     icon: require("../assets/HTML5_logo_and_wordmark.svg").default,
    //   },
    //   {
    //     name: "CSS",
    //     icon: require("../assets/CSS3_logo_and_wordmark.png"),
    //   },
    //   {
    //     name: "NODE",
    //     icon: require("../assets/Node.js_logo.svg").default,
    //   },
    //   {
    //     name: "JS",
    //     icon: require("../assets/Js.svg").default,
    //   },
    //   {
    //     name: "Git",
    //     icon: require("../assets/Git-logo.svg").default,
    //   },
    //   {
    //     name: "MongoDB",
    //     icon: require("../assets/MongoDB_Logo.svg").default,
    //   },
    // ],
    description: [
      <Link to="https://nice-pink-coypu-kilt.cyclic.app/" target="_blank" key={0}>
        Create your ToDoList!
      </Link>,
      <br key={1}/>,
      <br key={2}/>,
      "This project is a full-stack ToDoList web application that showcases my expertise in both frontend and backend development. With a focus on creating a seamless user experience, I developed the application following my personal brand guidelines and utilized GitHub for version control.",
      <br key={3}/>,
      <br key={4}/>,
      "The web app allows users to create and manage task groups with ease. Using JavaScript, Node.js, and Express, I set up a server to handle routing and rendering of different pages. MongoDB Atlas, integrated with Mongoose, serves as the database for securely storing tasks. Additionally, I created a GitHub repository to safely update and make changes to the web app, ensuring a streamlined development process.",
      <br key={5}/>,
      <br key={6}/>,
      <Link to="https://github.com/marcoates/todolist" target="_blank" key={7}>
        Check the GitHub repo and take a look at the code!
      </Link>,
      <br key={8}/>,
      <br key={9}/>,
      "Through the Cyclic deployment platform, I deployed the web app, making it accessible to users. Adding a custom task group is as simple as typing /[TASK GROUP NAME] at the end of the URL, enabling users to create personalized task groups. Specific tasks added to a custom group are stored exclusively within that group and are not displayed in other groups.",
      <br key={10}/>,
      <br key={11}/>,
      "For the frontend development, I designed visually appealing and responsive elements using HTML, CSS, and JavaScript. The seamless integration of frontend and backend components ensures a smooth and intuitive user experience across the ToDoList web app.",
      <br key={12}/>,
      <br key={13}/>,
      "Overall, this project highlights my proficiency in full-stack development, encompassing frontend design, server setup using JavaScript, Node.js, and Express, integration with MongoDB Atlas and Mongoose for data storage, deployment via Cyclic, and the use of a GitHub repository for version control. The ToDoList web app empowers users to efficiently manage tasks through dynamic task groups, providing a flexible and organized task management system.",
    ],
  },

  {
    id: 12,
    url: "dupli-color-il-copri-macchie-product-label",
    title: "Dupli-Color Il Copri Macchie: Product Label",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "European Aerosols",
    avatar: [require("../assets/Il-Coprimacchie_Mockup.jpg")],
    logoImages: [],
    images: [
      require("../assets/Il-Coprimacchie_Mockup.jpg"),
      require("../assets/Il-Coprimacchie_Label.jpeg"),
    ],
    biggerImages: [],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "The design goal for this project was to create an eye-catching and informative label for Dupli-Color’s “Il Copri Macchie” spray product, which is a white paint that isolates and covers any type of stain on the wall, in order to prepare the surface to be painted.",
      <br key={0}/>,
      <br key={1}/>,
      "To achieve this, a logo icon was created to represent the “Macchia Block” formula, which effectively make this paint able to blocks stains and even mold from returning on surfaces.",
      <br key={2}/>,
      <br key={3}/>,
      "Relevant images were also used on the label to complement the information provided together with the design that puts all the answers customers may need directly on the facing of the products.",
    ],
  },

  {
    id: 11,
    url: "breis-beats-logo",
    title: "Breis Beats: Logo",
    location: "Milano, Italy",
    tag: [
      "Branding",
      "Illustration"
    ],
    client: "Breis Beats",
    avatar: [require("../assets/Breis-Logo_Negative.jpg")],
    images: [
      require("../assets/Breis-Logo_Positive.png"),
      require("../assets/Breis-Logo_Negative.jpg"),
      [require("../assets/Breis_Youtube.png")]
    ],
    graphicToolsUsed: [
      "Procreate",
      "Adobe Illustrator",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Procreate",
    //     icon: require("../assets/Procreate-icon.png"),
    //   },
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "I recently had the pleasure of creating a logo for my friend Breis, who produces some seriously sick rap beats.He wanted a simple, signature logo that would be easily recognizable, so I took his signature and transformed it into a sleek design using Adobe Illustrator.",
      <br key={0}/>,
      <br key={1}/>,
      "If you’re curious to see the final product in action, ",
      <Link to="https://www.youtube.com/@breis_official/videos" target="_blank">
        check out his YouTube channel
      </Link>,
      " and listen to some of his incredible productions. I’m sure you won’t be disappointed!",
    ],
  },

  {
    id: 10,
    url: "green-magic-cbd-packaging-illustrations",
    title: "Green Magic: CBD Packaging Illustrations",
    location: "Milano, Italy",
    tag: [
      "Branding", "Illustration"
    ],
    client: "Green Magic",
    avatar: [
      require("../assets/CBD-Packaging-llustrations_Multiple_Mockup.jpeg"),
    ],
    images: [
      require("../assets/CBD-Packaging-llustrations_Multiple_Mockup.jpeg"),
      require("../assets/CBD-Packaging-llustrations_Mockup-Single-Lemon.jpeg"),
      require("../assets/CBD-Packaging-llustrations_Mockup-Single-Strawberry.jpeg"),
      require("../assets/CBD-Packaging-llustrations_Mockup-Single-Gorilla.jpeg"),
      require("../assets/CBD-Packaging-llustrations_Mockup-Single-Doctor-Seed.jpeg"),
      require("../assets/CBD-Packaging-llustrations_Mockup-Single-Trinciato.jpeg"),
      require("../assets/CBD-Packaging-llustrations_Mockup-Single-Back.jpeg"),
    ],
    graphicToolsUsed: [
      "Procreate",
      "Adobe Illustrator",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Procreate",
    //     icon: require("../assets/Procreate-icon.png"),
    //   },
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "In this project I created a pack of illustrations for my friend Italo, who owns Green Magic, a farm in Milan specializing in CBD products.",
      <br key={0}/>,
      <br key={1}/>,
      "He wanted a set of illustrations for his product packaging that would be fun, cartoonish, and memorable, so I used bold lines and flat colors to create a composition that would evoke a lighthearted and playful mood.",
      <br key={2}/>,
      <br key={3}/>,
      "I’m thrilled to say that Italo was delighted with the final result, and he even plans to use the cool mockups I created for his upcoming ecommerce. It’s always great to see a happy client, and I’m proud to have created something that will help Green Magic stand out in the crowded CBD market."
    ],
  },

  {
    id: 9,
    url: "zampa-store-graphic-design-projects",
    title: "Zampa Store: Graphic Design Projects",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "ZAMPA Store",
    avatar: [
      require("../assets/Zampa-Store-Graphic-Design-Projects_Business-Card-1.jpeg"),
    ],
    images: [
      require("../assets/Zampa-Store-Graphic-Design-Projects_Flyer-1.jpeg"),
      require("../assets/Zampa-Store-Graphic-Design-Projects_Flyer-2.jpeg"),
      require("../assets/Zampa-Store-Graphic-Design-Projects_Flyer-3.jpeg"),
      require("../assets/Zampa-Store-Graphic-Design-Projects_Business-Card-2.jpeg"),
      require("../assets/Zampa-Store-Graphic-Design-Projects_Business-Card-3.jpeg"),
      require("../assets/Zampa-Store-Graphic-Design-Projects_Business-Card-1.jpeg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    // ],
  
    description: [
      "I had the pleasure of working on two projects for ZAMPA Store, a pet store based in Milan, Italy.",
      <br key={0}/>,
      <br key={1}/>,
      "For the flyer, my main objective was to create a visually striking design that immediately communicated the store’s specialization in pet products. I employed bold graphics and colors consistent with ZAMPA Store’s brand identity, ensuring a strong visual impact. The design was crafted to be inclusive and appealing to a wide audience, emphasizing the store’s offerings. I’m pleased with the outcome and confident that the flyer will help ZAMPA Store attract new customers and enhance brand recognition.",
      <br key={2}/>,
      <br key={3}/>,
      "In the case of the business cards, my goal was to design cards that not only reflected the store’s specialization but also had a memorable visual appeal. I incorporated the store’s logo and colors from the shop's interior, merging them with bold graphics. These elements were chosen to align with ZAMPA Store’s brand identity and appeal to a broad customer base. Notably, an illustration of a dog, a key element requested by the client, was included on the internal part of the business card to add a personalized touch. I am satisfied with the final design and believe that these business cards will significantly contribute to boosting brand recognition for ZAMPA Store.",
      <br key={4}/>,
      <br key={5}/>,
      "Both projects were crafted with care and attention to detail, ensuring they resonate with ZAMPA Store’s diverse customer base while maintaining a strong connection to the store’s unique identity."
    ],
  },

  {
    id: 8,
    url: "drv-logo",
    title: "DRV: Logo",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "DRV Trasporti",
    avatar: [
      require("../assets/DRV_Logo.png"),
    ],
    images: [
      require("../assets/DRV-Mockup-1.jpeg"),
      require("../assets/DRV_Logo.png"),
      require("../assets/DRV-Mockup-2.png"),
      require("../assets/DRV-Photo-1.jpeg"),
      require("../assets/DRV-Photo-2.jpeg"),
      require("../assets/DRV-Photo-3.jpeg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "For DRV Trasporti, a transport company based in Milan, Italy, I created a logo that would represent the company professionally and effectively.",
      <br key={0}/>,
      <br key={1}/>,
      "Together with the client, we collaborated on the design, deciding on the logo’s shape and colors. My focus was on creating a design that could be easily recognizable and adapted to different surfaces. It was important for the logo to immediately convey what the company does, so I aimed to make it clear and straightforward. I’m grateful for the opportunity to contribute to DRV Trasporti’s success.",
    ],
  },

  {
    id: 7,
    url: "dupli-color-all-season-spray-graphics",
    title: "Dupli-Color: All Season Spray Graphics",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "European Aerosols",
    avatar: [
      require("../assets/All-Season-Flyer-Mockup-1.jpeg"),
    ],
    images: [
      require("../assets/All-Season-Flyer-Mockup-1.jpeg"),
      require("../assets/All-Season-Flyer-Mockup-2.jpeg"),
      require("../assets/All-Season-Flyer-Mockup-3.jpeg"),
      require("../assets/All-Season_Rendering.png"),
      require("../assets/All-Season_Crowner.png"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "For the European Aerosols Design Project, my task was to create a comprehensive promotional package for their DUPLI-COLOR sub-brand’s star product, the All Season spray paint. Recognized as the finest external-use spray paint on the market, my challenge was to design a compelling visual representation that would effectively communicate its unique features and advantages.",
      <br key={0}/>,
      <br key={1}/>,
      "Taking a strategic approach, I aimed to highlight the product's safety, versatility, and efficacy. The design concept I crafted was inspired by the great outdoors, featuring a backdrop reminiscent of clouds, grass, and sunshine, evoking a sense of outdoor activities and enjoyment. To emphasize the product's safety for users of all ages, I incorporated a playful children's toy into the design.",
      <br key={2}/>,
      <br key={3}/>,
      "In addition to creating an eye-catching leaflet showcasing all available colors and product features, I extended my creativity to craft a detailed rendering displaying how the All Season spray paint assortment would appear inside a retail store. Utilizing my skills in Adobe Illustrator, I meticulously recreated the three-dimensional aspects of the subject, ensuring a lifelike and immersive representation of the product within the store environment. This rendering was complemented by a crowner I designed, featuring graphics that seamlessly integrated with the product-filled racks in stores. This cohesive visual package not only enhanced the product’s appeal but also provided a ready-made graphic pack, optimized for upselling the product.",
      <br key={4}/>,
      <br key={5}/>,
      "I am immensely proud of the final outcome of this project, aptly titled 'Dupli-Color: All Season Spray Graphics.' This comprehensive approach not only effectively promotes the All Season spray paint but also provides a visually appealing representation of how it can be showcased in retail spaces, ensuring maximum impact and consumer engagement for European Aerosols.",
    ],
  },

  {
    id: 6,
    url: "dupli-color-pricing-list-catalog",
    title: "Dupli-Color: Pricing List Catalog",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "European Aerosols",
    avatar: [
      require("../assets/Dupli-Color-Pricing-List-Catalog_Mockup-1.jpeg"),
    ],
    images: [
      require("../assets/Dupli-Color-Pricing-List-Catalog_Mockup-1.jpeg"),
      require("../assets/Dupli-Color-Pricing-List-Catalog_Mockup-2.jpeg"),
      require("../assets/Dupli-Color-Pricing-List-Catalog_Mockup-3.jpeg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
    description: [
      "In this project, I created a pricing list catalog for the European Aerosols’ sub-brand, DUPLI-COLOR. The challenge was to design a graphic concept that could showcase all products along with their pricing, descriptions, and images in a visually appealing and easy-to-read format.",
      <br key={0}/>,
      <br key={1}/>,
      "To achieve this, I used the corporate colours and maintained brand consistency to create a cohesive link between this catalog and the product catalog. I also made sure to design the layout in a way that would be both functional and exciting for customers to browse through.",
      <br key={2}/>,
      <br key={3}/>,
      "I’m happy with the final result, and believe that the pricing list catalog will help customers quickly and easily find the products they’re looking for and make informed purchasing decisions.",
    ],
  },

  {
    id: 5,
    url: "dupli-color-products-catalog",
    title: "Dupli-Color: Products Catalog",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "European Aerosols",
    avatar: [
      require("../assets/Dupli-Color-Product-Catalog_Mockup-2.jpeg"),
    ],
    images: [
      require("../assets/Dupli-Color-Product-Catalog_Mockup-1.jpeg"),
      require("../assets/Dupli-Color-Product-Catalog_Mockup-2.jpeg"),
      require("../assets/Dupli-Color-Product-Catalog_Mockup-3.jpeg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Indesign",
    //     icon: require("../assets/Adobe_InDesign_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
  
    description: [
      "This is a product catalog I designed for European Aerosols’ sub-brand DUPLI-COLOR. My goal was to create a visually appealing layout that effectively showcases the various products’ features, color shades, and descriptions using high-quality images.",
      <br key={0}/>,
      <br key={1}/>,
      "To maintain brand consistency, I incorporated the corporate colors throughout the catalog and established a connection between this catalog and the pricing list catalog. Overall, the result is a comprehensive and engaging catalog that effectively communicates the unique qualities of each product.",
    ],
  },

  {
    id: 4,
    url: "settimo-tricot-club-logo",
    title: "Settimo Tricot Club: Logo",
    location: "Milano, Italy",
    tag: [
      "Branding"
    ],
    client: "Settimo Tricot Club",
    avatar: [
      require("../assets/Settimo-Tricot-Club_Mockup-1.jpg"),
    ],
    images: [
      require("../assets/Settimo-Tricot-Club_Logo.png"),
      require("../assets/Settimo-Tricot-Club_Mockup-1.jpg"),
      require("../assets/Settimo-Tricot-Club_Mockup-2.jpg"),
      require("../assets/Settimo-Tricot-Club_Mockup-3.jpg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Adobe Photoshop",
    //     icon: require("../assets/Adobe_Photoshop_CC_icon.svg").default,
    //   },
    // ],
  
    description: [
      "For Settimo Tricot Club, a knitting club in Milan, I designed a flyer that captures the essence of the club through a recognizable image of a ball of wool. The vintage colors used in the design evoke a sense of nostalgia for the original and ancient art of knitting, creating a connection between the past and present. The overall goal was to create an eye-catching and memorable graphic that immediately communicates the essence of the club."
    ],
  },

  {
    id: 3,
    url: "urmet-iuvs-plus-app",
    title: "Urmet: Iuvs Plus App",
    location: "Milano, Italy",
    tag: [
      "UI"
    ],
    client: "Urmet",
    avatar: [
      require("../assets/Urmet-Iuvs-Plus_Logo.png"),
    ],
    images: [

    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Sketch",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Sketch",
    //     icon: require("../assets/Sketch_Logo.svg").default,
    //   },
    // ],
  
    description: [
      "As a UI designer, I played a crucial role in developing an innovative app for Urmet, an Italian company specializing in high-value building communication and security systems. Working closely with the UX Designer, I brought my expertise in UI design to create visually stunning graphics and interfaces that met the client’s requirements.",
      <br key={0}/>,
      <br key={1}/>,
      "My responsibilities included designing all the icons and buttons for Urmet’s app “Iuvs Plus,” which is used to control home automation. To ensure that the end product was top-notch, I maintained constant communication with the developers despite working remotely.",
      <br key={2}/>,
      <br key={3}/>,
      "Throughout the project, I prioritized the user experience by implementing intuitive interfaces and easy-to-use navigation. I also incorporated the client’s brand identity and color scheme, resulting in a cohesive and professional-looking design.",
      <br key={4}/>,
      <br key={5}/>,
      "In the end, the app received positive feedback from both the client and end-users for its visually appealing and user-friendly design. My contribution as a UI designer played a pivotal role in delivering a cutting-edge product that met the client’s expectations."
    ],
  },

  {
    id: 2,
    url: "pixxa-challenge-blackboard-and-instructions-flyer",
    title: "Pixxa: Challenge Blackboard and Instructions Flyer",
    location: "London, UK",
    tag: [
      "Branding",
      "Illustration"
    ],
    client: "Pixxa Ltd",
    avatar: [
      require("../assets/Pixxa-Challenge_Board_Photo-1.jpeg"),
    ],
    images: [
      require("../assets/Pixxa-Challenge_Board.png"),
      require("../assets/Pixxa-Challenge_Rules-Flyer.png"),
      require("../assets/Pixxa-Challenge_Board_Photo-1.jpeg"),
      require("../assets/Pixxa-Challenge_Board_Photo-2.jpeg"),
      require("../assets/Pixxa-Challenge_Rules-Flyer_Photo-1.jpeg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Procreate",
    //     icon: require("../assets/Procreate-icon.png"),
    //   },
    // ],
  
    description: [
      "I created this graphic for PIXXA Ltd, a pizza by-the-slice restaurant based in London.",
      <br key={0}/>, <br key={1}/>,
      "The graphic consists of a set of icons, characters, and graphics designed to represent the PIXXA Challenge concept. This challenge invites customers to eat 6 slices of PIXXA within 9 minutes, beating the record displayed on the board, in order to win a free 6 slices of PIXXA.",
      <br key={2}/>, <br key={3}/>,
      "To achieve a rustic effect that complements the restaurant’s decor, I printed the graphic on vinyl using a plotter and then applied it to a black-painted wooden board. Flyers were printed on plasticized paper, making them a cost-effective promotional tool that customers could take home with them."
    ],
  },

  {
    id: 1,
    url: "pixxa-journey-blackboard",
    title: "Pixxa: Journey Blackboard",
    location: "London, UK",
    tag: [
      "Branding",
      "Illustration"
    ],
    client: "Pixxa Ltd",
    avatar: [
      require("../assets/Pixxa-Journey_Board_Photo-1.jpeg"),
    ],
    images: [
      require("../assets/Pixxa-Journey_Board.png"),
      require("../assets/Pixxa-Journey_Board_Photo-1.jpeg"),
      require("../assets/Pixxa-Journey_Board_Photo-2.jpeg"),
      require("../assets/Pixxa-Journey_Board_Photo-3.jpeg"),
    ],
    graphicToolsUsed: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
    ],
    codingToolsUsed: [
    ],
    // toolsUsed: [
    //   {
    //     name: "Adobe Illustrator",
    //     icon: require("../assets/Adobe_Illustrator_CC_icon.svg").default,
    //   },
    //   {
    //     name: "Procreate",
    //     icon: require("../assets/Procreate-icon.png"),
    //   },
    // ],
  
    description: [
      "I designed a graphic for PIXXA, a pizza by-the-slice restaurant based in London, which showcases every step of the pizza making journey and recipe.",
      <br key={0}/>, <br key={1}/>,
      "The graphic set includes icons that depict the process of making the dough in the kitchen to the final pizza on the plate. I used a plotter to print the graphic on vinyl and then stuck it onto a black painted wooden board to create a rustic blackboard effect that perfectly suits the ambiance of a pizza place.",
    ],
  },

];
