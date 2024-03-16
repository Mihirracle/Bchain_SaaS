// import React from "react";

// //INTERNAL IMPORT
// import {
//   Header,
//   Footer,
//   About,
//   Brand,
//   Faq,
//   Feature,
//   HeroSection,
//   Information,
//   Staking,
//   Swap,
//   Welcome,
// } from "../Components/index";
// import { useStateContext } from "../Context/index";
// import { ST } from "next/dist/shared/lib/utils";

// const index = () => {
//   const {
//     createERC20,
//     getAllERC20TokenListed,
//     getUserERC20Tokens,
//     fee,
//     address,
//     nativeToken,
//     transferNativeToken,
//   } = useStateContext();

//   return (
//     <div>
//             {/* {<button onClick={() => createERC20()}>createERC20</button>} */}
//       <Header />
//       <main>
//         <HeroSection />
//         <About />
//         <Brand />
//         <Swap
//         nativeToken={nativeToken}
//         transferNativeToken={transferNativeToken}
//         />
//         <Welcome />
//         {/* <Information />
//         <Staking />
//         <Feature /> */}
//         <Faq />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default index;

import React from "react";

// INTERNAL IMPORT
import {
  Header,
  Footer,
  About,
  Brand,
  Faq,
  Feature,
  HeroSection,
  Information,
  Staking,
  Swap,
  Welcome,
} from "../Components/index";
import { useStateContext } from "../Context/index";

const Index = () => {
  const {
    createERC20,
    getAllERC20TokenListed,
    getUserERC20Tokens,
    fee,
    address,
    nativeToken,
    transferNativeToken,
  } = useStateContext();

  return (
    <div>
      {/* {<button onClick={() => createERC20()}>createERC20</button>} */}
      <Header />
      <main>
        <HeroSection />
        <About />
        <Brand />
        <Swap
          nativeToken={nativeToken}
          transferNativeToken={transferNativeToken}
        />
        <Welcome />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

//new