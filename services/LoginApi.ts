export const loginApi = async ({ email, password }: { email: string, password: string }) => {
    try {
        const response = await fetch(
            'https://be-ksp.analitiq.id/auth/login',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                })
            }
        );
        const json = await response.json();
        return json;
        // return {}
    } catch (error) {
        console.error(error);
    }
}
