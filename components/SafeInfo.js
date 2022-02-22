import React from 'react';
import {
  SafeAppConnector,
  useSafeAppConnection,
} from '@gnosis.pm/safe-apps-web3-react';

const safeMultisigConnector = new SafeAppConnector();

const SafeInfo = (props) => {
  const [safeInfo, setSafeInfo] = React.useState(null);
  const triedToConnectToSafe = useSafeAppConnection(safeMultisigConnector);

  React.useEffect(() => {
    if (triedToConnectToSafe) {
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
};

export default SafeInfo;
