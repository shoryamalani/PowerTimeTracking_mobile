
import React from 'react';
import Context from './context';
import Peer2Peer from './p2p/Peer2Peer';
export default class GlobalState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Peer2Peer: null,
            Peer2PeerId: null,
            LastDataSent: "",
            // addNewTask : (task) => {},
            // deleteTask : (taskId) => {}
        };
        this.peer2peer = new Peer2Peer(this.setId, this.setLastDataSent);
    }
    setId = (id) => {
        this.setState({Peer2PeerId: id});
    }
    setLastDataSent = (data) => {
        this.setState({LastDataSent: data});
    }
    // state = {
    //     tasks: [], 
    // }
    
    // addNewTask = (task) => {
    //     const list = [...this.state.tasks, task];
    //     this.setState({tasks: list});
    // };
    
    // deleteTask = (taskId) => {
    //     this.setState(this.state.tasks.splice(taskId,1));
    // };
    render(){
        return (
            <Context.Provider 
                value={{
                    Peer2Peer: this.state.Peer2Peer,
                    Peer2PeerId: this.state.Peer2PeerId,
                    LastDataSent: this.state.LastDataSent,
                }}
                >
                {this.props.children}
            </Context.Provider>
        );
    }
}