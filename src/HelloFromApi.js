import React from "react";
import

class HelloFromApi extends React.Component





retrieveHelloMessage() {

    const helloPromise = axios.get("/api/hello/george");

    helloPromise.then(response => {
        const helloMessage = response.data;
        console.log(helloMessage);

        const update = {
            message: helloMessage
        };

        // You need to call setState to change state values
        this.setState(update);
    });
}

render() {

    return ()
}