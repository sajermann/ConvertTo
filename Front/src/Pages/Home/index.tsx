import { LIST } from '../../Data';
import { Csv } from '../Csv';
import { Excel } from '../Excel';

export default function Home() {
	return (
		<div className="m-auto max-w-7xl mt-4">
			<h1>Converter Dados (Dados em Memória)</h1>
			<div className="flex flex-row gap-3 m-4">
				<Csv data={LIST} />
				<Excel data={LIST} />
			</div>
			<table style={{ width: '100%' }}>
				<thead>
					<tr>
						<th style={{ backgroundColor: 'red' }}>ID</th>
						<th style={{ backgroundColor: 'green' }}>Name</th>
						<th style={{ backgroundColor: 'gray' }}>Age</th>
					</tr>
				</thead>
				<tbody>
					{LIST.map(user => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.age}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
