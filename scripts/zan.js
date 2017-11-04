class Zanbutton {
	constructor(count, elem) {
		this.count = count;
		this.elem = elem;
	}
	clickZan() {
		this.elem.onclick = () => {
			if(this.count < 10) {
				this.elem.className = 'hand';
				this.count = add(this.count);
				console.log(this.count)
				var plusone = document.getElementById('plus');
				plusone.className = 'animate';
				setTimeout(function(){
					plusone.className = '';
				},1500)
			} else {
				this.elem.className = 'hand gray';
				this.count = 0;
			}
		}
	}
}

class Thumb extends Zanbutton {
	constructor(count, elem) {
		super(count, elem)
	}
}
export default {
	Thumb
}

