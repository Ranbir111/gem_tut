export const chat = async (msg: string) => {
    const response = await fetch('./api/ai',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ msg })
        }
    );

    const data = await response.json();
    return data.data;
}