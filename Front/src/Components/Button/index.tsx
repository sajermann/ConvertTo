/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

export function Button({
	children,
	...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className="bg-lime-900 rounded w-32 h-8 p-2 flex items-center justify-center hover:bg-lime-700 transition-colors duration-500"
			{...rest}
		>
			{children}
		</button>
	);
}
