import

       this.state = {
              message: "initial message"
       }
}

componentDidAmount() {


    this.retrieveHelloMessage();
}

retrieveHelloMessage()
{

    const helloMessage = response.data;
    console.log(helloMessage);

    const update = {
        message: helloMessage
    };

    //You need to call setState to change state values
    this.setState(update);
});
}

  render() {
    
}


