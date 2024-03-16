"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CL: () => (/* reexport */ Components_About),
  H2: () => (/* reexport */ Components_Brand),
  ah: () => (/* reexport */ Profile_ERC20),
  By: () => (/* reexport */ Components_Faq),
  $_: () => (/* reexport */ Components_Footer),
  h4: () => (/* reexport */ Components_Header),
  DH: () => (/* reexport */ Components_HeroSection),
  NZ: () => (/* reexport */ Profile_Profile),
  VT: () => (/* reexport */ Profile_ProfileMain),
  Ke: () => (/* reexport */ Profile_SideBar),
  HY: () => (/* reexport */ Components_Swap),
  iA: () => (/* reexport */ Profile_Table),
  lI: () => (/* reexport */ Profile_TableTwo),
  FE: () => (/* reexport */ Profile_Transfer),
  Iw: () => (/* reexport */ Profile_UserProfile),
  cI: () => (/* reexport */ Components_Welcome)
});

// UNUSED EXPORTS: Feature, Information, Staking

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./Components/Header.jsx
// import React from "react";
// const Header = () => {
//   const menuList = [
//     {
//       name: "Home",
//       link: "/"
//     },
//     {
//       name: "ERC20",
//       link: "/create"
//     },
//     {
//       name: "Contact Us",
//       link: "#"
//     },
//     {
//       name: "Blog",
//       link: "#"
//     },
//   ];
//   return (
//     <header class="header-one">
//       <div class="header-menu-area header-area">
//         <div class="container">
//           <div class="row">
//             <div class="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
//               <div class="logo">
//                 <a href="/">
//                   <img src="img/logo/logo2.png" alt="" />
//                 </a>
//               </div>
//             </div>
//             <div class="col-xl-10 col-lg-10 col-md-9">
//               <div class="header-right">
//                 <a href="#" class="top-btn coin-btn">
//                   Buy token
//                 </a>
//               </div>
//               <div class="header_menu f-right">
//                 <nav id="mobile-menu">
//                   <ul class="new-nav-class" class="main-menu">
//                     {menuList.map((menu, i) => (
//                       <li class="resulta" key={i+1}>
//                         <a href={menu.link}>{menu.name}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
//CHATGPT CODE BELOW


const Header = ()=>{
    const menuList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "ERC20",
            link: "/create"
        },
        {
            name: "Contact Us",
            link: "#"
        },
        {
            name: "Blog",
            link: "#"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        class: "header-one",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "header-menu-area header-area",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "col-xl-2 col-lg-2 col-md-3 d-flex align-items-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/logo/logo2.png",
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "col-xl-10 col-lg-10 col-md-9",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "header-right",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        class: "top-btn coin-btn",
                                        children: "Buy token"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "header_menu f-right",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                        id: "mobile-menu",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            class: "new-nav-class main-menu",
                                            children: menuList.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    class: "resulta",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: menu.link,
                                                        children: menu.name
                                                    })
                                                }, i + 1))
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Components_Header = (Header);

;// CONCATENATED MODULE: ./Components/Footer.jsx
// import React from "react";
// const Footer = () => {
//   const coinList = [
//     "Ripple coin",
//     "Bitcoin",
//     "Ethereum",
//     "Light coin",
//     "Coin base",
//     "Skrill card",
//   ];
//   const menuList = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "ERC20",
//       link: "#",
//     },
//     {
//       name: "Contact Us",
//       link: "#",
//     },
//     {
//       name: "Blog",
//       link: "#",
//     },
//     {
//       name: "Detail",
//       link: "#",
//     },
//   ];
//   return (
//     <footer class="footer1">
//       <div class="footer-area">
//         <div class="container">
//           <div class="row">
//             <div class="col-xl-4 col-lg-4 col-md-4">
//               <div class="footer-content logo-footer">
//                 <div class="footer-head">
//                   <div class="footer-logo">
//                     <a href="#">
//                       <img src="img/logo/logo2.png" alt="" />
//                     </a>
//                   </div>
//                   <div class="footer-icons">
//                     <ul>
//                       {[1, 2, 3, 4, 5].map((social, i) => {
//                         <li>
//                           <a href="#">
//                             <img src={`img/about/midea${i + 1}.png`} alt="" />
//                           </a>
//                         </li>
//                       })}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-xl-4 col-lg-4 col-md-4">
//               <div class="footer-content rs-mar-0">
//                 <div class="footer-head">
//                   <h4>Payments option</h4>
//                   <ul class="footer-list">
//                     {coinList.map((coin,i) => (
//                       <li>
//                         <a>{coin}</a>
//                       </li> 
//                     ))}
//                   </ul>
//                   <ul class="footer-list">
//                     {menuList.map((menu, i) => (
//                       <li>
//                         <a href={menu.link}>{menu.name}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div class="col-xl-4 col-lg-4 col-md-4">
//               <div class="footer-content last-content rs-mar-0">
//                 <div class="footer-head">
//                   <h4>Subscribe</h4>
//                   <p>
//                     Are you looking for professional advice for your new 
//                     business. Are you looking for professional advice.
//                   </p>
//                   <div class="subs-feilds">
//                     <div class="subscribe-input">
//                       <input 
//                       type="email"
//                       class="email form-control width-80"
//                       id="sus_email"
//                       placeholder="Type Email"
//                       />
//                       <button
//                       type="submit"
//                       id="sus_submit"
//                       class="subs-btn coin-btn"
//                       >
//                         Subscribe
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="footer-area-bottom">
//         <div class="container">
//           <div class="row">
//             <div class="col-xl-6 col-lg-6 col-md-6">
//               <div class="copyright">
//                 <p>
//                   Copyright © 2023
//                   <a href="#">@thecockchaintech</a> All Rights Reserved.
//                 </p>
//               </div>
//             </div>
//             <div class="col-xl-6 col-lg-6 col-md-6">
//               <div class="footer-menu">
//                 <ul>
//                   {["About", "Terms & Conditions", "Privacy"].map((el, i) => (
//                     <li>
//                       <a>{el}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;


