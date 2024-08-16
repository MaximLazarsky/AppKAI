import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { debounce } from "lodash";
const APIConnectAIkey = "qQCXTtYhVoNoxMSO4lP4xtNxcTH1oyaj";

const config = {
  headers: {
    "Content-Type": "application/json",
    apikey: APIConnectAIkey,
  },
};

const App: React.FC = () => {
  const { address } = useAccount();
  console.log("address", address);
  const data = {
    externalUserId: address,
    pluginIds: [],
  };
  const [session, setSession] = useState(null);
  const [inputValue, setInputValue] = useState("");
  console.log("session", session);

  useEffect(() => {
    const fetch = async () => {
      const session = await axios
        .post("https://api.on-demand.io/chat/v1/sessions", data, config)
        .then(({ data }) => data.data)
        .catch((error) => {
          console.error(error);
        });
      setSession(session);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (session)
      axios
        .post(
          `https://api.on-demand.io/chat/v1/sessions/${session.id}/query`,
          {
            endpointId: "predefined-openai-gpt4o",
            query: inputValue,
            pluginIds: [],
            responseMode: "sync",
          },
          config
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [inputValue]);

  return (
    <div>
      <ConnectButton />
      <input
        type="text"
        onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }, 300)}
      />
    </div>
  );
};

export default App;

const ConnectButton = () => {
  return <w3m-button balance="hide" />;
};
