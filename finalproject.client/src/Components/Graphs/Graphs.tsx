// import React from 'react';
// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   Cell,
//   RadialBarChart,
//   RadialBar,
//   Legend,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   Radar,
// } from 'recharts';
import { useMemo } from 'react';
import { PieChart, Pie, Tooltip, RadialBarChart, RadarChart, Legend, RadialBar, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar } from 'recharts';
import { ChartData, ChartType } from '../../Types/ChartData';
import EmotionType from '../../Types/Emotion';

// import '../graph2.css';

// interface IProps {
//   feeling: EmotionType;
// }

export const Graphs = ({ feeling, type }: { feeling: EmotionType; type: ChartType }) => {
  const chartData = useMemo<ChartData>(
    () => [
      {
        name: 'anger',
        value: feeling.anger * 100,
        fill: '#FF0000',
      },
      {
        name: 'contempt',
        value: feeling.contempt * 100,
        fill: '#00FFFF',
      },
      {
        name: 'disgust',
        value: feeling.disgust * 100,
        fill: '#808000',
      },
      {
        name: 'fear',
        value: feeling.fear * 100,
        fill: '#000000',
      },
      {
        name: 'happiness',
        value: feeling.happiness * 100,
        fill: '#00FF00',
      },
      {
        name: 'neutral',
        value: feeling.neutral * 100,
        fill: '#66564A',
      },
      {
        name: 'sadness',
        value: feeling.sadness * 100,
        fill: '#0000FF',
      },
      {
        name: 'surprise',
        value: feeling.surprise * 100,
        fill: '#800080',
      },
    ],
    [feeling]
  );
  if (type === 'pieChart') return <PieGraph data={chartData} />;
  if (type === 'radialBarChart') return <RadialBarGraph data={chartData} />;
  if (type === 'radarChart') return <RadarGraph data={chartData} />;
  return null;
};

const PieGraph = ({ data }: { data: ChartData }) => {
  return (
    <PieChart className='charts__pie' width={400} height={400}>
      <Pie dataKey='value' isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={100} innerRadius={60} fill='#fff' paddingAngle={1} label={entry => entry.name} />
      <Tooltip />
    </PieChart>
  );
};

const RadialBarGraph = ({ data }: { data: ChartData }) => {
  return (
    <RadialBarChart className='charts__radial' width={500} height={300} innerRadius={'10%'} outerRadius={'80%'} data={data} startAngle={180} endAngle={0}>
      <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey={'value'} />
      <Legend iconSize={10} width={120} height={140} layout={'vertical'} verticalAlign={'middle'} align={'right'} />
    </RadialBarChart>
  );
};

