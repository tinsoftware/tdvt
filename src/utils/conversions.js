export const conversionCategories = {
  area: {
    name: "Diện tích",
    units: {
      m2: { name: "Mét vuông (m²)", value: 1 },
      km2: { name: "Kilômét vuông (km²)", value: 1000000 },
      ha: { name: "Hecta (ha)", value: 10000 },
      "sao-bac-bo": { name: "Sào Bắc Bộ", value: 360 },
      "mau-bac-bo": { name: "Mẫu Bắc Bộ", value: 3600 },
      "sao-trung-bo": { name: "Sào Trung Bộ", value: 500 },
      "mau-trung-bo": { name: "Mẫu Trung Bộ", value: 5000 },
      "cong-nam-bo": { name: "Công Nam Bộ", value: 1000 },
      "mau-nam-bo": { name: "Mẫu Nam Bộ", value: 10000 },
    },
  },
  currency: {
    name: "Tiền tệ & Tiếng lóng",
    units: {
      vnd: { name: "Đồng (VNĐ)", value: 1 },
      nghin: { name: "Nghìn / Ngàn", value: 1000 },
      "lit": { name: "Lít (Loét)", value: 100000 },
      "cu": { name: "Củ (Triệu)", value: 1000000 },
      "chai": { name: "Chai (Triệu)", value: 1000000 },
      "qua": { name: "Quả / Líp", value: 1000000 },
      "toi": { name: "Tỏi (Tỷ)", value: 1000000000 },
    },
  },
  length: {
    name: "Độ dài",
    units: {
      mm: { name: "Milimét (mm)", value: 0.001 },
      cm: { name: "Centimét (cm)", value: 0.01 },
      m: { name: "Mét (m)", value: 1 },
      km: { name: "Kilômét (km)", value: 1000 },
      inch: { name: "Inch (in)", value: 0.0254 },
      foot: { name: "Foot (ft)", value: 0.3048 },
      yard: { name: "Yard (yd)", value: 0.9144 },
      mile: { name: "Dặm (mile)", value: 1609.344 },
    },
  },
  mass: {
    name: "Khối lượng",
    units: {
      g: { name: "Gram (g)", value: 0.001 },
      kg: { name: "Kilôgam (kg)", value: 1 },
      ta: { name: "Tạ", value: 100 },
      tan: { name: "Tấn", value: 1000 },
      lb: { name: "Pound (lb)", value: 0.45359237 },
      oz: { name: "Ounce (oz)", value: 0.02834952 },
    },
  },
};

export function convert(value, fromUnit, toUnit, category) {
  if (value === "" || isNaN(value)) return "";
  const cat = conversionCategories[category];
  if (!cat || !cat.units[fromUnit] || !cat.units[toUnit]) return "";

  const valueInBase = value * cat.units[fromUnit].value;
  const result = valueInBase / cat.units[toUnit].value;

  // Formatting for avoiding scientific notation on very small or large numbers
  // and preventing long decimals like 1.999999999999
  const formatted = Number(result.toFixed(10));
  return formatted;
}
