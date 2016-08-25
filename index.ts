import { NameService } from "./nameService";

export class MyLibrary {

	private nameService: NameService;

	constructor() {
		this.nameService = new NameService();
	}

	public getName(): string {
		return this.nameService.getName();
	}
}

