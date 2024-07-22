export default function Stats({data}) {
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Minimun Salary</div>
        <div className="stat-value">{data['min_salary']}</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">{data['most_frequent_location']}</div>
        <div className="stat-value text-secondary">{data['max_count']}</div>
        <div className="stat-desc text-secondary">Most frequent location</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Maximun salary</div>
        <div className="stat-value">{data['max_salary']}</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
}
