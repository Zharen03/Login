class http {

    static instance = new http();

    get = async (url) => {
        try{
            let req = await fetch(url);
            let json = await req.json();
            return json;
        } catch(error){
            console.log("Error en http get: ",error);
            throw Error(error);
        }
    }

    post = async (url, body) =>{
        try {
            let req = await fetch(url, {
                method: "POST",
                body
            });
            let json = await req.json();
            return json;
        } catch (error) {
            console.log("Error en http post: ",error);
            throw Error(error);
        }
    }
}