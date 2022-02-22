import React, { useState, useEffect } from 'react';
import { SafeAppWeb3Modal } from '@gnosis.pm/safe-apps-web3modal';

const SafeInfoWeb3Modal = () => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    (async () => {
      const modal = new SafeAppWeb3Modal();
      const provider = await modal.requestProvider();
      setProvider(provider);
    })();
  }, []);

  if (!provider) {
    return null;
  }

  return <p>Safe Address: {provider.safe.safeAddress}</p>;
};

export default SafeInfoWeb3Modal;
