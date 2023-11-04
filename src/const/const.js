

export const mainMenu = [
  {
    path: "/",
    name: "✨ Ana Sayfa",
    icon: "",
  },
  {
    path: "/use-cases",
    name: "Kullanım Durumları",
    icon: true,
    subtitle: {
      content_1: {
        title: "Takımlar için",
        comment:
          "Farklı departman ve konumlardaki tüm ekibinizi tek bir hesap altında nasıl planlayabileceğinizi kontrol edin.",
      },
      content_2: {
        title: "Eğitim için",
        comment:
          "Olağanüstü bir öğrenci deneyimi sunmaya odaklanabilmeniz için rezervasyonları otomatikleştirin.",
      },
    },
  },
  {
    path: "/product",
    name: "Ürünler",
    icon: true,
    subtitle: {
      content_1: {
        title: "Uygunluk Durumunuzu Yönetin",
        comment:
          "Programınızı ve toplantılarınızı yaşam tarzınıza uyacak ve işinizi kolaylaştıracak şekilde uyarlayın. Müsaitlik durumunuzu anında güncellemek için takvimlerinizi bağlayın.",
      },
      content_2: {
        title: "For educations",
        comment:
          "Automate bookings so you can focus on delivering an outstanding student experience. ",
      },
    },
  },
  {
    path: "/company",
    name: "Şirketimiz",
    icon: true,
    subtitle: {
      content_1: {
        title: "Hakkımızda",
        comment:
          "2011 yılında kurulan ve kendini buluşmak için zaman bulma sorununu çözmeye adamış, tamamen uzaktan çalışan bir ekibiz.",
      },
      content_2: {
        title: "Yenilikler",
        comment:
          "En son özellikler ve ürün güncellemeleri hakkında daha fazla bilgi edinin. ",
      },
      content_3: {
        title: "Yardım Merkezi",
        comment:
          "Yardıma mı ihtiyacın var? Sitemizde bulunan dökümantasyona, videolara veya foruma göz atabilirsin. ",
      },
      content_4: {
        title: "Güvenlik",
        comment:
          "Hesabınızı, verilerinizi koruyor ve her gün güveninizi kazanıyoruz. ",
      },
    },
  },
  {
    path: "/pricing",
    name: "Fiyatlandırma",
    icon: "",
  },
  {
    path: "/login",
    name: "Giriş Yap",
    icon: "",
  },
];

export let [pricePolicy] = [
  {
    Aylık: [
      {
        id: 0,
        title: "BAŞLANGIÇ",
        price: "Ücretsiz",
        features: ["Güçlü, güvenilir rezervasyon sayfası.", "En iyi uygulama bildirimleri ve rezervasyon formu soruları.", "Google veya Microsoft hesabınızdan 1 bağlantılı takvim"],
      },
      {
        id: 1,
        title: "PROFESYONEL",
        price: "50",
        features: ["SMS hatırlatıcıları", "Google veya Microsoft hesabınızdan 2 bağlantılı takvim ", "Görünüm Özelleştirme", "Rezervasyonları Kabul Et/Reddet"],
      },
      {
        id: 2,
        title: "İŞLETME",
        price: "100",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
      {
        id: 3,
        title: "ÖZEL",
        price: "150",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
    ],
    Yıllık: [
      {
        id: 0,
        title: "STANDART",
        price: "200",
        features: ["Özellik1", "Özellik2", "Özellik3"],
      },
      {
        id: 1,
        title: "PROFESYONEL",
        price: "300",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4"],
      },
      {
        id: 2,
        title: "İŞLETME",
        price: "400",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
      {
        id: 3,
        title: "ÖZEL",
        price: "600",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
    ],
  },
];