const Footer = ()=>{
    const coinList = [
        "Ripple coin",
        "Bitcoin",
        "Ethereum",
        "Lite coin",
        "Coin base",
        "Skrill card"
    ];
    const menuList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "ERC20",
            link: "#"
        },
        {
            name: "Contact Us",
            link: "#"
        },
        {
            name: "Blog",
            link: "#"
        },
        {
            name: "Detail",
            link: "#"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        class: "footer1",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "footer-area",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-xl-4 col-lg-4 col-md-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "footer-content logo-footer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "footer-head",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "footer-logo",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "img/logo/logo2.png",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "footer-icons",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((social, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: `img/about/midea${i + 1}.png`,
                                                                    alt: ""
                                                                })
                                                            })
                                                        }))
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-xl-4 col-lg-4 col-md-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "footer-content rs-mar-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "footer-head",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Payments option"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                class: "footer-list",
                                                children: coinList.map((coin, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            children: coin
                                                        })
                                                    }))
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                class: "footer-list",
                                                children: menuList.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: menu.link,
                                                            children: menu.name
                                                        })
                                                    }))
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-xl-4 col-lg-4 col-md-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "footer-content last-content rs-mar-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "footer-head",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Subscribe"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "Are you looking for professional advice for your new business. Are you looking for professional advice."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                class: "subs-feilds",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    class: "subscribe-input",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "email",
                                                            class: "email form-control width-80",
                                                            id: "sus_email",
                                                            placeholder: "Type Email"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            type: "submit",
                                                            id: "sus_submit",
                                                            class: "subs-btn coin-btn",
                                                            children: "Subscribe"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "footer-area-bottom",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-xl-6 col-lg-6 col-md-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "copyright",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            "Copyright \xa9 2023",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: "@thecockchaintech"
                                            }),
                                            " All Rights Reserved."
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                class: "col-xl-6 col-lg-6 col-md-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        children: [
                                            "About",
                                            "Terms & Conditions",
                                            "Privacy"
                                        ].map((el, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    children: el
                                                })
                                            }))
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Components_Footer = (Footer);

;// CONCATENATED MODULE: ./Components/About.jsx
// import React from "react";
// const About = () => {
//   const features = [
//     {
//       title: "Decentralized System",
//       description:
//         "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
//     },
//     {
//       title: "Blockchain Wallet",
//       description:
//         "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
//     },
//     {
//       title: "Web3 Project",
//       description:
//         "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
//     },
//   ];
//   return (
//     <div class="about-area bg-color-3 fix area-padding">
//       <div class="container">
//         <div class="row d-flex flex-wrap align-items-center">
//           <div class="col-xl-6 col-lg-6 col-md-12">
//             <div class="about-content">
//               <div class="about-images wow fadeInLeft" data-wow-delay="0.7s">
//                 <img src="img/about/ab2.png" alt="" />
//                 <div class="rotmate-image rotateme">
//                   <img src="img/about/circle.png" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-6 col-lg-6 col-md-12">
//             <div class="about-all">
//               <div class="about-inner">
//                 {features.map((feature, i) => (
//                   <div
//                   class="single-about wow fadeInUp"
//                   data-wow-delay={`0.${i + 3}s`}
//                   >
//                     <span class="about-icon">0{i +1}</span>
//                     <div class="support-text">
//                       <h4>
//                         <a href="#">{feature.title}</a>
//                       </h4>
//                       <p>{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;


const About = ()=>{
    const features = [
        {
            title: "Decentralized System",
            description: "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
        },
        {
            title: "Blockchain Wallet",
            description: "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
        },
        {
            title: "Web3 Project",
            description: "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "about-area bg-color-3 fix area-padding",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row d-flex flex-wrap align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "about-content",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "about-images wow fadeInLeft",
                                "data-wow-delay": "0.7s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/about/ab2.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "rotmate-image rotateme",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "img/about/circle.png",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "about-all",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "about-inner",
                                children: features.map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "single-about wow fadeInUp",
                                        "data-wow-delay": `0.${i + 3}s`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "about-icon",
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "support-text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: feature.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: feature.description
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i))
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_About = (About); //new

;// CONCATENATED MODULE: ./Components/Brand.jsx
// import React from "react";
// const Brand = () => {
//   return (
//     <div class="brand-area bg-color-3">
//       <div class="container">
//         <div class="row">
//           <div class="new_margin col-xl-12 col-lg-12 col-md-12">
//             <div class="new_flex brand-content">
//               {[1, 2, 3, 4, 5, 6, 7].map((image, i) => (
//                 <div class="single-brand-item">
//                   <a>
//                     <img
//                     className="new_image_with" 
//                     src={`img/brand/${i + 1}.png`} 
//                     alt="" 
//                     />
//                   </a>
//                   </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Brand;


const Brand = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "brand-area bg-color-3",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "new_margin col-xl-12 col-lg-12 col-md-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "new_flex brand-content",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7
                        ].map((image, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "single-brand-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "new_image_with",
                                        src: `img/brand/${i + 1}.png`,
                                        alt: ""
                                    })
                                })
                            }, i))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Components_Brand = (Brand); //new

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(847);
;// CONCATENATED MODULE: ./Components/Faq.jsx
// import React from "react";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// const Faq = () => {
//   return (
//     <div class="service-area bg-color area-padding-2">
//       <div class="container">
//         <div class="row">
//           <div class="col-xl-4 col-lg-4 col-md-6">
//             <div class="single-service text-service service-title">
//               <h2>
//                 Best <span class="color-text-bold">services</span> for clients
//               </h2>
//               <p>
//                 We are providing best services to our clients with latest
//                 technology.
//               </p>
//               <a class="left-btn coin-btn" href="services.html">
//                 All Services
//               </a>
//             </div>
//           </div>
//           <div class="col-xl-4 col-lg-4 col-md-6">
//             <div class="single-service wow fadeInUp" data-wow-delay="0.3s">
//               <div class="service-icon">
//                 <img src="img/icon/s1.png" alt="" />
//               </div>
//               <div class="service-inner">
//                 <div class="service-content">
//                   <h4>Nfts Product</h4>
//                   <p>
//                     We are providing best services to our clients with latest
//                     technology.
//                     the.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-4 col-lg-4 col-md-6">
//             <div
//             class="single-service text-service wow fadeInUp"
//             data-wow-delay="0.5s"
//             >
//               <div class="service-icon">
//                 <img src="img/icon/s2.png" alt="" />
//               </div>
//               <div class="service-inner">
//                 <div class="service-content">
//                   <h4>Stacking</h4>
//                   <p>
//                     We are providing best services to our clients with latest
//                     technology.
//                     the.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-4 col-lg-4 col-md-6">
//             <div class="single-service wow fadeInUp" data-wow-delay="0.7s">
//               <div class="service-icon">
//                 <img src="img/icon/s3.png" alt="" />
//               </div>
//               <div class="service-inner">
//                 <div class="service-content">
//                   <h4>Launchpad</h4>
//                   <p>
//                     We are providing best services to our clients with latest
//                     technology.
//                     the.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-4 col-lg-4 col-md-6">
//             <div 
//             class="single-service text-service wow fadeInUp" 
//             data-wow-delay="0.3s"
//             >
//               <div class="service-icon">
//                 <img src="img/icon/s4.png" alt="" />
//               </div>
//               <div class="service-inner">
//                 <div class="service-content">
//                   <h4>Ecommerce solutions</h4>
//                   <p>
//                     We are providing best services to our clients with latest
//                     technology.
//                     the.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-4 col-lg-4 col-md-6">
//             <div class="single-service wow fadeInUp" data-wow-delay="0.5s">
//               <div class="service-icon">
//                 <img src="img/icon/s5.png" alt="" />
//               </div>
//               <div class="service-inner">
//                 <div class="service-content">
//                   <h4>Token release</h4>
//                   <p>
//                     We are providing best services to our clients with latest
//                     technology.
//                     the.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Faq;



