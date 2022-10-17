import { Button } from '../../Components/Button';
import { User } from '../../Types/User';

type Props = {
	data: User[];
};

export function Csv({ data }: Props) {
	function handleExport() {
		if (!data.length) {
			return;
		}
		const config = 'data:text/csv;charset=UTF-8,';
		const headers = `${Object.keys(data[0]).join(',')}\n`;
		const content = `${data.map(e => `${e.id},${e.name},${e.age}`).join('\n')}`;
		const encodedUri = encodeURI(`${config}${headers}${content}`);
		window.open(encodedUri);
		const link = document.createElement('a');
		link.setAttribute('href', encodedUri);
		link.setAttribute('download', 'my_data.csv');
		link.click();
	}

	return <Button onClick={handleExport}>Export Csv</Button>;
}
