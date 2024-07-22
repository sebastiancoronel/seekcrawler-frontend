export default function JobsTable({ jobs }) {
  return (
    <table className="table table-xs">
      <thead>
        <tr>
          <th>Title</th>
          <th>Summary</th>
          <th>Type</th>
          <th>Location</th>
          <th>Phone 1</th>
          <th>Phone 2</th>
          <th>Salary</th>
          <th>email 1</th>
          <th>email 2</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index}>
            <td className="min-w-[150px]">{job.titulo}</td>
            <td className="min-w-[150px]">{job.resumen}</td>
            <td className="">{job.tipo}</td>
            <td className="min-w-[150px]">{job.ubicacion}</td>
            <td className="">{job.telefono_2}</td>
            <td className="">{job.telefono_1}</td>
            <td className="">{job.salario}</td>
            <td className="">{job.email_1}</td>
            <td className="">{job.email_2}</td>
            <td className="min-w-[150px]">
              <a href={job.link} target="_blank" className="text-blue-500 underline">
                Link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
