export class NameService {
	
	private name = "Horst";

	constructor() {
		this.name = "Sebastian";
	}

	public getName(): string {
		return this.name;
	}
}