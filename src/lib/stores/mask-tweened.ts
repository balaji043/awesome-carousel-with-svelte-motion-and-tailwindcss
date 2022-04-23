import { tweened, type Tweened } from 'svelte/motion';
import { linear } from 'svelte/easing';
export const createMaskTweened = () => {
	const duration = 4600;
	let lastValue = 0;
	const tween: Tweened<number> = tweened(0, {
		easing: linear
	});

	const start = () => {
		tween.set(0, { duration: 0 });
		tween.set(1, { duration, delay: 20 });
	};
	const pause = () => {
		tween.update((_, v) => {
			lastValue = v;
			return v;
		});
	};

	const resume = () => {
		tween.set(1, {
			duration: duration - duration * lastValue
		});
	};
	return {
		subscribe: tween.subscribe,
		start,
		pause,
		resume
	};
};
