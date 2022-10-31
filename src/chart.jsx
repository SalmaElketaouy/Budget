import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart(props) {
  console.log(props.income)
  const data = {
    labels: ["desc", "price", "date"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.desc,props.price,props.date],
        backgroundColor: [
          "#808080",
          "#008000",
          "#FF0000",
          
        ],
        borderColor: [
          "#000000",
          "#000000",
          "#000000",
          
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    
    <div style={{ width: 300, textAlign: "center" }}>
      
      <Pie data={data} width={50} height={50} />
      
      
    </div>
  );
}