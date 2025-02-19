class HatBoy {
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }
    getImage()
    {
        var Image = loadImage(this.path);
        return Image;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
}
