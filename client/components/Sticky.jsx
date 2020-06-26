import React from 'react';
import { render } from 'sass';

class Sticky extends component {

    inputDone(){
        fetch(`/api/add`, {
            method: "POST",
            body: JSON.stringify({}),
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(`remove data ${data}`);
        })
        .catch(err => console.log(`remove fetch error ${err}`));
        }
    }


    render() {

        return (
            <div>
        
            </div>
        );
    }
};

export default Sticky;
