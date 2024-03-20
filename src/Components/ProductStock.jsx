import LinearProgress from "@mui/material/LinearProgress";

export default function ProductStock({ availableStock }) {
  const totalStock = 150;
  const stockLevelPercentage = (availableStock / totalStock) * 100;

  const barColor = stockLevelPercentage >= 25 ? "green" : "red";
  const stockText = stockLevelPercentage >= 25 ? "In stock" : "Last few left";
  const textStyle = stockText === "Last few left" ? "redText" : "";

  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={stockLevelPercentage}
        sx={{
          ".MuiLinearProgress-barColorPrimary": {
            backgroundColor: barColor,
          },
        }}
      />
      <p className={textStyle}>{stockText}</p>
    </div>
  );
}
