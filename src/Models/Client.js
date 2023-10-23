export class Client {
    constructor(id, names, lastNames, celPhone, email, birthDate, nacionality, password){
        this._id = id
        this._names = names
        this._lastNames = lastNames
        this._celPhone = celPhone
        this._email = email
        this._birthDate = birthDate
        this._nacionality = nacionality
        this._password = password
        this._games = []
        this._points = 0
    }

    get id() { return this._id }
    get names() { return this._names }
    get lastNames() { return this._lastNames }
    get celPhone() { return this._celPhone }
    get email() { return this._email }
    get birthDate() { return this._birthDate }
    get nacionality() { return this._nacionality }
    get games() { return this._games }
    get points() { return this._points }
    get fullName() { return this._names + " " + this._lastNames }

    set names(names) { this._names = names }
    set lastNames(lastNames) { this._lastNames = lastNames }
    set password(password) { this._password = password }
    set email(email) { this._email = email }
    set celPhone(celPhone) { this._celPhone = celPhone }

    addPoints(points) { this._points += points }
    addGame(game) { this._games.push(game) }

}