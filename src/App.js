import { useEffect, useState } from "react";
import { useMetamask }         from "use-metamask";
import { ethers }              from "ethers";
import Web3                    from "web3";

import Info                    from "./Info";
import logo                    from "./assets/logo.svg";
import styles                  from "./App.module.css";

function App() {
  const { connect, metaState }              = useMetamask();
  const [ web3interface, setWeb3Interface ] = useState("ethers");

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          if (web3interface === "ethers")
            await connect(ethers.providers.Web3Provider, "any");
          else if (web3interface === "web3")
            await connect(Web3);
          else 
            throw Error(`Unknown web3 interface: ${web3interface}`);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [metaState.isAvailable, web3interface]);

  const handleWeb3Selector = (event) => setWeb3Interface(event.target.value);

  return (
    <div className={styles.App}>
      <h3>
        {/* <code>
          const {"{"}
          <span className={styles.codeObject}>{"connect, metaState"}</span>
          {"}"} = <span className={styles.codeFunction}>useMetamask();</span>
        </code> */}
        Extension
      </h3>
      <div className={styles.logo}>
        <img src={logo} alt="useMetamask" />
      </div>
      {
        metaState.isAvailable
        ? <Info state={metaState} web3Handler={handleWeb3Selector}/>
        : <div>
          <p>You don't have Metamask installed</p>
          <p>But wait, what is Metamask?</p>
          <p>
            <code>
              <a href="https://metamask.io/">https://metamask.io</a>
            </code>
          </p>
        </div>
      }
      
    </div>
  );
}

export default App;