const Faq = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "service-area bg-color area-padding-2",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "single-service text-service service-title",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    children: [
                                        "Best ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "color-text-bold",
                                            children: "services"
                                        }),
                                        " for clients"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "We are providing best services to our clients with latest technology."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "left-btn coin-btn",
                                    href: "services.html",
                                    children: "All Services"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "single-service wow fadeInUp",
                            "data-wow-delay": "0.3s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icon/s1.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Nfts Product"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "We are providing best services to our clients with latest technology. the."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "single-service text-service wow fadeInUp",
                            "data-wow-delay": "0.5s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icon/s2.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Stacking"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "We are providing best services to our clients with latest technology. the."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "single-service wow fadeInUp",
                            "data-wow-delay": "0.7s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icon/s3.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Launchpad"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "We are providing best services to our clients with latest technology. the."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "single-service text-service wow fadeInUp",
                            "data-wow-delay": "0.3s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icon/s4.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Ecommerce solutions"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "We are providing best services to our clients with latest technology. the."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "single-service wow fadeInUp",
                            "data-wow-delay": "0.5s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "img/icon/s5.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "service-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "Token release"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "We are providing best services to our clients with latest technology. the."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Faq = (Faq); //new

;// CONCATENATED MODULE: ./Components/Feature.jsx


const Feature = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Feature"
    });
};
/* harmony default export */ const Components_Feature = ((/* unused pure expression or super */ null && (Feature)));

;// CONCATENATED MODULE: ./Components/HeroSection.jsx
// import React from "react";
// const HeroSection = () => {
//   return (
//     <div class="intro-area intro-area-2">
//       <div class="bg-wrapper">
//         <img src="img/background/bg2.jpg" alt="" />
//       </div>
//       <div class="intro-content">
//         <div class="slider-content">
//           <div class="container">
//             <div class="row d-flex flex-wrap align-items-center">
//               <div class="col-xl-6 col-lg-6 col-md-6">
//                 <div class="slide-all-text">
//                   <div class="layer-2 wow fadeInUp" data-wow-delay="0.3s">
//                     <h1 class="title-2">
//                       The blockchain{" "}
//                       <span class="color-text-bold">technology</span>for a
//                       brighter tomorrow{" "}
//                     </h1>
//                   </div>
//                   <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
//                     <a href="/create" class="ready-btn coin-btn">
//                       Get Started
//                     </a>
//                     <a href="/create" class="ready-btn color-btn last-btn">
//                       White Paper
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-xl-6 col-lg-6 col-md-6">
//                 <div class="slide-images wow fadeInUp" data-wow-delay="0.3s">
//                   <img src="img/slider/s1.png" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HeroSection;


const HeroSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "intro-area intro-area-2",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-wrapper",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "img/background/bg2.jpg",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "intro-content",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "slider-content",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row d-flex flex-wrap align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "slide-all-text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "layer-2 wow fadeInUp",
                                                "data-wow-delay": "0.3s",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                    className: "title-2",
                                                    children: [
                                                        "The blockchain",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "color-text-bold",
                                                            children: "technology"
                                                        }),
                                                        "for a brighter tomorrow",
                                                        " "
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "layer-3 wow fadeInUp",
                                                "data-wow-delay": "0.7s",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "/create",
                                                        className: "ready-btn coin-btn",
                                                        children: "Get Started"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "/create",
                                                        className: "ready-btn color-btn last-btn",
                                                        children: "White Paper"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "slide-images wow fadeInUp",
                                        "data-wow-delay": "0.3s",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "img/slider/s1.png",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Components_HeroSection = (HeroSection); //new

;// CONCATENATED MODULE: ./Components/Information.jsx


const Information = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Information"
    });
};
/* harmony default export */ const Components_Information = ((/* unused pure expression or super */ null && (Information)));

;// CONCATENATED MODULE: ./Components/Staking.jsx


const Staking = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Staking"
    });
};
/* harmony default export */ const Components_Staking = ((/* unused pure expression or super */ null && (Staking)));

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(750);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./Components/Swap.jsx
// import React, { useState } from "react";
// import { FitSettings } from "react-icons/fi";
// import { MdPowerSettingsNew } from "react-icons/md";
// import { BsBoxArrowDown, BsFillSendFill } from "react-icons/bs";
// const Swap = ({ nativeToken, transferNativeToken }) => {
//   const [token, setToken] = useState({
//     address: "",
//     tokenNo: "",
//   });
//   const handleTokenInfo = (fieldName, e) => {
//     setToken({ ...token, [fieldName]: e.target.value });
//   };
//   return (
//     <div class="swap-area bg-color-3 fix area-padding">
//       <div class="container">
//         <div class="row d-flex flex-wrap align-items-center">
//           <div class="col-xl-6 col-lg-6 col-md-6">
//             <div class="swap-inner">
//               <div class="swap-token left-headline">
//                 <div class="top-text-title">COIN SWAP</div>
//                 <h2>
//                   You can swap{" "}
//                   <span class="color-text-bold">Graphbit token</span> anytime
//                 </h2>
//                 <p>
//                   Blockchain opt in to the projects they genuinely want to work
//                   on.maintains the amount lines. When replacing a selection.
//                   help agencies to define. define their new business objectives
//                   and then Our consultants opt in to the projects they genuinely
//                   want to work on.{" "} 
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-6 col-lg-6 col-md-6">
//             <div class="money-send">
//               <div class="calculator-inner">
//                 <div class="single-cal">
//                   <div class="swap-top d-flex flex-wrap align-items-center">
//                     <div class="swap-left">
//                       <span>Token</span>
//                     </div>
//                     <div class="swap-right">
//                       <ul class="dashboard-right-menus">
//                         <li>
//                           <a href="#0" class="thumbs">
//                             <FitSettings />
//                           </a>
//                           <div class="notification-area left-part">
//                             <div class="notifacation-header">
//                               <span class="set-text">Native Token</span>
//                               <div class="swap-set">
//                                 <span>
//                                   Find detail of our ERC20 Native Token
//                                 </span>
//                                 <ul>
//                                   <li>
//                                     <a>{nativeToken?.name}</a>
//                                   </li>
//                                   <li>
//                                     <a>{nativeToken?.symbol}</a>
//                                   </li>
//                                   <li>
//                                     <a>Tol:   {nativeToken?.totalSupply}</a>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div class="swap-set slipege">
//                                 <span>Address: {nativeToken?.address}</span>
//                                 <ul>
//                                   <li>
//                                     <a>Bal: {nativeToken?.balance}</a>
//                                   </li>
//                                   <li>
//                                     <a>Dec: {nativeToken?.decimals}</a>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li>
//                           <a href="#0" class="author">
//                             <MdPowerSettingsNew />
//                           </a>
//                           <div class="notification-area side-part">
//                             <div class="author-body text-center">
//                               <span>
//                                 lorem,
//                                 lorem,
//                                 lorem,
//                                 lorem,
//                                 <br />
//                                 <a href="#">Buy Token</a>
//                               </span>
//                             </div>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div class="inner-form">
//                     <form action="#">
//                       <label>Address</label>
//                       <input 
//                       type="text"
//                       class="form-input"
//                       onChange={(e) => handleTokenInfo("address", e)}
//                       placeholder="address" 
//                       />
//                       <span>
//                         <BsFillSendFill />
//                       </span>
//                     </form>
//                   </div>
//                   <div class="middle-inti text-center">
//                     <a href="#">
//                       <BsBoxArrowDown />
//                     </a>
//                   </div>
//                   <div class="inner-form">
//                     <form action="#">
//                       <label>Amount</label>
//                       <input 
//                       onChange={(e) => handleTokenInfo("tokenNo", e)}
//                       type="text"
//                       class="form-input"
//                       placeholder="amount" 
//                       />{" "}
//                       <span>{nativeToken?.symbol} Token</span>
//                     </form>
//                   </div>
//                   <div class="inner-form-text">
//                     <div class="rate-text d-flex flex-wrap align-items-center">
//                       <span>Now, you can transfer your Native token</span>
//                     </div>
//                   </div>
//                   <button
//                   onClick={() => transferNativeToken(token)}
//                   class="cale-btn"
//                   >
//                     Transfer Token
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Swap;





