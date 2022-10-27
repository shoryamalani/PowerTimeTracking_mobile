import Peer from 'react-native-peerjs';
// export default function Peer2Peer() {

//         const localPeer = new Peer();
//         localPeer.on('error', console.log);

//         localPeer.on('open', localPeerId => {
//         console.log('Local peer open with ID', localPeerId);

//         const remotePeer = new Peer();
//         remotePeer.on('error', console.log);
//         remotePeer.on('open', remotePeerId => {
//             console.log('Remote peer open with ID', remotePeerId);

//             const conn = remotePeer.connect(localPeerId);
//             conn.on('error', console.log);
//             conn.on('open', () => {
//             console.log('Remote peer has opened connection.');
//             console.log('conn', conn);
//             conn.on('data', data => console.log('Received from local peer', data));
//             console.log('Remote peer sending data.');
//             conn.send('Hello, this is the REMOTE peer!');
//             });
//         });
//         });

//         localPeer.on('connection', conn => {
//         console.log('Local peer has received connection.');
//         conn.on('error', console.log);
//         conn.on('open', () => {
//             console.log('Local peer has opened connection.');
//             console.log('conn', conn);
//             conn.on('data', data => console.log('Received from remote peer', data));
//             console.log('Local peer sending data.');
//             conn.send('Hello, this is the LOCAL peer!');
//         });
//         });
//     }
export default class Peer2Peer{    
    id = null;
    localPeer = null;
    conn = null;
    toSendData = null;
    constructor(callback,setLastDataSent){
        this.localPeer = new Peer();
        this.localPeer.on('error', this.onErrors);
        this.toSendData = setLastDataSent;
        setLastDataSent('Connecting...');
        this.localPeer.on('open', localPeerId => {
            console.log('Local peer open ID', localPeerId);
            callback(localPeerId);
            this.id = localPeerId;
        });
        this.localPeer.on('connection', function(conn){
            console.log('Connected');
            this.conn = conn
            this.conn.on('error', this.onErrors);
            this.conn.on('data', this.onData, this);

        }, this);
        //  {
        //     this.conn = conn
            
        //     console.log('Connected');
        // } );
        
        // this.conn.on('error', this.onErrors);
        // this.conn.on('data', this.onData);
        console.log(typeof(this.conn))
        // this.localPeer.on('connection', this.onConnection);
        // this.localPeer.on('data', this.onData);
    }
    connectToPeer(remotePeerId){
        this.conn = this.localPeer.connect(remotePeerId);
        this.conn.on('error', this.onErrors);
        this.conn.on('data', this.onData, this);

    }
    onConnection(callback){
        console.log('Connected');
        this.conn = callback;
        this.conn.on('error', this.onErrors);
        this.conn.on('data', this.onData, this);
        
    }
    onData(data){
        console.log('Data',data);
        this.toSendData(data);
    }
    onErrors(error){
        console.log('Error',error);
    }
}