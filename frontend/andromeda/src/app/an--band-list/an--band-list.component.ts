import { Component, OnInit } from '@angular/core';
import Band from '../_model/band/band';
import { BandService } from '../_services/an--band/an--band.service';

@Component({
	selector: 'an--band-list',
	templateUrl: './an--band-list.component.html',
	styleUrls: ['./an--band-list.component.scss']
})
export class AnBandListComponent implements OnInit {


	private _bandList: Band[] = [];
	public get bandList(): Band[] {
		return this._bandList;
	}

	constructor(
		private _bandService: BandService
	) {
		this._bandService.getBandList()
			.then(bandList => {this._bandList = bandList; console.log(this._bandList);});
	}

	ngOnInit() {
	}

}
