class HatBoy {
    constructor(path, x, y)
    {
        this.path = 'assets/png';
        this.x = 1000;
        this.y = 400;
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
