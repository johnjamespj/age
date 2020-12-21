import './Container.css';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _DAYS_PER_WEEK = 7

// a and b are javascript Date objects
function dateDiffInWeeks(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor(((utc2 - utc1) / _MS_PER_DAY) / _DAYS_PER_WEEK);
}

function chooseClass(i, completed) {
  let cls = "cell"

  if (i < completed)
    cls += " selected"

  return cls
}

export function Container({ dob, averageAge }) {
  const averageAgeDate = new Date(dob.getFullYear() + averageAge, 0, 1)
  const total = dateDiffInWeeks(dob, averageAgeDate)
  const completed = dateDiffInWeeks(dob, new Date())
  const ary = new Array(total).fill(0).map((_, i) => i)

  return <div className="container">
    {ary.map(x =>
      <div key={x} className={chooseClass(x, completed)} />
    )}
  </div>
}