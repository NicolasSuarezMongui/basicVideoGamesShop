export class Game {
    constructor(id,name, theme,price, points) {
        this._id = id
        this._name = name
        this._theme = theme
        this._price = price
        this._points = points
    }

    get id() { return this._id }
    get name() { return this._name }
    get theme() { return this._theme }
    get price() { return this._price }
    get points() { return this._points }

    set name(name) { this._name = name }
    set price(price) { this._price = price }
    set points(points) { this._points = points }
}