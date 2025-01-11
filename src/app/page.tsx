"use client";

import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"; // 先ほどのカスタムチャートコンポーネント群へのパス
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// チャートの設定。ラベルや色、アイコンなどを紐付けたい場合に使う
const chartConfig = {
  value: {
    label: "値", // TooltipやLegendでの表示名
    // color: "#FF5733" のように指定も可
  },
  // 複数項目を扱う場合はここに追加
} as const;

// ダミーデータ
const dataA = [
  { day: "Day 1", value: 10 },
  { day: "Day 2", value: 15 },
  { day: "Day 3", value: 8 },
  { day: "Day 4", value: 20 },
];

const dataB = [
  { day: "Day 1", value: 2 },
  { day: "Day 2", value: 30 },
  { day: "Day 3", value: 18 },
  { day: "Day 4", value: 10 },
];

export default function InteractiveSlideChart() {
  const [chartType, setChartType] = React.useState<"line" | "bar">("line");
  const [useAltData, setUseAltData] = React.useState(false);

  // 現在表示するデータを選択　true false 切り替え
  const data = useAltData ? dataB : dataA;

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      {/* ボタンとラジオボタンのUI例 */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setUseAltData((prev) => !prev)}
          className="rounded-md bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600"
        >
          データ切り替え
        </button>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="chartType"
              value="line"
              checked={chartType === "line"}
              onChange={(e) => setChartType(e.target.value as "line")}
            />
            <span>Line Chart</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="chartType"
              value="bar"
              checked={chartType === "bar"}
              onChange={(e) => setChartType(e.target.value as "bar")}
            />
            <span>Bar Chart</span>
          </label>
        </div>
      </div>

      {/* ChartContainer を利用してチャートを配置 */}
      <ChartContainer config={chartConfig} className="w-full max-w-xl">
        {/* chartType に応じて LineChart / BarChart を切り替え */}
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        )}
      </ChartContainer>
    </div>
  );
}
