import { Injectable } from '@angular/core';
import Band from 'src/app/_model/band/band';
import { HttpClient } from '@angular/common/http';
import { ApplicationService } from '../an--application/an--application.service';

@Injectable({
	providedIn: 'root'
})
export class BandService {

	constructor(
		private _http: HttpClient,
		private _application: ApplicationService
	) { }

	public getBandList(): Promise<Band[]> {
		return this._http.get(this._application.apiBase + "/band-list/band-list.json")
			.toPromise()
			.then(response => {
				return [].concat(response).map(band => Band.fromJSON(band));
			});
	}
}
