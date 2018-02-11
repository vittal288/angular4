import {
	Component,
	trigger,
	state,
	style,
	transition,
	animate,
	keyframes,
	group
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger('divState', [
			state('normal', style({
				'background-color': 'red',
				transform: 'translateX(0)'
			})),
			state('highlighted', style({
				'background-color': 'blue',
				transform: 'translateX(100px)'
			})),
			transition('normal <=> highlighted', animate(300))
		]),

		trigger('wildState', [
			state('normal', style({
				'background-color': 'red',
				transform: 'translateX(0) scale(1)'
			})),
			state('highlighted', style({
				'background-color': 'blue',
				transform: 'translateX(100px) scale(1)'
			})),
			state('shrunken', style({
				'background-color': 'green',
				transform: 'translateX(0) scale(0.5)'
			})),
			transition('normal => highlighted', animate(300)),
			transition('highlighted => normal', animate(800)),
			transition('shrunken <=> *', [
				style({
					'background-color': 'orange'
				}),
				animate(1000, style({
					borderRadius: '50px'
				})),
				animate(500)
			])
		]),

		trigger('list1', [
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			//if element is not added to the DOM then that element will be having the default state called void 		
			transition('void <=> *', [//adding item to list
				style({
					opacity: 0,
					transform: 'translateX(-100px)'
				}),
				animate(300)
			]),
			transition('* <=> void', [ //removng item from list 				
				animate(200, style({
					transform: 'translateX(100px)',
					opacity: 0
				}))
			])
		]),

		trigger('list2', [
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			//if element is not added to the DOM then that element will be having the default state called void 		
			transition('void <=> *', [
				animate(1000, keyframes([
					style({
						transform: 'translateX(-100px)',
						opacity: 0,
						offset: 0
					}),
					style({
						transform: 'translateX(-50px)',
						opacity: 0.,
						offset: 0.3
					}),
					style({
						transform: 'translateX(-20px)',
						opacity: 1,
						offset: 0.8
					}),
					style({
						transform: 'translateX(0px)',
						opacity: 1,
						offset: 1
					})
				]))
			]),
			//removng item from list 		
			transition('* <=> void', [
				//group is used to excure animation synchronously 
				group([
					animate(300, style({
						color: 'red'
					})),
					animate(800, style({
						transform: 'translateX(100px)',
						opacity: 0
					}))
				])
			])
		]),
	]
})
export class AppComponent {
	state = 'normal';
	wildState = 'normal';
	list = ['Milk', 'Sugar', 'Bread'];

	onAdd(item) {
		this.list.push(item);
	}

	onAnimate() {
		this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
		this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
	}
	onShrink() {
		this.wildState == 'shrunken' ? this.wildState = 'normal' : this.wildState = 'shrunken';
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}

	animationStarted(event){
			console.log('start',event)
	}

	animationEnded(event){
			console.log('end',event)
	}
}
