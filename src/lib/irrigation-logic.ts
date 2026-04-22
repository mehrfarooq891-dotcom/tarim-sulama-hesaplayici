export interface CropData {
  name: string;
  kc: number;
  tooltip: string;
}

export const CROPS: Record<string, CropData> = {
  bugday: { name: "Buğday", kc: 0.85, tooltip: "Farklı bitkiler farklı miktarda su ister. Doğru seçim %20'ye kadar tasarruf sağlar." },
  misir: { name: "Mısır", kc: 1.05, tooltip: "Mısır, gelişim döneminde yüksek su ister. Özellikle koçan bağlama dönemi kritiktir." },
  pamuk: { name: "Pamuk", kc: 0.95, tooltip: "Pamukta sulama zamanlaması lif kalitesini doğrudan etkiler." },
  domates: { name: "Domates", kc: 1.10, tooltip: "Domates düzenli su ister; düzensiz sulama meyve çatlamasına neden olur." },
  zeytin: { name: "Zeytin", kc: 0.65, tooltip: "Zeytin kuraklığa dayanıklıdır ancak verim için kritik dönemlerde su şarttır." },
  aycicegi: { name: "Ayçiçeği", kc: 0.95, tooltip: "Ayçiçeği derin köklüdür, ancak tabla oluşumu döneminde su stresi verimi düşürür." },
  patates: { name: "Patates", kc: 1.05, tooltip: "Patates yumru gelişimi için toprak neminin sürekliliği önemlidir." },
  biber: { name: "Biber", kc: 1.05, tooltip: "Biber kökleri yüzeydedir, az ama sık sulama tercih edilmelidir." },
  kavun: { name: "Kavun/Karpuz", kc: 0.95, tooltip: "Olgunlaşma döneminde suyun azaltılması şeker oranını artırır." },
  arpa: { name: "Arpa", kc: 0.80, tooltip: "Arpa, buğdaya göre daha az su ile yetinebilir." },
  sogan: { name: "Soğan", kc: 1.00, tooltip: "Soğan sığ köklüdür ve düzenli toprak nemi ister." },
};

export interface SoilData {
  name: string;
  factor: number;
  tooltip: string;
}

export const SOILS: Record<string, SoilData> = {
  kumlu: { name: "Kumlu Toprak", factor: 1.15, tooltip: "Kumlu toprak suyu hızlı geçirir, daha sık sulama gerektirir." },
  tinli: { name: "Tınlı Toprak", factor: 1.00, tooltip: "İdeal tarım toprağıdır. Suyu ve besini dengeli tutar." },
  killi: { name: "Killi Toprak", factor: 0.85, tooltip: "Suyu uzun süre tutar, drenaj sorununa dikkat edilmelidir." },
};

export const REGIONS = {
  ege: { name: "Ege", eto: { yaz: 6.5, ilkbahar: 3.5, sonbahar: 2.8 } },
  akdeniz: { name: "Akdeniz", eto: { yaz: 7.0, ilkbahar: 4.0, sonbahar: 3.2 } },
  ic_anadolu: { name: "İç Anadolu", eto: { yaz: 5.8, ilkbahar: 3.0, sonbahar: 2.5 } },
  marmara: { name: "Marmara", eto: { yaz: 5.2, ilkbahar: 2.8, sonbahar: 2.2 } },
  dogu_anadolu: { name: "Doğu Anadolu", eto: { yaz: 5.5, ilkbahar: 2.5, sonbahar: 2.0 } },
  karadeniz: { name: "Karadeniz", eto: { yaz: 4.0, ilkbahar: 2.2, sonbahar: 1.8 } },
  guneydogu_anadolu: { name: "Güneydoğu Anadolu", eto: { yaz: 8.5, ilkbahar: 4.5, sonbahar: 3.5 } },
};

export const METHODS = {
  damla: { name: "Damla Sulama", efficiency: 0.90, tooltip: "Damla sulama %30-50 su tasarrufu sağlar. En verimli yöntemdir." },
  yagmurlama: { name: "Yağmurlama", efficiency: 1.20, tooltip: "Yağmurlama geniş alanlarda tercih edilir, buharlaşma kaybı daha yüksektir." },
  salma: { name: "Salma Sulama", efficiency: 1.60, tooltip: "Geleneksel vahşi sulama yöntemidir. Su kaybı en yüksek seviyededir." },
};