const Swap = ({ nativeToken, transferNativeToken })=>{
    const [token, setToken] = (0,external_react_.useState)({
        address: "",
        tokenNo: ""
    });
    const handleTokenInfo = (fieldName, e)=>{
        setToken({
            ...token,
            [fieldName]: e.target.value
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "swap-area bg-color-3 fix area-padding",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row d-flex flex-wrap align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "swap-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "swap-token left-headline",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "top-text-title",
                                        children: "COIN SWAP"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                        children: [
                                            "You can swap",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "color-text-bold",
                                                children: "Graphbit token"
                                            }),
                                            " ",
                                            "anytime"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            "Blockchain opt in to the projects they genuinely want to work on.maintains the amount lines. When replacing a selection. help agencies to define. define their new business objectives and then Our consultants opt in to the projects they genuinely want to work on.",
                                            " "
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "money-send",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "calculator-inner",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-cal",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "swap-top d-flex flex-wrap align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "swap-left",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Token"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "swap-right",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "dashboard-right-menus",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#0",
                                                                        className: "thumbs",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(fi_.FiSettings, {})
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "notification-area left-part",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "notifacation-header",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "set-text",
                                                                                    children: "Native Token"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "swap-set",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                            children: "Find detail of our ERC20 Native Token"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                                        children: nativeToken?.name
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                                        children: nativeToken?.symbol
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                                        children: [
                                                                                                            "Tol: ",
                                                                                                            nativeToken?.totalSupply
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "swap-set slipege",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                            children: [
                                                                                                "Address: ",
                                                                                                nativeToken?.address
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                                        children: [
                                                                                                            "Bal: ",
                                                                                                            nativeToken?.balance
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                                                        children: [
                                                                                                            "Dec: ",
                                                                                                            nativeToken?.decimals
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#0",
                                                                        className: "author",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(md_.MdPowerSettingsNew, {})
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "notification-area side-part",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "author-body text-center",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                children: [
                                                                                    "lorem, lorem, lorem, lorem, ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "Buy Token"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "inner-form",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                action: "#",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        children: "Address"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        className: "form-input",
                                                        onChange: (e)=>handleTokenInfo("address", e),
                                                        placeholder: "address"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFillSendFill, {})
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "middle-inti text-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(bs_.BsBoxArrowDown, {})
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "inner-form",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                action: "#",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        children: "Amount"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        onChange: (e)=>handleTokenInfo("tokenNo", e),
                                                        type: "text",
                                                        className: "form-input",
                                                        placeholder: "amount"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            nativeToken?.symbol,
                                                            " Token"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "inner-form-text",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "rate-text d-flex flex-wrap align-items-center",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Now, you can transfer your Native token"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>transferNativeToken(token),
                                            className: "cale-btn",
                                            children: "Transfer Token"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Swap = (Swap); //new

;// CONCATENATED MODULE: ./Components/Welcome.jsx
// import React from "react";
// const Welcome = () => {
//   return (
//     <div class="welcome-area bg-color-4 fix area-padding-2">
//       <div class="container">
//         <div class="row d-flex flex-wrap align-items-center">
//           <div class="col-xl-6 col-lg-6 col-md-12">
//             <div class="row">
//               <div class="col-xl-6 col-lg-6 col-md-6">
//                 <div
//                 class="well-services first-well wow fadeInUp"
//                 data-wow-delay="0.3s"
//                 >
//                   <div class="services-img">
//                     <a class="big-icon" href="#">
//                       <img src="img/icon/t1.png" alt="" />
//                     </a>
//                   </div>
//                   <div class="main-wel">
//                     <div class="wel-content">
//                       <h4>Latest Technology</h4>
//                       <p>
//                         We are using latest technology to provide best
//                         service to our clients.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                 class="well-services second-well wow fadeInUp"
//                 data-wow-delay="0.7s"
//                 >
//                   <div class="services-img">
//                     <a class="big-icon" href="#">
//                       <img src="img/icon/t2.png" alt="" />
//                     </a>
//                   </div>
//                   <div class="main-wel">
//                     <div class="wel-content">
//                       <h4>Certik Certified</h4>
//                       <p>
//                         Our smart contract is audited by Certik to provide
//                         secure service.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-xl-6 col-lg-6 col-md-6">
//                 <div
//                 class="well-services three-well wow fadeInUp"
//                 data-wow-delay="0.5s"
//                 >
//                   <div class="services-img">
//                     <a class="big-icon" href="#">
//                       <img src="img/icon/t3.png"  alt="" />
//                     </a>
//                   </div>
//                   <div class="main-wel">
//                     <div class="wel-content">
//                       <h4>Mining Plateform</h4>
//                       <p>
//                         We are providing mining plateform to our clients to
//                         earn more.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                 class="well-services four-well wow fadeInUp"
//                 data-wow-delay="0.5s"
//                 >
//                   <div class="services-img">
//                     <a class="big-icon" href="#">
//                       <img src="img/icon/t4.png" alt="" />
//                     </a>
//                   </div>
//                   <div class="main-wel">
//                     <div class="wel-content">
//                       <h4>Metaverse Blockchain</h4>
//                       <p>
//                         We are using metaverse blockchain to provide secure
//                         service.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-xl-6 col-lg-6 col-md-12">
//             <div class="well-service-text">
//               <div class="top-text-title">Ultimate Metaverse</div>
//               <h2 class="main-title">
//                 {" "}
//                 <span class="color-text-bold">Blockchain</span> provide you
//                 best services
//               </h2>
//               <p>
//                 Our Blockchain opt in to the projects that are building the
//                 future of the blockchain and cryptocurrency industry. We
//                 believe that the future of blockchain is in the hands of
//                 developers and entrepreneurs who are building the next
//                 generation of blockchain and cryptocurrency projects.
//                 help agencies to define their new business objectives and
//                 then create professional software
//                 developers.
//               </p>
//               <a class="service-btn coin-btn "href="/">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Welcome;


const Welcome = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "welcome-area bg-color-4 fix area-padding-2",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row d-flex flex-wrap align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "well-services first-well wow fadeInUp",
                                            "data-wow-delay": "0.3s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "services-img",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "big-icon",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "img/icon/t1.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "main-wel",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "wel-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                children: "Latest Technology"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: "We are using the latest technology to provide the best service to our clients."
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "well-services second-well wow fadeInUp",
                                            "data-wow-delay": "0.7s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "services-img",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "big-icon",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "img/icon/t2.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "main-wel",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "wel-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                children: "Certik Certified"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: "Our smart contract is audited by Certik to provide a secure service."
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "well-services three-well wow fadeInUp",
                                            "data-wow-delay": "0.5s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "services-img",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "big-icon",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "img/icon/t3.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "main-wel",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "wel-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                children: "Mining Platform"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: "We are providing a mining platform to our clients to earn more."
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "well-services four-well wow fadeInUp",
                                            "data-wow-delay": "0.5s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "services-img",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "big-icon",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "img/icon/t4.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "main-wel",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "wel-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                children: "Metaverse Blockchain"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: "We are using metaverse blockchain to provide secure service."
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "well-service-text",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "top-text-title",
                                    children: "Ultimate Metaverse"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "main-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "color-text-bold",
                                            children: "Blockchain"
                                        }),
                                        " provides you the best services"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Our Blockchain opt in to the projects that are building the future of the blockchain and cryptocurrency industry. We believe that the future of blockchain is in the hands of developers and entrepreneurs who are building the next generation of blockchain and cryptocurrency projects. help agencies to define their new business objectives and then create professional software developers."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "service-btn coin-btn",
                                    href: "/",
                                    children: "Learn More"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Welcome = (Welcome); //new

;// CONCATENATED MODULE: ./Components/Profile/ERC20.jsx
// import React, { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// const ERC20 = ({ setActive, createERC20 }) => {
//   const [token, setToken ] = useState({
//     name: "",
//     symbol: "",
//     supply: 0,
//   });
//   const handleTokenInfo = (fieldName, e) => {
//     setToken({ ...token, [fieldName]: e.target.value });
//   };
//   return (
//     <div class="login-area area-padding fix">
//       <div class="login-overlay"></div>
//       <div class="container">
//         <div class="row justify-content-center text-center">
//           <div class="col-xl-6 col-lg-6 col-md-8">
//             <div class="login-form signup-form">
//               <span onClick={() => setActive(false)}>
//                 <AiOutlineClose />
//               </span>
//               <h4 class="login-title text-center">Create ERC20 Token</h4>
//               <div id="contactForm" class="log-form">
//                 <input
//                 type="text"
//                 id="name"
//                 class="form-control"
//                 placeholder="Name"
//                 required
//                 onChange={(e) => handleTokenInfo("name", e)}
//                 />
//                 <input
//                 type="text"
//                 id="email"
//                 class="form-control"
//                 placeholder="Symbol"
//                 required
//                 onChange={(e) => handleTokenInfo("symbol", e)}
//                 />
//                 <input
//                 type="number"
//                 id="msg_subject"
//                 class="form-control"
//                 placeholder="total supply"
//                 required
//                 onChange={(e) => handleTokenInfo("supply", e)}
//                 />
//                 <button
//                 onClick={() => createERC20(token)}
//                 type="submit"
//                 id="submit"
//                 class="slide-btn color-btn login-btn"
//                 >
//                   Create Token
//                 </button>
//                 <div id="msgSubmit" class="h3 text-center hidden"></div>
//                 <div class="clearfix"></div>
//                 <div class="clear"></div>
//                 <div class="seperator text-center">
//                   <span>Create your ERC20 Token</span>
//                 </div>
//                 <div class="sign-icon">
//                   <div class="acc-not">
//                     with minimum fee of <a> 1 matic</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ERC20;



const ERC20 = ({ setActive, createERC20 })=>{
    const [token, setToken] = (0,external_react_.useState)({
        name: "",
        symbol: "",
        supply: 0
    });
    const handleTokenInfo = (fieldName, e)=>{
        setToken({
            ...token,
            [fieldName]: e.target.value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "login-area area-padding fix",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "login-overlay"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row justify-content-center text-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-xl-6 col-lg-6 col-md-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "login-form signup-form",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    onClick: ()=>setActive(false),
                                    children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineClose, {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    class: "login-title text-center",
                                    children: "Create ERC20 Token"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    id: "contactForm",
                                    class: "log-form",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            id: "name",
                                            class: "form-control",
                                            placeholder: "Name",
                                            required: true,
                                            onChange: (e)=>handleTokenInfo("name", e)
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            id: "email",
                                            class: "form-control",
                                            placeholder: "Symbol",
                                            required: true,
                                            onChange: (e)=>handleTokenInfo("symbol", e)
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "number",
                                            id: "msg_subject",
                                            class: "form-control",
                                            placeholder: "total Supply",
                                            required: true,
                                            onChange: (e)=>handleTokenInfo("supply", e)
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>createERC20(token),
                                            type: "submit",
                                            id: "submit",
                                            class: "slide-btn color-btn login-btn",
                                            children: "Create Token"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            id: "msgSubmit",
                                            class: "h3 text-center hidden"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "clearfix"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "clear"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "separetor text-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Create your ERC20 Token"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "sign-icon",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                class: "acc-not",
                                                children: [
                                                    "with a minimum fee of ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        children: "1 Matic"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Profile_ERC20 = (ERC20);

;// CONCATENATED MODULE: ./Components/Profile/UserProfile.jsx
// import React from "react";
// import { BsBoxArrowRight } from "react-icons/bs";
// const UserProfile = () => {
//   return (
//     <div class="page-area bread-pd">
//       <div class="breadcumb-overlay"></div>
//       <div class="container">
//         <div class="row">
//           <div class="col-xl-12">
//             <div class="bread-bg">
//               <div class="breadcrumb-title">
//                 <h2>User Profile</h2>
//                 <div class="bread-come">
//                 <nav aria-label="breadcrumb">
//                   <ol class="breadcrumb">
//                     <li class="breadcrumb-items">
//                       <a class="black-text" href="#">
//                         Home
//                       </a>
//                       <span class="new_profile_space">
//                         <BsBoxArrowRight />
//                       </span>
//                     </li>
//                     <li class="breadcrumb-items">
//                       <a class="black-text" href="#">
//                         User profile
//                       </a>
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };
// export default UserProfile;



const UserProfile = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "page-area bread-pd",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "breadcumb-overlay"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-xl-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "bread-bg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "breadcrumb-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        children: "User Profile"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "bread-come",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            "aria-label": "breadcrumb",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                                                class: "breadcrumb",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        class: "breadcrumb-items",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                class: "black-text",
                                                                href: "#",
                                                                children: "Home"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                class: "new_profile_space",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(bs_.BsBoxArrowRight, {})
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        class: "breadcrumb-items",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            class: "black-text",
                                                            href: "#",
                                                            children: "User profile"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Profile_UserProfile = (UserProfile);

;// CONCATENATED MODULE: ./Components/Profile/Profile.jsx
// import React, { useState } from "react";
// //INTERNAL IMPORT
// import { ProfileMain, SideBar } from "../index";
// const Profile = ({
//   setActive,
//   getAllERC20TokenListed,
//   getUserERC20Tokens,
//   address,
//   fee,
//   createERC20,
//   balance,
//   withdrawFund,
//   donateFund,
//   getAllDonation,
//   mainBalance,
//   setTransfer,
//   nativeToken,
// }) => {
//   const [open, setOpen] = useState("Dashboard");
//   return (
//     <div class="dashboard-area bg-color area-padding-3">
//       <div class="container">
//         <div class="row">
//           <SideBar
//           address={address}
//           setOpen={setOpen}
//           open={open}
//           setActive={setActive}
//           setTransfer={setTransfer}
//           />
//           <ProfileMain
//           nativeToken={nativeToken}
//           mainBalance={mainBalance}
//           getAllDonation={getAllDonation}
//           donateFund={donateFund}
//           withdrawFund={withdrawFund}
//           balance={balance}
//           createERC20={createERC20}
//           setOpen={setOpen}
//           open={open}
//           fee={fee}
//           address={address}
//           getAllERC20TokenListed={getAllERC20TokenListed}
//           getUserERC20Tokens={getUserERC20Tokens}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Profile;


// INTERNAL IMPORT

const Profile = ({ setActive, getAllERC20TokenListed, getUserERC20Tokens, address, fee, createERC20, balance, withdrawFund, donateFund, getAllDonation, mainBalance, setTransfer, nativeToken })=>{
    const [open, setOpen] = (0,external_react_.useState)("Dashbord");
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "dshaboard-area bg-color area-padding-3",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                class: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Profile_SideBar, {
                        address: address,
                        setOpen: setOpen,
                        open: open,
                        setActive: setActive,
                        setTransfer: setTransfer
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Profile_ProfileMain, {
                        nativeToken: nativeToken,
                        mainBalance: mainBalance,
                        getAllDonation: getAllDonation,
                        donateFund: donateFund,
                        withdrawFund: withdrawFund,
                        balance: balance,
                        createERC20: createERC20,
                        setOpen: setOpen,
                        open: open,
                        fee: fee,
                        address: address,
                        getAllERC20TokenListed: getAllERC20TokenListed,
                        getUserERC20Tokens: getUserERC20Tokens
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Profile_Profile = (Profile);

;// CONCATENATED MODULE: ./Components/Profile/ProfileMain.jsx
// import React from "react";
// //INTERNAL IMPORT
// import { Table, TableTwo } from "../index";
// const ProfileMain = ({
//   getAllERC20TokenListed,
//   getUserERC20Tokens,
//   setOpen,
//   open,
//   fee,
//   createERC20,
//   address,
//   balance,
//   withdrawFund,
//   donateFund,
//   getAllDonation,
//   mainBalance,
//   nativeToken,
// }) => {
//   const details = [
//     {
//       title: "Created",
//       value: `#${getUserERC20Tokens?.length || 0}`,
//     },
//     {
//       title: "ERC20s",
//       value: `#${getAllERC20TokenListed?.length || 0}`,
//     },
//     {
//       title: "Listing Fee",
//       value: `${fee} Matic`,
//     },
//     {
//       title: "Donors",
//       value: `#${getAllDonation?.length || 0}`,
//     },
//     {
//       title: `${nativeToken?.symbol} Token`,
//       value: `${nativeToken?.balance}`,
//     },
//     {
//       title: "Contract Balance",
//       value: `${mainBalance == undefined ? "Only Owner See" : mainBalance}`,
//     }, 
//   ];
//   const contractOwner = 0xD080163A90F2a513cBDeAaC76762E44Ae4FC2ac1;
//   return (
//    <div class="col-xl-9 col-lg-9 col-md-8">
//     <div class="row user-dashboard">
//       <div class="col-xl-12 col-lg-12 col-md-12">
//         <div class="user-top">
//           <div class="user-balance">
//             <span>Your balance</span>
//             <div class="main-bal">{balance?.slice(1, 7)} Matic</div>
//           </div>
//           <div class="userboard-btn">
//             <a class="user-btn coin-btn" onClick={() => donateFund()}>
//               Donate 1 MATIC
//             </a>
//             {address == contractOwner && (
//               <a onClick={() => withdrawFund()} class="user-btn color-btn">
//                 Withdraw funds
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="row dashboard-content">
//       {details.map((detail, i) => (
//         <div key={i + 1} class="col-xl-4 col-lg-4 col-md-6">
//           <div class="single-dash-head">
//             <div class="dashboard-amount d-flex flex-wrap align-items-center">
//               <div class="amount-content">
//                 <span class="pro-name">{detail.title}</span>
//                 <span class="pro-money">{detail.value}</span>
//               </div>
//               <div class="invest-tumb">
//                 <img src={`img/icon/d${i + 1}.png`} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     {open == "Dashboard" ? (
//       <Table
//         title="All Created ERC20 Tokens"
//         tableData={getAllERC20TokenListed}
//         />
//     ) : open == "Your Token" ? (
//       <Table title="Your Tokens" tableData={getUserERC20Tokens} />
//     ) : open == "Donation" ? (
//       <TableTwo title="All user donations" tableData={getAllDonation} />
//     ) : (
//       ""
//     )}
//    </div> 
//   );
// };
// export default ProfileMain;


// INTERNAL IMPORT

const ProfileMain = ({ getAllERC20TokenListed, getUserERC20Tokens, setOpen, open, fee, createERC20, address, balance, withdrawFund, donateFund, getAllDonation, mainBalance, nativeToken })=>{
    const details = [
        {
            title: "Created",
            value: `#${getUserERC20Tokens?.length || 0}`
        },
        {
            title: "ERC20s",
            value: `#${getAllERC20TokenListed?.length || 0}`
        },
        {
            title: "Listing Fee",
            value: `${fee} Matic`
        },
        {
            title: "Downers",
            value: `#${getAllDonation?.length || 0}`
        },
        {
            title: `${nativeToken?.symbol} Token`,
            value: `${nativeToken?.balance}`
        },
        {
            title: "Contract Balance",
            value: `${mainBalance == undefined ? "Only Owner See" : mainBalance}`
        }
    ];
    const contractOwner = 0xD080163A90F2a513cBDeAaC76762E44Ae4FC2ac1;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "col-xl-9 col-lg-9 col-md-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "row user-dashboard",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "col-xl-12 col-lg-12 col-md-12",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        class: "user-top",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "user-balance",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Your balance"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "main-bal",
                                        children: [
                                            balance?.slice(1, 7),
                                            " Matic"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "userboard-btn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        class: "user-btn coin-btn",
                                        onClick: ()=>donateFund(),
                                        children: "Donate 1 MATIC"
                                    }),
                                    address == contractOwner && /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        onClick: ()=>withdrawFund(),
                                        class: "user-btn color-btn",
                                        children: "Withdraw funds"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "row dashboard-content",
                children: details.map((detail, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-xl-4 col-lg-4 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "single-dash-head",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "dashboard-amount d-flex flex-wrap align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        class: "amount-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                class: "pro-name",
                                                children: detail.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                class: "pro-money",
                                                children: detail.value
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "invest-tumb",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `img/icon/d${i + 1}.png`,
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        })
                    }, i + 1))
            }),
            open == "Dashbord" ? /*#__PURE__*/ jsx_runtime.jsx(Profile_Table, {
                title: "All Created ERC20 Tokens",
                tableData: getAllERC20TokenListed
            }) : open == "Your Token" ? /*#__PURE__*/ jsx_runtime.jsx(Profile_Table, {
                title: "Your Tokens",
                tableData: getUserERC20Tokens
            }) : open == "Donation" ? /*#__PURE__*/ jsx_runtime.jsx(Profile_TableTwo, {
                title: "All user donations",
                tableData: getAllDonation
            }) : ""
        ]
    });
};
/* harmony default export */ const Profile_ProfileMain = (ProfileMain);

;// CONCATENATED MODULE: ./Components/Profile/SideBar.jsx
// import React from "react";
// import { BsBoxArrowRight } from "react-icons/bs";
// const SideBar = ({ setActive, setOpen, open, address, setTransfer }) => {
//   const menuList = [
//     {
//       name: "Dashboard",
//     },
//     {
//       name: "Your Token",
//     },
//     {
//       name: "Donation",
//     },
//   ];
//   return (
//     <div class="col-xl-3 col-lg-3 col-md-4">
//       <aside class="sidebar">
//         <div class="dashboard-side">
//           <div class="dashboard-head">
//             <div class="dashboard-profile">
//               <img src="img/about/profile.png" alt="" />
//               <div class="profile-content">
//                 <span class="pro-name">Mihir Vishwakarma</span>
//                 <span class="pro-number">{address.slice(0, 15)}...</span>
//               </div>
//             </div>
//           </div>
//           <div class="dashboard-menu">
//             <ul>
//               {menuList.map((el, i) => (
//                 <li
//                 onClick={() => setOpen(el.name)}
//                 class={open == el.name ? "active" : ""}
//                 >
//                   <a>
//                     <BsBoxArrowRight />
//                     <span class="new_space"> </span>
//                     {el.name}
//                   </a>
//                 </li>
//               ))}
//               <li onClick={() => setActive(true)}>
//                 <a href="#">
//                   <BsBoxArrowRight />
//                   <span class="new_space"> </span>
//                   Create Token
//                 </a>
//               </li>
//               <li onClick={() => setTransfer(true)}>
//                 <a href="#">
//                   <BsBoxArrowRight />
//                   <span class="new_space"> </span>
//                   Token Transfer
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };
// export default SideBar;



const SideBar = ({ setActive, setOpen, open, address, setTransfer })=>{
    const menuList = [
        {
            name: "Dashbord"
        },
        {
            name: "Your Token"
        },
        {
            name: "Donation"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "col-xl-3 col-lg-3 col-md-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("aside", {
            class: "sidebar",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                class: "dashboard-side",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "dashboard-head",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "dashboard-profile",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "img/about/profile.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "profile-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            class: "pro-name",
                                            children: "Mihir Vishwakarma"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            class: "pro-number",
                                            children: [
                                                address.slice(0, 15),
                                                "..."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "dashboard-menu",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            children: [
                                menuList.map((el, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: ()=>setOpen(el.name),
                                        class: open == el.name ? "active" : "",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(bs_.BsBoxArrowRight, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "new_space",
                                                    children: " "
                                                }),
                                                el.name
                                            ]
                                        })
                                    })),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    onClick: ()=>setActive(true),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(bs_.BsBoxArrowRight, {}),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                class: "new_space",
                                                children: " "
                                            }),
                                            "Create Token"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    onClick: ()=>setTransfer(true),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(bs_.BsBoxArrowRight, {}),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                class: "new_space",
                                                children: " "
                                            }),
                                            "Token Transfer"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Profile_SideBar = (SideBar);

