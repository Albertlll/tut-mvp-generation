import { httpClient } from "./httpClient";

function sendPrompt() {

    httpClient.post('/api/')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {

        return {
            courseId: 1,
            mtitle: ""
        }
    });
    
}
