class Person {
	
	constructor(n, a) {
		this.name = n;
		this.alter = a;
	}
	
	setAlter(a) {
		if (a > this.alter) {
			this.alter = a;
		}
	}
	
	toString() {
		return (this.name + " (" + this.alter + ")");
	}

	equals(other) {
		if (this.alter != other.alter)
			return false;
		if (this.name != other.name)
			return false;
		return true;
	}
	
	erhoeheAlter() {
		this.alter = this.alter + 1;
	}
	
}