export function hollidaySegar(pesoKg: number): number {
  if (pesoKg <= 10) return pesoKg * 100;
  if (pesoKg <= 20) return 1000 + (pesoKg - 10) * 50;
  return 1500 + (pesoKg - 20) * 20;
}

export function antibioticoDose(pesoKg: number, doseMgKg: number): number {
  return pesoKg * doseMgKg;
}
