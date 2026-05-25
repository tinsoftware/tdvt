export const conversionCategories = {
  area: {
    name: "Diện tích",
    units: {
      m2: { name: "Mét vuông (m²)", value: 1 },
      km2: { name: "Kilômét vuông (km²)", value: 1000000 },
      ha: { name: "Hecta (ha)", value: 10000 },
      "sao-bac": { name: "Sào miền Bắc", value: 360 },
      "sao-trung": { name: "Sào miền Trung", value: 500 },
      "mau-bac": { name: "Mẫu miền Bắc", value: 3600 },
      "mau-trung": { name: "Mẫu miền Trung", value: 5000 },
      "mau-nam-nho": { name: "Mẫu miền Nam (10,000m²)", value: 10000 },
      "mau-nam-lon": { name: "Mẫu miền Nam (12,960m²)", value: 12960 },
      "cong-nho": { name: "Công tầm nhỏ (Nam Bộ)", value: 1000 },
      "cong-lon": { name: "Công tầm lớn (Nam Bộ)", value: 1296 },
    },
  },
  currency: {
    name: "Tiền tệ & Tiếng lóng",
    units: {
      vnd: { name: "Đồng (VNĐ)", value: 1 },
      "k": { name: "K (Ngàn)", value: 1000 },
      "xi": { name: "Xị", value: 100000 },
      "loet": { name: "Loét / Lét / Lít", value: 100000 },
      "cu": { name: "Củ (Triệu)", value: 1000000 },
      "chai": { name: "Chai (Triệu)", value: 1000000 },
      "toi": { name: "Tỏi (Tỷ)", value: 1000000000 },
    },
  },
  folk_mass: {
    name: "Khối lượng (Dân gian & Chuẩn)",
    units: {
      kg: { name: "Kilôgam (kg)", value: 1 },
      g: { name: "Gram (g)", value: 0.001 },
      ta: { name: "Tạ (100kg)", value: 100 },
      tan: { name: "Tấn (1000kg)", value: 1000 },
      "gia-20": { name: "Giạ lúa (20kg)", value: 20 },
      "gia-22": { name: "Giạ lúa (22kg)", value: 22 },
      "thung-10": { name: "Thúng (10kg)", value: 10 },
      "thung-12": { name: "Thúng (12kg)", value: 12 },
    },
  },
  folk_length: {
    name: "Độ dài (Dân gian & Chuẩn)",
    units: {
      m: { name: "Mét (m)", value: 1 },
      cm: { name: "Centimét (cm)", value: 0.01 },
      km: { name: "Kilômét (km)", value: 1000 },
      "gang-tay": { name: "Gang tay (~20cm)", value: 0.2 },
      "sai-tay-15": { name: "Sải tay (1.5m)", value: 1.5 },
      "sai-tay-17": { name: "Sải tay (1.7m)", value: 1.7 },
      "dot-ngon-tay": { name: "Đốt ngón tay (~2cm)", value: 0.02 },
    },
  },
};

export function convert(value, fromUnit, toUnit, category) {
  if (value === "" || isNaN(value)) return "";
  const cat = conversionCategories[category];
  if (!cat || !cat.units[fromUnit] || !cat.units[toUnit]) return "";

  const valueInBase = value * cat.units[fromUnit].value;
  const result = valueInBase / cat.units[toUnit].value;

  const formatted = Number(result.toFixed(10));
  return formatted;
}