const RadarGraph = ({ data }: { data: ChartData }) => {
  return (
    <div className='charts__radar'>
      <RadarChart outerRadius={90} width={500} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={'name'} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name={'Emotions'} dataKey={'value'} stroke={'seagreen'} fill={'tomato'} fillOpacity={65} />
        <Legend />
      </RadarChart>
      <div className='radar__legend'>
        <ul style={{ listStyleType: 'none' }}>
          {data.map((e, i) => (
            <li>
              <p style={{ color: e.fill }}>
                {e.name}: {e.value}%
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const Graphs = ({ feeling }: IProps) => {
//   const dataMap = [
//     {
//       data: [
//         {
//           name: 'anger',
//           value: parseFloat(feeling.anger) * 100,
//           fill: '#FF0000',
//         },
//         {
//           name: 'contempt',
//           value: parseFloat(feeling.contempt) * 100,
//           fill: '#00FFFF',
//         },
//         {
//           name: 'disgust',
//           value: parseFloat(feeling.disgust) * 100,
//           fill: '#808000',
//         },
//         {
//           name: 'fear',
//           value: parseFloat(feeling.fear) * 100,
//           fill: '#000000',
//         },
//         {
//           name: 'happiness',
//           value: parseFloat(feeling.happiness) * 100,
//           fill: '#00FF00',
//         },
//         {
//           name: 'neutral',
//           value: parseFloat(feeling.neutral) * 100,
//           fill: '#66564A',
//         },
//         {
//           name: 'sadness',
//           value: parseFloat(feeling.sadness) * 100,
//           fill: '#0000FF',
//         },
//         {
//           name: 'surprise',
//           value: parseFloat(feeling.surprise) * 100,
//           fill: '#800080',
//         },
//         { name: 'time', value: feeling.time },
//       ],
//     },
//   ];
//   const data = [
//     {
//       name: 'anger',
//       value: (parseFloat(feeling.anger) * 100).toPrecision(3),
//       fill: '#FF0000',
//     },
//     {
//       name: 'contempt',
//       value: (parseFloat(feeling.contempt) * 100).toPrecision(3),
//       fill: '#00FFFF',
//     },
//     {
//       name: 'disgust',
//       value: (parseFloat(feeling.disgust) * 100).toPrecision(3),
//       fill: '#808000',
//     },
//     {
//       name: 'fear',
//       value: (parseFloat(feeling.fear) * 100).toPrecision(3),
//       fill: '#000000',
//     },
//     {
//       name: 'happiness',
//       value: (parseFloat(feeling.happiness) * 100).toPrecision(3),
//       fill: '#00FF00',
//     },
//     {
//       name: 'neutral',
//       value: (parseFloat(feeling.neutral) * 100).toPrecision(3),
//       fill: '#66564A',
//     },
//     {
//       name: 'sadness',
//       value: (parseFloat(feeling.sadness) * 100).toPrecision(3),
//       fill: '#0000FF',
//     },
//     {
//       name: 'surprise',
//       value: (parseFloat(feeling.surprise) * 100).toPrecision(3),
//       fill: '#800080',
//     },
//   ];

//   const PieChartComp = () => {
//     return (
//       <div>
//         <PieChart className='charts__pie' width={400} height={400}>
//           {dataMap.map((s, index) => (
//             <>
//               <Pie
//                 dataKey='value'
//                 isAnimationActive={false}
//                 data={s.data}
//                 cx={200}
//                 cy={200}
//                 outerRadius={100}
//                 innerRadius={60}
//                 fill='#fff'
//                 paddingAngle={1}
//                 label={entry => entry.name}
//               />
//             </>
//           ))}
//           <Tooltip />
//         </PieChart>
//       </div>
//     );
//   };
//   const RadialBarChartComp = () => {
//     return (
//       <div>
//         <RadialBarChart
//           className='charts__radial'
//           width={500}
//           height={300}
//           innerRadius={'10%'}
//           outerRadius={'80%'}
//           data={data}
//           startAngle={180}
//           endAngle={0}
//         >
//           <RadialBar
//             label={{ fill: '#666', position: 'insideStart' }}
//             background
//             dataKey={'value'}
//           />
//           <Legend
//             iconSize={10}
//             width={120}
//             height={140}
//             layout={'vertical'}
//             verticalAlign={'middle'}
//             align={'right'}
//           />
//         </RadialBarChart>
//       </div>
//     );
//   };
//   const RadarChartComp = () => {
//     return (
//       <div className='charts__radar'>
//         <RadarChart outerRadius={90} width={500} height={300} data={data}>
//           <PolarGrid />
//           <PolarAngleAxis dataKey={'name'} />
//           <PolarRadiusAxis angle={30} domain={[0, 150]} />
//           <Radar
//             name={'Emotions'}
//             dataKey={'value'}
//             stroke={'seagreen'}
//             fill={'tomato'}
//             fillOpacity={65}
//           />
//           <Legend />
//         </RadarChart>
//         <div className='radar__legend'>
//           <ul style={{ listStyleType: 'none' }}>
//             {data.map((e, i) => (
//               <li>
//                 <p style={{ color: e.fill }}>
//                   {e.name}: {e.value}%
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
// };

// export default Graphs;
export {};
