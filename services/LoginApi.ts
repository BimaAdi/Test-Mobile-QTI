export const loginApi = async ({ email, password }: { email: string, password: string }) => {
    try {
        // const response = await fetch(
        //     'http://be-ksp.analitiq.id/auth/login',
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             email, password
        //         })
        //     }
        // );
        // const json = await response.json();
        // return json;
        
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const json = await response.json()
        // return json;

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts', 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: 1,
                    title: "hello",
                    body: "hello world"
                })
            },
        )
        const json = await response.json()
        return json;
    } catch (error) {
        console.error(error);
    }
}