;// CONCATENATED MODULE: ./Components/Profile/Table.jsx
// import React from "react";
// const Table = ({ tableData, title }) => {
//   return (
//     <div class="row">
//       <div class="col-xl-12 col-lg-12 col-md-12">
//         <div class="send-money-from transaction-log">
//           <div class="form-text">
//             <h4 class="form-top">
//               {" "}
//               {tableData.length == 0 ? "No Token Created" : `${title}`}{" "}
//             </h4>
//             {tableData.length == 0 ? (
//               ""
//             ) : (
//               <div class="form-inner table-inner">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Transaction Hash</th>
//                       <th>Token Address</th>
//                       <th>Supply</th>
//                       <th>Name</th>
//                       <th>Symbol</th>
//                     </tr>
//                     <>
//                     {tableData?.map((token, i) => (
//                       <tr key={i + 1}>
//                         <td>{token.tokenCreatedDate}</td>
//                         <td
//                         onClick={() =>
//                           navigator.clipboard.writeText(
//                             token.transactionHash
//                           )
//                         }
//                         >
//                           {token.tokenTransactionHash.slice(0, 15)}...
//                         </td>
//                         <td
//                         onClick={() =>
//                           navigator.clipboard.writeText(token.tokenAddress)
//                         }
//                         >
//                           {token.tokenAddress.slice(0, 15)}...
//                         </td>
//                         <td>{token.tokenSupply}</td>
//                         <td>{token.tokenSupply}</td>
//                         <td>{token.tokenSymbol}</td>
//                         <td>{token.tokenName}</td>
//                       </tr>
//                     ))}
//                     </>
//                   </thead>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Table;


