import { useState, useEffect } from "react"

export const useTimer = (onDone) => {
	const [time, setTime] = useState(0);
	const [timeout, _setTimeout] = useState();
	const [isRunning, setRunning] = useState(false)
	const [to, setTo] = useState(0)


	const countDown = () => {
		setTime((prev) => prev + 0.01);
	};

	const stop = () => {
		setRunning(false)
	}
	const start = (to) => {
		setTo(to)
		setRunning(true)
		countDown()

	}

	const runTimer = () => {
		if (isRunning) {
			if (time >= to) {

				return onDone();
			}
			const timer = setTimeout(() => {
				countDown();
			}, 10);
			_setTimeout(timer);
		}
	};

	const reset = () => {
		setTime(0);
		clearTimeout(timeout);
	};

	useEffect(() => {
		runTimer();
	}, [time]);

	return { time, start, reset, stop };
};