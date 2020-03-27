 uploadimage = async (uri, fileName) => {

        const response = await fetch(uri);
        console.log('the response'+response);
        
        const blob = await response.blob();
        console.log('the blob '+blob);
        
        // calling firebase storage api
        var ref = firebase.storage().ref().child('file' + fileName);
        console.log("*****************firebase***************")
        console.log(ref)
        console.log("*****************firebase***************")
        setTimeout(() => {
            ref.getDownloadURL()
            .then((url) =>{
                this.setState({
                    myurl:url,
                })
            })
            console.log('successfully url loaded');
        }, 9000);
       
        return ref.put(blob);
    }
