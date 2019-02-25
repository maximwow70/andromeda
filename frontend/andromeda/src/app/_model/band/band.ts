export default class Band {
    private _id: number = null;
    public get id(): number {
        return this._id;
    }

    private _name: string = null;
    public get name(): string {
        return this._name;
    }

    private _thumb: string = null;
    public get thumb(): string {
        return this._thumb;
    }

    private _music: any = null;
    public get music(): any {
        return this._music;
    }

    private _socialLinkList: string[] = [];
    public get socialLinkList(): string[] {
        return this._socialLinkList;
    }

    constructor(
        id: number,
        name: string,
        thumb: string,
        music: any,
        socialLinkList: string[]
    ) {
        this._id = id;
        this._name = name;
        this._thumb = thumb;
        this._music = music;
        this._socialLinkList = socialLinkList;
    }

    public static fromJSON(json: any): Band {
        return new Band(
            json.id,
            json.name,
            json.thumb,
            json.music,
            json.socialLinkList
        );
    }

}
