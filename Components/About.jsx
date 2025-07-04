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

import React from "react";

const About = () => {
  const features = [
    {
      title: "Decentralized System",
      description:
        "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
    },
    {
      title: "Blockchain Wallet",
      description:
        "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
    },
    {
      title: "Web3 Project",
      description:
        "Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create."
    },
  ];
  return (
    <div className="about-area bg-color-3 fix area-padding">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-content">
              <div className="about-images wow fadeInLeft" data-wow-delay="0.7s">
                <img src="img/about/ab2.png" alt="" />
                <div className="rotmate-image rotateme">
                  <img src="img/about/circle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about-all">
              <div className="about-inner">
                {features.map((feature, i) => (
                  <div
                    className="single-about wow fadeInUp"
                    data-wow-delay={`0.${i + 3}s`}
                    key={i}
                  >
                    <span className="about-icon">0{i + 1}</span>
                    <div className="support-text">
                      <h4>
                        <a href="#">{feature.title}</a>
                      </h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//new