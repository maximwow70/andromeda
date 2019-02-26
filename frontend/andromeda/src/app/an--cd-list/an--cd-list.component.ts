import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'an--cd-list',
	templateUrl: './an--cd-list.component.html',
	styleUrls: ['./an--cd-list.component.scss']
})
export class AnCdListComponent implements OnInit {

	private _cdList: string[] = [
		"assets/backend/cd-list/1.jpg",
		"assets/backend/cd-list/2.jpg",
		"assets/backend/cd-list/3.jpg"
	];
	public get cdList(): string[] {
		return this._cdList;
	}

	constructor() { }

	ngOnInit() {
	}

}
