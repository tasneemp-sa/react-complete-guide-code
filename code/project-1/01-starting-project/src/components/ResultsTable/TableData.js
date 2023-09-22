import classes from './TableData.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const TableData = props => {
    return <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {props.yearlyTableData.map(dataPerYear => 
      <tr key={dataPerYear.year}>
        <td>{dataPerYear.year}</td>
        <td>{formatter.format(dataPerYear.savingsEndOfYear)}</td>
        <td>{formatter.format(dataPerYear.yearlyInterest)}</td>
        <td>{formatter.format(dataPerYear.savingsEndOfYear - props.initialInvestment - dataPerYear.yearlyContribution * dataPerYear.year)}</td>
        <td>{formatter.format(props.initialInvestment + dataPerYear.yearlyContribution * dataPerYear.year)}</td>
      </tr>
        )}
    </tbody>
  </table>
}

export default TableData;