const Table = ({ tableData, title })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "row",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "col-xl-12 col-lg-12 col-md-12",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "send-money-form transection-log",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "form-text",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                            class: "form-top",
                            children: [
                                " ",
                                tableData.length == 0 ? "No Token Created" : `${title}`,
                                " "
                            ]
                        }),
                        tableData.length == 0 ? "" : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "form-inner table-inner",
                            children: /*#__PURE__*/ jsx_runtime.jsx("table", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("thead", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Date"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Transaction Hash"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Token Address"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Supply"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Symbol"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                            children: tableData?.map((token, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                            children: token.tokenCreatedDate
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                            onClick: ()=>navigator.clipboard.writeText(token.tokenTransactionHash),
                                                            children: [
                                                                token.tokenTransactionHash.slice(0, 15),
                                                                "..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                            onClick: ()=>navigator.clipboard.writeText(token.tokenAddress),
                                                            children: [
                                                                token.tokenAddress.slice(0, 15),
                                                                "..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                            children: token.tokenSupply
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                            children: token.tokenName
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                            children: token.tokenSymbol
                                                        })
                                                    ]
                                                }, i + 1))
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Profile_Table = (Table);

;// CONCATENATED MODULE: ./Components/Profile/TableTwo.jsx
// import React from "react";
// const TableTwo = ({ tableData, title }) => {
//   return (
//     <div class="row">
//       <div class="col-xl-12 col-lg-12 col-md-12">
//         <div class="send-money-form transaction-log">
//           <div class="form-text">
//             <h4 class="form-top">
//               {" "}
//               {tableData.length == 0
//               ? "No Donation Given, Support us"
//             : `${title}`}{" "}
//             </h4>
//             {tableData.length == 0 ? (
//               ""
//             ) : (
//               <div class="form-inner table-inner">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Donation ID</th>
//                       <th>Donor</th>
//                       <th>Fund</th>
//                     </tr>
//                     <>
//                     {tableData?.map((token, i) => (
//                       <tr  key={i + 1}>
//                         <td>#{token.donationID}</td>
//                         <td>{token.donor.slice(0, 55)}...</td>
//                         <td>{token.fund}</td>
//                       </tr>
//                     ))}
//                     </>
//                   </thead>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TableTwo;