export const PROVINCES = [
  { name: "Adana", region: "akdeniz" }, { name: "Adıyaman", region: "guneydogu_anadolu" }, { name: "Afyonkarahisar", region: "ege" },
  { name: "Ağrı", region: "dogu_anadolu" }, { name: "Amasya", region: "karadeniz" }, { name: "Ankara", region: "ic_anadolu" },
  { name: "Antalya", region: "akdeniz" }, { name: "Artvin", region: "karadeniz" }, { name: "Aydın", region: "ege" },
  { name: "Balıkesir", region: "marmara" }, { name: "Bilecik", region: "marmara" }, { name: "Bingöl", region: "dogu_anadolu" },
  { name: "Bitlis", region: "dogu_anadolu" }, { name: "Bolu", region: "karadeniz" }, { name: "Burdur", region: "akdeniz" },
  { name: "Bursa", region: "marmara" }, { name: "Çanakkale", region: "marmara" }, { name: "Çankırı", region: "ic_anadolu" },
  { name: "Çorum", region: "karadeniz" }, { name: "Denizli", region: "ege" }, { name: "Diyarbakır", region: "guneydogu_anadolu" },
  { name: "Edirne", region: "marmara" }, { name: "Elazığ", region: "dogu_anadolu" }, { name: "Erzincan", region: "dogu_anadolu" },
  { name: "Erzurum", region: "dogu_anadolu" }, { name: "Eskişehir", region: "ic_anadolu" }, { name: "Gaziantep", region: "guneydogu_anadolu" },
  { name: "Giresun", region: "karadeniz" }, { name: "Gümüşhane", region: "karadeniz" }, { name: "Hakkari", region: "dogu_anadolu" },
  { name: "Hatay", region: "akdeniz" }, { name: "Isparta", region: "akdeniz" }, { name: "Mersin", region: "akdeniz" },
  { name: "İstanbul", region: "marmara" }, { name: "İzmir", region: "ege" }, { name: "Kars", region: "dogu_anadolu" },
  { name: "Kastamonu", region: "karadeniz" }, { name: "Kayseri", region: "ic_anadolu" }, { name: "Kırklareli", region: "marmara" },
  { name: "Kırşehir", region: "ic_anadolu" }, { name: "Kocaeli", region: "marmara" }, { name: "Konya", region: "ic_anadolu" },
  { name: "Kütahya", region: "ege" }, { name: "Malatya", region: "dogu_anadolu" }, { name: "Manisa", region: "ege" },
  { name: "Kahramanmaraş", region: "akdeniz" }, { name: "Mardin", region: "guneydogu_anadolu" }, { name: "Muğla", region: "ege" },
  { name: "Muş", region: "dogu_anadolu" }, { name: "Nevşehir", region: "ic_anadolu" }, { name: "Niğde", region: "ic_anadolu" },
  { name: "Ordu", region: "karadeniz" }, { name: "Rize", region: "karadeniz" }, { name: "Sakarya", region: "marmara" },
  { name: "Samsun", region: "karadeniz" }, { name: "Siirt", region: "guneydogu_anadolu" }, { name: "Sinop", region: "karadeniz" },
  { name: "Sivas", region: "ic_anadolu" }, { name: "Tekirdağ", region: "marmara" }, { name: "Tokat", region: "karadeniz" },
  { name: "Trabzon", region: "karadeniz" }, { name: "Tunceli", region: "dogu_anadolu" }, { name: "Şanlıurfa", region: "guneydogu_anadolu" },
  { name: "Uşak", region: "ege" }, { name: "Van", region: "dogu_anadolu" }, { name: "Yozgat", region: "ic_anadolu" },
  { name: "Zonguldak", region: "karadeniz" }, { name: "Aksaray", region: "ic_anadolu" }, { name: "Bayburt", region: "karadeniz" },
  { name: "Karaman", region: "ic_anadolu" }, { name: "Kırıkkale", region: "ic_anadolu" }, { name: "Batman", region: "guneydogu_anadolu" },
  { name: "Şırnak", region: "guneydogu_anadolu" }, { name: "Bartın", region: "karadeniz" }, { name: "Ardahan", region: "dogu_anadolu" },
  { name: "Iğdır", region: "dogu_anadolu" }, { name: "Yalova", region: "marmara" }, { name: "Karabük", region: "karadeniz" },
  { name: "Kilis", region: "guneydogu_anadolu" }, { name: "Osmaniye", region: "akdeniz" }, { name: "Düzce", region: "karadeniz" }
].sort((a, b) => a.name.localeCompare(b.name, 'tr'));

export function calculateIrrigation(
  cropKey: string,
  soilKey: string,
  provinceName: string,
  methodKey: string,
  seasonKey: string,
  area: number,
  unit: 'donum' | 'hektar'
) {
  const crop = CROPS[cropKey];
  const soil = SOILS[soilKey];
  const province = PROVINCES.find(p => p.name === provinceName);
  const method = METHODS[methodKey as keyof typeof METHODS];
  
  if (!crop || !soil || !province || !method) return null;

  const region = REGIONS[province.region as keyof typeof REGIONS];
  const eto = region.eto[seasonKey as keyof typeof region.eto];

  // Formula: ETc (mm/day) = ETo × Kc × soil_factor × method_factor
  const etc = eto * crop.kc * soil.factor * method.efficiency;

  // Area in square meters
  const areaM2 = unit === 'donum' ? area * 1000 : area * 10000;

  // Daily water need (litres) = ETc × areaM2
  const dailyLitre = etc * areaM2;
  const weeklyLitre = dailyLitre * 7;

  // Irrigation duration (simplified estimate)
  // Assuming a standard drip emitter flow of 2L/h and 1 emitter per m2
  const hoursPerDay = etc / 2; 

  // Savings potential
  let savings = 0;
  if (methodKey === 'yagmurlama') {
    const damlaEtc = eto * crop.kc * soil.factor * METHODS.damla.efficiency;
    savings = (etc - damlaEtc) * areaM2;
  }

  // Schedule logic
  let schedule = "YOK";
  if (etc > 6) schedule = "TAM (Günde 2 Kez)";
  else if (etc > 4) schedule = "TAM";
  else if (etc > 2) schedule = "ORTA";

  return {
    dailyLitre: Math.round(dailyLitre),
    weeklyLitre: Math.round(weeklyLitre),
    hours: Math.floor(hoursPerDay),
    minutes: Math.round((hoursPerDay % 1) * 60),
    savings: Math.round(savings),
    etc: etc.toFixed(2),
    schedule
  };
}
