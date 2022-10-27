import React from 'react';


// export const peer2peer = new Peer2Peer();
// export const peer2peerContext = React.createContext(peer2peer);
// export const themeContext = React.createContext('light');

export default React.createContext({
    Peer2Peer: null,
    Peer2PeerId: null,
    LastDataSent: "",
    // addNewTask : (task) => {},
    // deleteTask : (taskId) => {}
  });