const TableTwo = ({ tableData, title })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        class: "row",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            class: "col-xl-12 col-lg-12 col-md-12",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "send-money-form transection-log",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    class: "form-text",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                            class: "form-top",
                            children: [
                                " ",
                                tableData.length == 0 ? "No Donation Given, Support us" : `${title}`,
                                " "
                            ]
                        }),
                        tableData.length == 0 ? "" : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "form-inner table-inner",
                            children: /*#__PURE__*/ jsx_runtime.jsx("table", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("thead", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Donation ID"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Donor"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Fund"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                            children: tableData?.map((token, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                            children: [
                                                                "#",
                                                                token.donationID
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                            children: [
                                                                token.donor.slice(0, 55),
                                                                "..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                            children: [
                                                                token.fund,
                                                                " MATIC"
                                                            ]
                                                        })
                                                    ]
                                                }, i + 1))
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Profile_TableTwo = (TableTwo);

;// CONCATENATED MODULE: ./Components/Profile/Transfer.jsx
// import React, { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// const Transfer = ({ setTransfer, transferNativeToken }) => {
//   const [token, setToken] = useState({
//     address: "",
//     tokenNo: "",
//   });
//   const handleTokenInfo = (fieldName, e) => {
//     setToken({ ...token, [fieldName]: e.target.value });
//   };
//   return (
//     <div class="login-area area-padding fix">
//       <div class="login-overlay"></div>
//       <div class="container">
//         <div class="row justify-content-center text-center">
//           <div class="col-xl-6 col-lg-6 col-md-8">
//             <div class="login-form signup-form">
//               <span onClick={() => setTransfer(false)}>
//                 <AiOutlineClose />
//               </span>
//               <h4 class="login-title text-center">Transfer Token</h4>
//               <div id="contactForm" class="log-form">
//                 <input
//                 type="text"
//                 id="name"
//                 class="form-control"
//                 placeholder="address"
//                 required
//                 onChange={(e) => handleTokenInfo("address", e)}
//                 />
//                 <input
//                 type="text"
//                 id="name"
//                 class="form-control"
//                 placeholder="amount"
//                 required
//                 onChange={(e) => handleTokenInfo("tokenNo", e)}
//                 />
//                 <button
//                 onClick={() => transferNativeToken(token)}
//                 type="submit"
//                 id="submit"
//                 class="slide-btn color-btn login-btn"
//                 >
//                 Transfer Token
//                 </button>
//                 <div id="msgSubmit" class="h3 text-center hidden"></div>
//                 <div class="clearfix"></div>
//                 <div class="clear"></div>
//                 <div class="separator text-center">
//                   <span>Create your ERC20 Token</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Transfer;



