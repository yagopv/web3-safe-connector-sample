import React from 'react';
import {
  useSafeAppConnection,
  SafeAppConnector,
} from '@gnosis.pm/safe-apps-web3-react';
import './styles.css';

const safeMultisigConnector = new SafeAppConnector();

export default function App() {
  const [safeInfo, setSafeInfo] = React.useState(null);
  const triedToConnectToSafe = useSafeAppConnection(safeMultisigConnector);

  React.useEffect(() => {
    if (triedToConnectToSafe) {
      console.log('Connected to Safe');

      safeMultisigConnector.getSafeInfo().then((safeInfo) => {
        setSafeInfo(safeInfo);
      });
    }
  }, [triedToConnectToSafe]);

  if (!safeInfo) {
    return null;
  }

  return (
    <div>
      <h1>Safe Info</h1>
      <p>
        <b>Safe address: </b>
        {safeInfo.safeAddress}
      </p>
      <p>
        <b>Network: </b> {safeInfo.chainId} - {safeInfo.network}
      </p>
    </div>
  );
}
