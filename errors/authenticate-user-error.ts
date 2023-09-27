export class AuthenticateUserError extends Error {
    public readonly name = 'AuthenticateUserError'

    constructor() {
        super('User Have not been Authenticated.')
    }
}