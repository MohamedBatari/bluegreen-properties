export type Lang = 'en' | 'ar' | 'tr'
let current: Lang = 'en'
const listeners: Array<() => void> = []

export function initI18n() {
  const saved = (localStorage.getItem('lang') as Lang) || navigator.language.slice(0,2)
  setLang((['en','ar','tr'] as Lang[]).includes(saved as Lang) ? (saved as Lang) : 'en')
}
export function setLang(l: Lang) {
  current = l
  localStorage.setItem('lang', l)
  document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr')
  listeners.forEach(fn => fn())
}
export function getLang(): Lang { return current }
export function onLangChange(cb: () => void) { listeners.push(cb) }

const dict: Record<Lang, any> = {
  en: {
    nav: { services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: {
      title: { part1: 'Tax‑Free UAE Real Estate', part2: 'Made Simple' },
      subtitle: 'End‑to‑end investment and rental management for international and local investors.',
      ctaPrimary: 'Book a Free Consultation', ctaSecondary: 'Our Services'
    },
    sections: { services: 'What We Do', featured: 'Featured Properties', projects: 'Projects', about: 'About the Founder' },
    services: { subtitle: 'Tailored, transparent services covering the full investment lifecycle.', detail: 'We tailor the process to your budget, risk profile, and timeline. Transparent fees and developer‑paid commissions where applicable.' },
    features: {
      tax: { title: 'Tax‑Free Income Guidance', desc: 'Clear, compliant strategies to benefit from UAE real estate income.' },
      selection: { title: 'Property Selection', desc: 'Hand‑picked projects across Dubai & Abu Dhabi matched to your goals.' },
      e2e: { title: 'End‑to‑End Management', desc: 'From reservation to handover, leasing and renewals — one contact.' },
      remote: { title: 'Remote Investor Friendly', desc: 'Digital signatures, video tours, and transparent reporting while abroad.' }
    },
    projects: {
      subtitle: 'Starter .', detail: 'Curated off‑plan and ready options.',
      sample1: { title: 'Marina Waterfront 1BR', location: 'Dubai Marina' },
      sample2: { title: 'Saadiyat Beach Villa', location: 'Abu Dhabi — Saadiyat' },
      sample3: { title: 'Downtown Skyline 2BR', location: 'Downtown Dubai' },
      list1: { title: 'Harbour Views', location: 'Dubai Creek Harbour' },
      list2: { title: 'Palm Residences', location: 'Palm Jumeirah' },
      list3: { title: 'Business Bay Tower', location: 'Business Bay' }
    },
    about: {
      p1: "I am married and a proud father of two... gaining deep knowledge of the local property market.",
      p2: "These experiences inspired me to establish BlueGreen Properties... Transparency, trust, and professionalism are our core values.",
      quickFacts: 'Quick Facts',
      fact1: 'Based in Dubai, serving UAE & international investors',
      fact2: 'Access to top developers & prime communities',
      fact3: 'Support with contracts, NOCs, escrow & handover',
      fact4: 'Leasing, renewals, and tenant management'
    },
    contact: {
      title: 'Let’s Talk', subtitle: 'Book a free 15‑minute call to discuss goals, budgets, and timelines.',
      emailLabel: 'Email', phoneLabel: 'Phone', fullName: 'Full name', email: 'Email', phone: 'Phone', message: 'Tell us about your goals',
      submit: 'Request Callback', sending: 'Sending…', sent: 'Sent ✅', error: 'Something went wrong. Please try again.'
    }
  },
  ar: {
    nav: { services: 'الخدمات', projects: 'المشاريع', about: 'نبذة عنا', contact: 'اتصل بنا' },
    hero: {
      title: { part1: 'عقارات الإمارات المعفاة من الضرائب', part2: 'بكل بساطة' },
      subtitle: 'خدمة متكاملة للاستثمار وإدارة الإيجار للمستثمرين داخل الدولة وخارجها.',
      ctaPrimary: 'احجز استشارة مجانية', ctaSecondary: 'خدماتنا'
    },
    sections: { services: 'ماذا نقدم', featured: 'عقارات مميزة', projects: 'المشاريع', about: 'عن المؤسس' },
    services: { subtitle: 'خدمات شفافة ومصممة لتغطية دورة الاستثمار كاملة.', detail: 'نخصص العملية وفق ميزانيتك ودرجة المخاطرة والجدول الزمني.' },
    features: {
      tax: { title: 'إرشاد الدخل المعفى من الضرائب', desc: 'استراتيجيات واضحة ومتوافقة للاستفادة من دخل العقار في الإمارات.' },
      selection: { title: 'اختيار العقار', desc: 'مشاريع مختارة بعناية في دبي وأبوظبي حسب أهدافك.' },
      e2e: { title: 'إدارة شاملة', desc: 'من الحجز حتى التسليم والتأجير والتجديد — جهة اتصال واحدة.' },
      remote: { title: 'ملائم للمستثمرين عن بُعد', desc: 'توقيعات رقمية وجولات فيديو وتقارير شفافة أثناء وجودك بالخارج.' }
    },
    projects: {
      subtitle: 'عرض مبدئي — استبدله بقوائم مباشرة لاحقًا.', detail: 'خيارات مختارة جاهزة وتحت الإنشاء.',
      sample1: { title: 'شقة غرفة واحدة على المارينا', location: 'مرسى دبي' },
      sample2: { title: 'فيلا شاطئ السعديات', location: 'أبوظبي — السعديات' },
      sample3: { title: 'شقة غرفتين بإطلالة الداون تاون', location: 'داون تاون دبي' },
      list1: { title: 'إطلالات المرسى', location: 'خور دبي' },
      list2: { title: 'إقامات النخلة', location: 'نخلة جميرا' },
      list3: { title: 'برج الخليج التجاري', location: 'الخليج التجاري' }
    },
    about: {
      p1: 'متزوج وأب لطفلين... اكتسبت معرفة عميقة بسوق العقار المحلي.',
      p2: 'هذه الخبرات ألهمتني لتأسيس BlueGreen Properties... الشفافية والثقة والاحترافية هي قيمنا.',
      quickFacts: 'لمحة سريعة',
      fact1: 'مقرنا دبي ونخدم مستثمرين محليين ودوليين',
      fact2: 'وصول إلى أفضل المطورين والمجتمعات',
      fact3: 'دعم في العقود وخطابات عدم الممانعة والإيداع والانتقال',
      fact4: 'التأجير والتجديد وإدارة المستأجرين'
    },
    contact: {
      title: 'تواصل معنا', subtitle: 'احجز مكالمة مجانية لمدة 15 دقيقة لمناقشة الأهداف والميزانية والجدول الزمني.',
      emailLabel: 'البريد الإلكتروني', phoneLabel: 'الهاتف', fullName: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', message: 'أخبرنا عن أهدافك',
      submit: 'طلب اتصال', sending: 'جارٍ الإرسال…', sent: 'تم الإرسال ✅', error: 'حدث خطأ، حاول مرة أخرى.'
    }
  },
  tr: {
    nav: { services: 'Hizmetler', projects: 'Projeler', about: 'Hakkımızda', contact: 'İletişim' },
    hero: {
      title: { part1: 'Vergisiz BAE Gayrimenkulü', part2: 'Kolaylaştırıldı' },
      subtitle: 'Yurtiçi ve yurtdışı yatırımcılar için uçtan uca yatırım ve kiralama yönetimi.',
      ctaPrimary: 'Ücretsiz Görüşme Al', ctaSecondary: 'Hizmetlerimiz'
    },
    sections: { services: 'Ne Yapıyoruz', featured: 'Öne Çıkan İlanlar', projects: 'Projeler', about: 'Kurucu Hakkında' },
    services: { subtitle: 'Yatırım yaşam döngüsünün tamamını kapsayan şeffaf ve kişiye özel hizmetler.', detail: 'Süreci bütçenize, risk profilinize ve zaman planınıza göre şekillendiririz.' },
    features: {
      tax: { title: 'Vergisiz Gelir Danışmanlığı', desc: 'BAE gayrimenkul gelirinden yararlanmanız için net, uyumlu stratejiler.' },
      selection: { title: 'Mülk Seçimi', desc: 'Dubai ve Abu Dabi genelinde hedeflerinize uygun projeler.' },
      e2e: { title: 'Uçtan Uca Yönetim', desc: 'Rezervasyondan teslimata, kiralamaya ve yenilemelere kadar tek temas noktası.' },
      remote: { title: 'Uzaktan Yatırımcı Dostu', desc: 'Dijital imzalar, video turları ve şeffaf raporlama.' }
    },
    projects: {
      subtitle: 'Başlangıç vitrini — daha sonra canlı ilanlarla değiştirin.', detail: 'Seçilmiş planlı ve hazır seçenekler.',
      sample1: { title: 'Marina Manzaralı 1+1', location: 'Dubai Marina' },
      sample2: { title: 'Saadiyat Sahil Villası', location: 'Abu Dabi — Saadiyat' },
      sample3: { title: 'Downtown Manzaralı 2+1', location: 'Downtown Dubai' },
      list1: { title: 'Liman Manzaraları', location: 'Dubai Creek Harbour' },
      list2: { title: 'Palm Residences', location: 'Palm Jumeirah' },
      list3: { title: 'Business Bay Kulesi', location: 'Business Bay' }
    },
    about: {
      p1: 'Evliyim ve iki çocuk babasıyım... yerel gayrimenkul piyasasında derin bilgi edindim.',
      p2: 'Bu deneyimler BlueGreen Properties’i kurmama ilham verdi... Şeffaflık, güven ve profesyonellik temel değerlerimizdir.',
      quickFacts: 'Hızlı Bilgiler',
      fact1: 'Dubai merkezli, BAE ve uluslararası yatırımcılara hizmet',
      fact2: 'Önde gelen geliştiricilere ve seçkin bölgelere erişim',
      fact3: 'Sözleşmeler, NOC’ler, emanet ve teslim süreç desteği',
      fact4: 'Kiralama, yenileme ve kiracı yönetimi'
    },
    contact: {
      title: 'İletişime Geçin', subtitle: 'Hedeflerinizi konuşalım. 15 dakikalık ücretsiz görüşme.',
      emailLabel: 'E‑posta', phoneLabel: 'Telefon', fullName: 'Ad Soyad', email: 'E‑posta', phone: 'Telefon', message: 'Hedeflerinizi anlatın',
      submit: 'Geri Arama Talebi', sending: 'Gönderiliyor…', sent: 'Gönderildi ✅', error: 'Bir hata oluştu. Lütfen tekrar deneyin.'
    }
  }
}

export function t(path: string): any {
  const parts = path.split('.')
  let obj: any = dict[current]
  for (const p of parts) obj = obj?.[p]
  return obj ?? path
}
