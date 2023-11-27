export const userToSign = 
{
    username: 'abc1',
    password: 'abc1'
}

export const userToRegister = 
{
    username: 'abc2',
    email: 'abc2@email.com',
    password: 'abc2password'
}

export const expectedOutputLogin =
{
    message: 'Login successful',
    user: {
        _id: '654af570c2e3f67de9b8878c',
        Username: 'abc1',
        Password: 'abc1',
        Email: 'abc@email.com',
        Type: 'Worker',
        isRegistered: true
    }
}