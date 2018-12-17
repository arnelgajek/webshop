import React from 'react';

const WebshopContext = React.createContext({});

export class WebshopProvider extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const { children, openLoginModal } = this.props;
        return (
           <WebshopContext.Provider
            value={{ openLoginModal }}
            >
            { children }
           </WebshopContext.Provider>
        );
    }
}

export const WebshopConsumer = WebshopContext.Consumer;
