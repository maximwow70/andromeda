import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApplicationService {

	private _apiBase: string = "assets/backend";
	public get apiBase(): string {
		return this._apiBase;
	}

	constructor() { }
}
