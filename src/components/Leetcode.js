import { useState, useEffect } from "react";

function Leetcode() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/dominic89231`);
        if (!response.ok) {
          throw new Error(response)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [])

  if (loading) return <div>Loading..</div>
  if (error) return <div><h1>Leetcode</h1>Error: {error.message}</div>

  return (
    <div className="lc">
      <h1>Leetcode</h1>
      <div className="progress-stacked">
        <div class="progress" role="progressbar" aria-label="easy" aria-valuenow={ `${data["easySolved"]}` } aria-valuemin="0" aria-valuemax={ `${data["totalEasy"]}` } style={{width: `${Math.round((data["easySolved"] / data["totalQuestions"]) * 100)}%`}}>
          <div class="progress-bar bg-success"></div>
        </div>
        <div class="progress" role="progressbar" aria-label="medium" aria-valuenow={ `${data["mediumSolved"]}` } aria-valuemin="0" aria-valuemax={ `${data["totalMedium"]}` } style={{width: `${Math.round((data["mediumSolved"] / data["totalQuestions"]) * 100)}%`}}>
          <div class="progress-bar bg-warning"></div>
        </div>
        <div class="progress" role="progressbar" aria-label="hard" aria-valuenow={ `${data["hardSolved"]}` } aria-valuemin="0" aria-valuemax={ `${data["totalHard"]}` } style={{width: `${Math.round((data["hardSolved"] / data["totalQuestions"]) * 100)}%`}}>
          <div class="progress-bar bg-danger"></div>
        </div>
      </div>
      <p>Easy: {data["easySolved"]}</p>
      <p>Medium: {data["mediumSolved"]}</p>
      <p>Hard: {data["hardSolved"]}</p>
    </div>
  )
}

export default Leetcode;