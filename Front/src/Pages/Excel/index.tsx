import { useCallback } from 'react';
import { utils, writeFileXLSX } from 'xlsx';
import { Button } from '../../Components/Button';
import { User } from '../../Types/User';

type Props = {
	data: User[];
};

export function Excel({ data }: Props) {
	// This method works with warning in Ms Excel when is opening
	function handleExport() {
		const tableHtml = document.querySelector('table')?.outerHTML;
		if (!tableHtml) {
			return;
		}
		const url = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;,${escape(
			tableHtml
		)}`;
		const link = document.createElement('a');
		link.setAttribute('download', 'export.xls');
		link.setAttribute('href', url);
		link.click();
	}

	const exportFile = useCallback(() => {
		const ws = utils.json_to_sheet(data);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, 'Data');
		writeFileXLSX(wb, 'My_Data_Export.xlsx');
	}, [data]);

	return <Button onClick={exportFile}>Export Excel</Button>;
}