const Transfer = ({ setTransfer, transferNativeToken })=>{
    const [token, setToken] = (0,external_react_.useState)({
        address: "",
        tokenNo: ""
    });
    const handleTokenInfo = (fieldName, e)=>{
        setToken({
            ...token,
            [fieldName]: e.target.value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        class: "login-area area-padding fix",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "login-overlay"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    class: "row justify-content-center text-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        class: "col-xl-6 col-lg-6 col-md-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            class: "login-form signup-form",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    onClick: ()=>setTransfer(false),
                                    children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineClose, {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    class: "login-title text-center",
                                    children: "Transfer Token"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    id: "contactForm",
                                    class: "log-form",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            id: "name",
                                            class: "form-control",
                                            placeholder: "address",
                                            required: true,
                                            onChange: (e)=>handleTokenInfo("address", e)
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            id: "name",
                                            class: "form-control",
                                            placeholder: "amount",
                                            required: true,
                                            onChange: (e)=>handleTokenInfo("tokenNo", e)
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>transferNativeToken(token),
                                            type: "submit",
                                            id: "submit",
                                            class: "slide-btn color-btn login-btn",
                                            children: "Transfer Token"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            id: "msgSubmit",
                                            class: "h3 text-center hidden"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "clearfix"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "clear"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            class: "separetor text-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Create your ERC20 Token"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Profile_Transfer = (Transfer);

;// CONCATENATED MODULE: ./Components/index.js
// GLOBAL


// HOME PAGE









// CREATE ERC20











/***/ })

};
;